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
 * never more than one effective instance of each tag), and only creates a new
 * element if none is present.
 *
 * @param {string} routeKey - React Router `location.pathname` value, or `'*'`
 *                            for unmatched routes.
 *
 * @example
 * // In src/layouts/MainLayout.jsx
 * usePageMetadata(location.pathname);
 */

import { useLayoutEffect } from 'react';
import { SEO_METADATA } from '../data/seoMetadata';

const DATA_ATTRIBUTE = 'data-rrc-seo';

function getManagedElement(tag, attribute, value) {
  return document.head.querySelector(
    `${tag}[${attribute}="${escapeAttribute(value)}"][${DATA_ATTRIBUTE}]`
  );
}

function escapeAttribute(value) {
  return String(value).replace(/"/g, '&quot;');
}

function setMeta(attribute, value, content) {
  if (content === undefined || content === null || content === false || content === '') {
    return;
  }

  const existing = getManagedElement('meta', attribute, value);
  if (existing) {
    existing.setAttribute('content', content);
    return;
  }

  const el = document.createElement('meta');
  el.setAttribute(DATA_ATTRIBUTE, '1');
  el.setAttribute(attribute, value);
  el.setAttribute('content', content);
  document.head.appendChild(el);
}

function setCanonicalLink(rel, hrefAttr, href) {
  if (!href) return;

  const existing = getManagedElement('link', 'rel', rel);
  if (existing) {
    existing.setAttribute(hrefAttr, href);
    return;
  }

  const el = document.createElement('link');
  el.setAttribute(DATA_ATTRIBUTE, '1');
  el.setAttribute('rel', rel);
  el.setAttribute(hrefAttr, href);
  document.head.appendChild(el);
}

export default function usePageMetadata(routeKey) {
  useLayoutEffect(() => {
    // Fall back to the 404 config for any unmatched route.
    const config = SEO_METADATA[routeKey] ?? SEO_METADATA['*'];
    if (!config) return;

    // Single document title.
    document.title = config.title;

    // Meta description (single `name="description"` tag).
    setMeta('name', 'description', config.description);

    // Canonical link (only when a verified base URL is available).
    if (config.canonical) {
      setCanonicalLink('rel', 'href', config.canonical);
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

