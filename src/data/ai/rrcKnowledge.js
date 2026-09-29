import { coursePageList } from '../coursePages';
import { programPageList } from '../programPages';

const ROUTES = {
  courses: '/courses',
  programs: '/programs',
  resources: '/resources',
  career: '/career-in-law',
  registration: '/registration',
  contact: '/contact',
  faq: '/faq',
  about: '/about',
};

// Keep course and program details linked to their existing source of truth.
export const rrcKnowledge = {
  academy: {
    name: 'RRC Law Academy',
    scope: 'law entrance courses and preparation programs, study resources, career information, and registration guidance.',
    route: ROUTES.about,
  },
  courses: coursePageList.map((course) => ({
    title: course.title,
    shortTitle: course.shortTitle,
    description: course.description,
    learningAreas: course.learningAreas,
    route: '/courses/' + course.slug,
  })),
  programs: programPageList.map((program) => ({
    title: program.title,
    shortTitle: program.shortTitle,
    description: program.description,
    route: '/programs/' + program.slug,
  })),
  methodology: coursePageList[0]?.methodology ?? [],
  resources: {
    route: ROUTES.resources,
    summary: 'The Study Resources page describes learning areas and approaches for law entrance preparation. It is an overview, not a catalogue of downloadable materials.',
  },
  career: {
    route: ROUTES.career,
    summary: 'The Career in Law page introduces legal education, skills, and examples of professional pathways. Career outcomes are not guaranteed.',
  },
  registration: {
    route: ROUTES.registration,
    summary: 'Visitors can use the Registration / Enquiry page to share which course or program they are interested in.',
  },
  contact: {
    route: ROUTES.contact,
    summary: 'The Contact page lists current enquiry options. Contact details and location information are not confirmed there yet.',
  },
  faq: { route: ROUTES.faq },
  navigation: ROUTES,
  limitations: {
    unconfirmed: ['fees', 'batch dates', 'class timings', 'faculty details', 'official exam dates and rules'],
  },
};

export const assistantSuggestions = [
  'What courses does RRC Law Academy offer?',
  'What is CLAT UG preparation?',
  'What programs are available?',
  'Tell me about the Foundation Program.',
  'How can I register an enquiry?',
  'What can I study for law entrance preparation?',
];
