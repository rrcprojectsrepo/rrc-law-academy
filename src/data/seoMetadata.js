/**
 * Page-specific SEO metadata for RRC Law Academy.
 *
 * Titles and descriptions are derived from verified project content:
 *  - src/data/homepage.js, courses.js, programPages.js, faq.js,
 *    resourcesData.js
 *  - approved Stitch site copy in design_reference/homepage/code.html
 *
 * Canonical URLs are deliberately NOT configured. No production domain is
 * verified anywhere in the repository (the only `canonical` values already in
 * the project are the `[TO CONFIRM]` placeholders). Per the audit, a canonical
 * link must not be emitted until a host is confirmed; the metadata hook below
 * therefore leaves this field null on every route.
 *
 * Route keys are the React Router `location.pathname` values implemented in
 * src/App.jsx.
 */

/**
 * Build a page metadata record.
 *
 * @param {object} [opts]
 * @param {string} opts.title          - HTML document title; also the default for
 *                                      Open Graph / Twitter title and description
 * @param {string} opts.description    - meta description; also the default for
 *                                      Open Graph / Twitter description
 * @param {string} [opts.ogType='website']    - Open Graph object type
 * @param {string} [opts.ogLocale='en_IN']    - Open Graph locale
 * @param {'summary'|'summary_large_article'} [opts.twitterCard='summary_large_article']
 *                                              - Twitter/X card type
 * @returns {object} Config consumed by usePageMetadata
 */
export function seo({
  title,
  description,
  ogType = 'website',
  ogLocale = 'en_IN',
  twitterCard = 'summary_large_article',
} = {}) {
  return {
    title,
    description,
    og: {
      title,
      description,
      type: ogType,
      locale: ogLocale,
    },
    twitter: {
      card: twitterCard,
      title,
      description,
    },
    canonical: null,
  };
}

// Route-path -> metadata. Route paths are the React Router `location.pathname`
// values for the implemented routes in src/App.jsx.
export const SEO_METADATA = {
  '/': seo({
    title: 'RRC Law Academy — Law Entrance Preparation in Thanjavur, Tamil Nadu',
    description:
      'Structured preparation, practical legal learning and mentorship for the next generation of legal professionals. CLAT, AILET and postgraduate law entrance preparation at RRC Law Academy, Thanjavur.',
  }),

  '/about': seo({
    title: 'About RRC Law Academy — Law Entrance Preparation',
    description:
      'RRC Law Academy prepares school students, undergraduates and law graduates for law entrance examinations through structured preparation, practical legal learning and personal mentorship.',
  }),

  '/courses': seo({
    title: 'Courses | CLAT & AILET Law Entrance Preparation at RRC Law Academy',
    description:
      'Explore CLAT UG, CLAT PG, AILET UG and AILET PG law entrance preparation pathways for undergraduate and postgraduate NLU admissions.',
  }),

  '/courses/clat-ug': seo({
    title: 'CLAT UG Course | RRC Law Academy',
    description:
      'CLAT UG preparation for the 2027 cycle at RRC Law Academy, covering English, Current Affairs & GK, Legal Reasoning, Logical Reasoning and Quantitative Techniques.',
  }),

  '/courses/clat-pg': seo({
    title: 'CLAT PG Course | RRC Law Academy',
    description:
      'Postgraduate law entrance preparation for LL.B. graduates and final-year candidates seeking NLU Delhi’s one-year LL.M. programme.',
  }),

  '/courses/ailet-ug': seo({
    title: 'AILET UG Course | RRC Law Academy',
    description:
      'Undergraduate preparation for AILET aspirants targeting premier legal faculties, with a specialised NLU Delhi focus and high-speed logical reasoning.',
  }),

  '/courses/ailet-pg': seo({
    title: 'AILET PG Course | RRC Law Academy',
    description:
      'Postgraduate law entrance preparation for LL.B. graduates and eligible final-year candidates pursuing NLU Delhi’s one-year LL.M. programme.',
  }),

  '/programs': seo({
    title: 'Programs | Structured Law Entrance Preparation at RRC Law Academy',
    description:
      'Explore structured preparation programs designed to build fundamentals, strengthen concepts, practise consistently and improve exam readiness.',
  }),

  '/programs/foundation': seo({
    title: 'Foundation Program | RRC Law Academy',
    description:
      'Build strong fundamentals and disciplined study habits from an early academic stage for law entrance preparation.',
  }),

  '/programs/intensive-revision': seo({
    title: 'Intensive Revision Program | RRC Law Academy',
    description:
      'Focused revision and high-yield examination preparation for upcoming entrance dates.',
  }),

  '/programs/mock-test': seo({
    title: 'Mock Test Program | RRC Law Academy',
    description:
      'Timed practice and rigorous performance review to master sectional speed and pacing.',
  }),

  '/programs/current-affairs': seo({
    title: 'Current Affairs & GK Program | RRC Law Academy',
    description:
      'Regular awareness and comprehensive knowledge development tailored to legal examinations.',
  }),

  '/why-rrc': seo({
    title: 'Why Choose RRC Law Academy | Law Entrance Preparation',
    description:
      'Rigorous preparation with personal mentorship: structured preparation, concept-based learning, regular practice, mock tests and performance analysis.',
  }),

  '/career-in-law': seo({
    title: 'Career in Law | RRC Law Academy',
    description:
      'Explore how legal careers develop and the preparation pathways that support them at RRC Law Academy.',
  }),

  '/resources': seo({
    title: 'Study Resources | RRC Law Academy',
    description:
      'Download study resources for law entrance preparation, including sample question papers for CLAT and AILET, and the 2026–27 prospectus.',
  }),

  '/faq': seo({
    title: 'FAQ | Law Entrance Preparation at RRC Law Academy',
    description:
      'Common questions about enrolment, delivery mode, course selection, study material and how RRC Law Academy tracks and improves performance.',
  }),

  '/contact': seo({
    title: 'Contact RRC Law Academy — Thanjavur, Tamil Nadu',
    description:
      'Enquire about CLAT and AILET courses, preparation programs, or submit a registration enquiry. Call 97511 82452 or email rrclawacademy@gmail.com.',
  }),

  '/registration': seo({
    title: 'Registration | Law Entrance Enquiry at RRC Law Academy',
    description:
      'Submit your details and indicate the course or program you would like to enquire about. CLAT UG, CLAT PG, AILET UG and AILET PG are available as courses.',
  }),

  '/law-colleges': seo({
    title: 'Explore Law Colleges in India | RRC Law Academy',
    description:
      'Explore premier law colleges across India, understand courses, eligibility, and admission routes including CLAT and AILET, and connect with RRC Law Academy preparation.',
  }),

  // Fallback for unmatched routes (404).
  '*': seo({
    title: 'Page Not Found | RRC Law Academy',
    description:
      'The page you are looking for is not available. Return to the RRC Law Academy homepage to explore courses and programs.',
  }),
};

