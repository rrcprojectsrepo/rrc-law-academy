/**
 * usePageMetadata — keeps the document head in sync with the current route.
 *
 * On every route change this hook updates:
 *  - document.title
 *  - the single `<meta name="description">` tag
 *  - the canonical `<link rel="canonical">` (only when a verified base URL is
 *    available)
 *  - Open Graph tags (og:title, og:description, og:type, og:locale)
 *  - Twitter/X card tags (twitter:card, twitter:title, twitter:description)
 *
 * Every managed tag carries the `data-rrc-seo` attribute. When the route
 * changes the hook first *updates* any existing matching element (so there is
 * never more than one effective instance of each tag), adopts existing unmanaged
 * tags (e.g. from index.html) to prevent duplication, and ensures only one
 * accurate instance is present.
 *
 * @param {string} routeKey - React Router `location.pathname` value, or `'*'`
 *                            for unmatched routes.
 *
 * @example
 * // In src/layouts/MainLayout.jsx
 * usePageMetadata(location.pathname);
 */

import { useLayoutEffect } from 'react';
import { SEO_METADATA, seo } from '../data/seoMetadata';
import { getCollegeBySlug } from '../data/collegesData';

const DATA_ATTRIBUTE = 'data-rrc-seo';

function escapeAttribute(value) {
  return String(value).replace(/"/g, '&quot;');
}

function setMeta(attribute, value, content) {
  if (content === undefined || content === null || content === false || content === '') {
    return;
  }

  // Find all existing tags matching attribute and value (managed or unmanaged)
  const allMatching = Array.from(
    document.head.querySelectorAll(`meta[${attribute}="${escapeAttribute(value)}"]`)
  );

  let target = allMatching.find((el) => el.hasAttribute(DATA_ATTRIBUTE)) || allMatching[0];

  if (!target) {
    target = document.createElement('meta');
    target.setAttribute(DATA_ATTRIBUTE, '1');
    target.setAttribute(attribute, value);
    document.head.appendChild(target);
  } else {
    target.setAttribute(DATA_ATTRIBUTE, '1');
  }

  target.setAttribute('content', content);

  // Remove any duplicate matching elements so only one meta description/tag exists
  for (const el of allMatching) {
    if (el !== target) {
      el.remove();
    }
  }
}

function setCanonicalLink(rel, hrefAttr, href) {
  const existing = Array.from(
    document.head.querySelectorAll(`link[rel="${escapeAttribute(rel)}"]`)
  );

  if (!href) {
    // If no verified canonical URL is provided, remove any existing canonical tag
    for (const el of existing) {
      el.remove();
    }
    return;
  }

  let target = existing.find((el) => el.hasAttribute(DATA_ATTRIBUTE)) || existing[0];

  if (!target) {
    target = document.createElement('link');
    target.setAttribute(DATA_ATTRIBUTE, '1');
    target.setAttribute('rel', rel);
    document.head.appendChild(target);
  } else {
    target.setAttribute(DATA_ATTRIBUTE, '1');
  }

  target.setAttribute(hrefAttr, href);

  for (const el of existing) {
    if (el !== target) {
      el.remove();
    }
  }
}

export default function usePageMetadata(routeKey) {
  useLayoutEffect(() => {
    const normalizedKey =
      routeKey && routeKey !== '/' ? routeKey.replace(/\/+$/, '') : (routeKey || '/');
    let config = SEO_METADATA[normalizedKey] || SEO_METADATA[routeKey];

    // Dynamically generate metadata for individual college profile pages.
    if (!config && normalizedKey.startsWith('/law-colleges/')) {
      const slug = normalizedKey.replace('/law-colleges/', '').replace(/\/$/, '');
      const college = getCollegeBySlug(slug);
      if (college) {
        config = seo({
          title: `${college.name} — Admission Routes, Courses & Law Entrance Preparation | RRC Law Academy`,
          description: `Explore admissions, entrance exams, courses, and eligibility for ${college.fullName} (${college.city}, ${college.state}). Prepare for ${college.entranceExams.join(', ')} with RRC Law Academy.`,
        });
      }
    }

    // Fall back to the 404 config for any unmatched route.
    if (!config) {
      config = SEO_METADATA['*'];
    }
    if (!config) return;

    // Single document title.
    document.title = config.title;

    // Meta description (single `name="description"` tag).
    setMeta('name', 'description', config.description);

    // Canonical link (only when a verified base URL is available).
    if (config.canonical) {
      setCanonicalLink('canonical', 'href', config.canonical);
    } else {
      setCanonicalLink('canonical', 'href', null);
    }

    // Open Graph.
    const og = config.og;
    if (og) {
      setMeta('property', 'og:title', og.title);
      setMeta('property', 'og:description', og.description);
      if (og.type) setMeta('property', 'og:type', og.type);
      if (og.locale) setMeta('property', 'og:locale', og.locale);
    }

    // Twitter/X card.
    const twitter = config.twitter;
    if (twitter) {
      setMeta('name', 'twitter:card', twitter.card);
      setMeta('name', 'twitter:title', twitter.title);
      setMeta('name', 'twitter:description', twitter.description);
    }
  }, [routeKey]);
}
