import legalDraftingImage from '../assets/beyond-theory-legal-drafting.png';
import mootCourtImage from '../assets/beyond-theory-moot-court.png';
import researchImage from '../assets/beyond-theory-research.png';
import clientCounsellingImage from '../assets/beyond-theory-client-counselling.png';
import legalAidImage from '../assets/beyond-theory-legal-aid.png';
import professionalEthicsImage from '../assets/beyond-theory-professional-ethics.png';
import pathwaySchoolStudentsImage from '../assets/pathway-school-students.webp';
import pathwayUndergraduateAspirantsImage from '../assets/pathway-undergraduate-aspirants.webp';
import pathwayLawGraduatesImage from '../assets/pathway-law-graduates.webp';
import pathwayWorkingProfessionalsImage from '../assets/pathway-working-professionals.webp';

// Homepage part 1: hero + journey + pillars + methodology + skills.
export const hero = {
  persistent: {
    title: "RRC LAW ACADEMY",
    subtitle1: "FROM ASPIRANT TO LAW SCHOOL.",
    subtitle2: "FROM LAW SCHOOL TO LEGAL CAREER.",
    text: "Structured preparation, practical legal learning and mentorship for the next generation of legal professionals.",
    primaryCta: { label: "Explore Your Journey", link: "/courses" },
    secondaryCta: { label: "Enquire Now", link: "/registration" },
  },
  scenes: [
    {
      id: "aspirant",
      number: "01",
      title: "LAW ASPIRANT",
      headline: "BUILD YOUR FOUNDATION",
      tags: "CLAT • AILET • ENTRANCE PREPARATION",
      text: "Build strong reasoning, reading and examination skills through structured preparation.",
      video: "/hero/hero-aspirant.mp4",
      poster: "/hero/hero-aspirant-poster.jpg"
    },
    {
      id: "student",
      number: "02",
      title: "LAW STUDENT",
      headline: "LEARN BEYOND THE CLASSROOM",
      tags: "MOOT COURT • CASE ANALYSIS • LEGAL RESEARCH",
      text: "Develop practical legal skills through research, advocacy, analysis and application.",
      video: "/hero/hero-law-student.mp4",
      poster: "/hero/hero-law-student-poster.jpg"
    },
    {
      id: "professional",
      number: "03",
      title: "LEGAL PROFESSIONAL",
      headline: "BUILD YOUR LEGAL CAREER",
      tags: "ADVOCACY • SPECIALIZATION • PROFESSIONAL SKILLS",
      text: "Continue developing the knowledge and practical skills required for the next stage of your legal career.",
      video: "/hero/hero-professional.mp4",
      poster: "/hero/hero-professional-poster.jpg"
    }
  ]
};
export const journey = {
  eyebrow: 'Begin With Clarity',
  title: 'Your Journey Into Law Starts Here',
  text: 'Every legal career begins somewhere.',
  items: [
    {
      id: 'school-students',
      badge: 'Pathway 01',
      icon: 'school',
      title: 'School Students',
      text: 'Build early legal awareness.',
      image: pathwaySchoolStudentsImage,
      alt: 'Indian school student in neat uniform studying with books in a sunlit library',
      points: ['CLAT & AILET Orientation', 'Foundational Reasoning', 'Mentored Study Plans'],
      link: '/courses',
      linkLabel: 'View Pathway'
    },
    {
      id: 'ug-aspirants',
      badge: 'Pathway 02',
      icon: 'groups',
      title: 'Undergraduate Aspirants',
      text: 'Dedicated CLAT & AILET preparation.',
      image: pathwayUndergraduateAspirantsImage,
      alt: 'Focused undergraduate student preparing for CLAT and AILET entrance examinations',
      points: ['Full Entrance Syllabi', 'Regular Mock Assessments', 'Current Affairs Briefings'],
      link: '/courses',
      linkLabel: 'View Pathway'
    },
    {
      id: 'law-graduates',
      badge: 'Pathway 03',
      icon: 'work',
      title: 'Law Graduates',
      text: 'Advanced preparation for postgraduate specialization.',
      image: pathwayLawGraduatesImage,
      alt: 'Indian law graduate in formal business attire researching case law in a legal library',
      points: ['CLAT PG & AILET PG Tracks', 'Doctrinal Research Methods', 'Case Law Analysis'],
      link: '/courses',
      linkLabel: 'View Pathway'
    },
    {
      id: 'professionals',
      badge: 'Pathway 04',
      icon: 'menu_book',
      title: 'Working Professionals',
      text: 'Flexible preparation for demanding schedules.',
      image: pathwayWorkingProfessionalsImage,
      alt: 'Working professional in tailored navy blazer studying legal materials at a tidy desk',
      points: ['Weekend & Evening Plans', 'Precision Practice Sets', 'Performance Diagnostics'],
      link: '/programs/foundation',
      linkLabel: 'View Pathway'
    },
  ],
};
export const pillars = {
  eyebrow: 'Holistic Development',
  title: 'More Than Exam Preparation',
  text: 'Legal education that builds reasoning alongside readiness.',
  items: [
    { id: 'knowledge', number: '01', title: 'Deep Legal Knowledge', text: 'Doctrinal understanding of constitutional principles.' },
    { id: 'thinking', number: '02', title: 'Critical Thinking', text: 'Analytical reasoning and structured argumentation.' },
    { id: 'skills', number: '03', title: 'Practical Skills', text: 'Drafting, research, advocacy through guided modules.' },
    { id: 'ethics', number: '04', title: 'Ethics & Leadership', text: 'Professional integrity essential to legal practice.' },
  ],
};
export const methodology = {
  eyebrow: 'Proven Pedagogy',
  title: 'A Structured Approach to Learning',
  items: [
    { id: 'understand', step: '01', title: 'Understand', text: 'Conceptual lectures, case discussions, statutory principles.', icon: 'menu_book' },
    { id: 'practise', step: '02', title: 'Practise', text: 'Guided exercises, sectional drills, speed drills.', icon: 'edit' },
    { id: 'test', step: '03', title: 'Test', text: 'Full-length proctored simulations under exam-grade conditions.', icon: 'quiz' },
    { id: 'analyse', step: '04', title: 'Analyse', text: 'Granular question-level performance reviews & diagnostic feedback.', icon: 'analytics' },
    { id: 'improve', step: '05', title: 'Improve', text: 'Targeted remediation, doubt clarification, and strategy fine-tuning.', icon: 'trending_up' },
  ],
};
export const skills = {
  eyebrow: 'Beyond Theory',
  title: 'Build Skills Beyond the Exam',
  text: 'Develop courtroom confidence and drafting precision.',
  items: [
    { id: 'drafting', icon: 'edit_document', title: 'Legal Drafting', text: 'Precise drafting of petitions, contracts, notices, and opinions.', image: legalDraftingImage, alt: 'Law student preparing legal documents' },
    { id: 'moot', icon: 'gavel', title: 'Moot Court', text: 'Simulated advocacy, oral submissions, memorial preparation.', image: mootCourtImage, alt: 'Law students participating in a moot court session' },
    { id: 'research', icon: 'manage_search', title: 'Research & Interpretation', text: 'Statute reading, precedent analysis, legal reasoning.', image: researchImage, alt: 'Law student researching legal materials' },
    { id: 'counselling', icon: 'forum', title: 'Client Counselling', text: 'Interviewing, advising, and ethical representation.', image: clientCounsellingImage, alt: 'Legal consultation between a law student and client' },
    { id: 'aid', icon: 'volunteer_activism', title: 'Legal Aid Clinics', text: 'Community service, access to justice, field exposure.', image: legalAidImage, alt: 'Legal student providing community legal assistance' },
    { id: 'ethics', icon: 'balance', title: 'Professional Ethics', text: 'Integrity, confidentiality, duties to court and client.', image: professionalEthicsImage, alt: 'Law students discussing professional ethics' },
  ],
};
export const whyRRC = {
  eyebrow: 'Why Choose Us',
  title: 'Why Choose RRC Law Academy',
  text: 'Rigorous preparation with personal mentorship.',
  items: [
    { id: 'structured', number: '1', icon: 'schema', title: 'Structured Preparation', text: 'Systematic syllabus breakdown with transparent milestones.' },
    { id: 'concept', number: '2', icon: 'psychology', title: 'Concept-Based Learning', text: 'Doctrinal mastery rather than rote retention.' },
    { id: 'practice', number: '3', icon: 'repeat', title: 'Regular Practice', text: 'Daily sets to hone accuracy and pace.' },
    { id: 'mocks', number: '4', icon: 'timer', title: 'Mock Tests', text: 'Timed simulations matching exam difficulty.' },
    { id: 'analysis', number: '5', icon: 'analytics', title: 'Performance Analysis', text: 'Diagnostics for gaps and bottlenecks.' },
    { id: 'guidance', number: '6', icon: 'school', title: 'Academic Guidance', text: 'Personalized mentorship and timetables.' },
  ],
  highlight: { id: 'career', number: '7', icon: 'workspace_premium', title: 'Career-Focused Outcomes', text: 'Admissions strategy and counselling beyond entrance day.', cta: { label: 'Explore Programmes', link: '/programs/foundation' } },
};
export const facultyPlaceholders = {
  eyebrow: 'Expert Mentorship',
  title: 'Learn with Confidence',
  text: 'Experienced educators and legal scholars dedicated to guiding every aspirant.',
  items: [
    {
      id: 'faculty-1',
      name: 'Constitutional & Legal Faculty',
      role: 'Legal Reasoning & Jurisprudence Lead',
      bio: 'Guiding aspirants through constitutional interpretation, landmark Supreme Court precedents, and analytical legal aptitude.',
      link: '/about',
    },
    {
      id: 'faculty-2',
      name: 'Logical Reasoning Specialist',
      role: 'Analytical Aptitude & Critical Thinking Lead',
      bio: 'Focused on deductive logic, syllogisms, and structured problem-solving strategies for competitive law entrances.',
      link: '/about',
    },
    {
      id: 'faculty-3',
      name: 'Current Legal Affairs Mentor',
      role: 'Statutory Developments & GK Lead',
      bio: 'Curating regular legal updates, national policy developments, and monthly compendiums tailored to entrance syllabi.',
      link: '/about',
    },
  ],
};
export const timeline = {
  eyebrow: 'Structured Progression',
  title: 'Student Learning Journey',
  text: 'From foundations to examination readiness.',
  items: [
    { id: 'foundation', step: 'Phase 1', icon: 'foundation', title: 'Foundation & Fundamentals', text: 'Strengthen core concepts and study routines.' },
    { id: 'core', step: 'Phase 2', icon: 'menu_book', title: 'Core Law & Test Strategy', text: 'Master topics with integrated practice.' },
    { id: 'revision', step: 'Phase 3', icon: 'refresh', title: 'Intensive Revision', text: 'High-yield consolidation and simulations.' },
    { id: 'readiness', step: 'Phase 4', icon: 'verified', title: 'Final Readiness', text: 'Performance review and confident execution.' },
  ],
};
export const resources = {
  eyebrow: 'Beyond Classroom',
  title: 'Study Resources',
  text: 'Learning support beyond scheduled sessions.',
  items: [
    {
      id: 'material',
      icon: 'library_books',
      title: 'Comprehensive Material',
      text: 'Structured preparatory notes, foundational primers, and syllabus reference guides.',
      link: '/resources',
      action: 'View Materials',
    },
    {
      id: 'tests',
      icon: 'quiz',
      title: 'Regular Test Series',
      text: 'Exam-grade timed simulation papers and sectional drills with diagnostic review.',
      link: '/programs/mock-test',
      action: 'View Practice Tests',
    },
    {
      id: 'affairs',
      icon: 'newspaper',
      title: 'Current Affairs Digests',
      text: 'Curated monthly awareness compilations, legal roundups, and static GK integration.',
      link: '/programs/current-affairs',
      action: 'Read Current Affairs',
    },
    {
      id: 'updates',
      icon: 'gavel',
      title: 'Legal Updates & Analysis',
      text: 'Doctrinal summaries of landmark Supreme Court judgments and statutory amendments.',
      link: '/resources',
      action: 'Explore Legal Updates',
    },
    {
      id: 'papers',
      icon: 'description',
      title: 'Previous Papers & Practice',
      text: 'Official entrance question papers and downloadable model practice sets for CLAT and AILET.',
      link: '/resources',
      action: 'View Previous Papers',
    },
    {
      id: 'lectures',
      icon: 'play_circle',
      title: 'Recorded Lectures & Support',
      badge: 'Enrolled Batches',
      text: 'Classroom revision recordings and doubt support provided to enrolled students upon batch intake.',
      link: '/contact',
      action: 'Enquire About Access',
    },
  ],
};
export const batches = {
  eyebrow: 'Cohorts & Intake',
  title: 'Upcoming Batches',
  text: 'Contact the admissions desk for current intake schedules and cohort availability.',
  session: '2026–27 Session',
  items: [
    {
      id: 'batch-clat',
      title: 'Upcoming Batch — CLAT UG Foundation',
      programme: 'CLAT UG (1-Year & 2-Year)',
      startDate: 'Admissions Open',
      mode: 'Classroom / Hybrid',
      cta: { label: 'Enquire Now', link: '/registration' },
    },
    {
      id: 'batch-pg',
      title: 'Upcoming Batch — CLAT PG / LL.M Intensive',
      programme: 'CLAT PG / LL.M Advanced',
      startDate: 'Admissions Open',
      mode: 'Classroom / Hybrid',
      cta: { label: 'Enquire Now', link: '/registration' },
    },
    {
      id: 'batch-ailet',
      title: 'Upcoming Batch — AILET UG & PG Modular',
      programme: 'AILET UG & PG Comprehensive',
      startDate: 'Admissions Open',
      mode: 'Classroom / Hybrid',
      cta: { label: 'Enquire Now', link: '/registration' },
    },
  ],
};
// ============================================================================
// LAW ENTRANCE PREPARATION PERSPECTIVES (Core Study Focus Areas)
// Authentic preparation insights reflecting the key academic disciplines
// required for undergraduate, postgraduate, and specialized entrance exams.
// ============================================================================
export const testimonials = {
  eyebrow: 'Aspirant Insights',
  title: 'Law Entrance Preparation Focus',
  text: 'Core study disciplines and strategic preparation focus areas for competitive law entrance examinations.',
  items: [
    {
      id: 'focus-ug',
      icon: 'school',
      title: 'Foundational Legal Aptitude',
      track: 'CLAT UG Preparation Focus',
      discipline: 'Reading Speed & Comprehension',
      insight: 'Developing rapid reading speed, deductive reasoning, and current affairs retention through daily structured routines and timed sectional assessments.',
    },
    {
      id: 'focus-pg',
      icon: 'menu_book',
      title: 'Advanced Doctrinal Analysis',
      track: 'CLAT PG & LL.M Track',
      discipline: 'Constitutional & Jurisprudential Depth',
      insight: 'Mastering foundational constitutional principles, landmark Supreme Court jurisprudence, and statutory interpretation with structured case brief reviews.',
    },
    {
      id: 'focus-ailet',
      icon: 'balance',
      title: 'Analytical Speed & Precision',
      track: 'AILET Entrance Focus',
      discipline: 'Analytical Agility & Time Allocation',
      insight: 'Sharpening logical deduction, English language precision, and disciplined time-allocation strategies tailored to NLU Delhi’s rigorous testing format.',
    },
  ],
};
export const contact = {
  eyebrow: 'Get In Touch',
  title: "Let's Plan Your Legal Learning Journey",
  text: 'Share your details and our counsellor will guide you.',
  counsellor: { title: 'Talk to a Counsellor', text: 'Speak with our counsellor for selection and schedules.', phone: '97511 82452', email: 'rrclawacademy@gmail.com', hours: '[TO CONFIRM]' },
  formTitle: 'Send an Enquiry',
  formText: 'Fill in your details and preferred programme.',
  targetExams: ['CLAT UG', 'CLAT PG', 'AILET UG', 'AILET PG', 'Foundation', 'Not Sure Yet'],
};
export const finalCta = {
  title: 'Ready to Take the Next Step Toward Law?',
  text: 'Begin with structured guidance and mentorship.',
  primaryCta: { label: 'Explore Courses', link: '/courses' },
  secondaryCta: { label: 'Talk to a Counsellor', link: '/registration' },
};
