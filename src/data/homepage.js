import legalDraftingImage from '../assets/beyond-theory-legal-drafting.png';
import mootCourtImage from '../assets/beyond-theory-moot-court.png';
import researchImage from '../assets/beyond-theory-research.png';
import clientCounsellingImage from '../assets/beyond-theory-client-counselling.png';
import legalAidImage from '../assets/beyond-theory-legal-aid.png';
import professionalEthicsImage from '../assets/beyond-theory-professional-ethics.png';

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
      title: "LAW ASPIRANT",
      headline: "BUILD YOUR FOUNDATION",
      tags: "CLAT • AILET • ENTRANCE PREPARATION",
      text: "Build strong reasoning, reading and examination skills through structured preparation.",
      video: "/hero/hero-aspirant.mp4",
      poster: "/hero/hero-aspirant-poster.jpg"
    },
    {
      id: "student",
      title: "LAW STUDENT",
      headline: "LEARN BEYOND THE CLASSROOM",
      tags: "MOOT COURT • CASE ANALYSIS • LEGAL RESEARCH",
      text: "Develop practical legal skills through research, advocacy, analysis and application.",
      video: "/hero/hero-law-student.mp4",
      poster: "/hero/hero-law-student-poster.jpg"
    },
    {
      id: "professional",
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
    { id: 'school-students', badge: 'Pathway 01', icon: 'school', title: 'School Students', text: 'Build early legal awareness.', points: ['CLAT & AILET Orientation', 'Foundational Reasoning', 'Mentored Study Plans'], link: '/courses', linkLabel: 'View Pathway' },
    { id: 'ug-aspirants', badge: 'Pathway 02', icon: 'groups', title: 'Undergraduate Aspirants', text: 'Dedicated CLAT & AILET preparation.', points: ['Full Entrance Syllabi', 'Regular Mock Assessments', 'Current Affairs Briefings'], link: '/courses', linkLabel: 'View Pathway' },
    { id: 'law-graduates', badge: 'Pathway 03', icon: 'work', title: 'Law Graduates', text: 'Advanced preparation for postgraduate specialization.', points: ['CLAT PG & AILET PG Tracks', 'Doctrinal Research Methods', 'Case Law Analysis'], link: '/courses', linkLabel: 'View Pathway' },
    { id: 'professionals', badge: 'Pathway 04', icon: 'menu_book', title: 'Working Professionals', text: 'Flexible preparation for demanding schedules.', points: ['Weekend & Evening Plans', 'Precision Practice Sets', 'Performance Diagnostics'], link: '/programs/foundation', linkLabel: 'View Pathway' },
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
  text: 'Dedicated faculty committed to mentoring every aspirant.',
  items: [
    { id: 'faculty-1', name: '[Faculty Profile To Be Announced]', role: 'Subject Specialisation [To Confirm]', bio: '[Faculty biography to be confirmed]', link: '/about' },
    { id: 'faculty-2', name: '[Faculty Profile To Be Announced]', role: 'Subject Specialisation [To Confirm]', bio: '[Faculty biography to be confirmed]', link: '/about' },
    { id: 'faculty-3', name: '[Faculty Profile To Be Announced]', role: 'Subject Specialisation [To Confirm]', bio: '[Faculty biography to be confirmed]', link: '/about' },
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
    { id: 'material', icon: 'library_books', title: 'Comprehensive Material', text: 'Structured notes and practice sets.' },
    { id: 'tests', icon: 'quiz', title: 'Regular Test Series', text: 'Sectional and full-length tests.' },
    { id: 'affairs', icon: 'newspaper', title: 'Current Affairs Digests', text: 'Curated legal awareness updates.' },
    { id: 'updates', icon: 'gavel', title: 'Legal Updates & Analysis', text: 'Judgments and doctrinal explainers.' },
    { id: 'papers', icon: 'description', title: 'Previous Papers & Practice', text: 'Archived papers with solutions.' },
    { id: 'lectures', icon: 'play_circle', title: 'Recorded Lectures & Support', text: 'Revision recordings and doubt support.' },
  ],
};
export const batches = {
  eyebrow: 'Cohorts & Intake',
  title: 'Upcoming Batches',
  text: 'Contact the academy to confirm schedules.',
  session: '2026–27 Session',
  items: [
    { id: 'batch-clat', title: 'Upcoming Batch — CLAT UG Foundation', programme: '[To Confirm]', startDate: '[To Confirm]', mode: '[To Confirm]', cta: { label: 'Enquire Now', link: '/registration' } },
    { id: 'batch-pg', title: 'Upcoming Batch — CLAT PG / LL.M Intensive', programme: '[To Confirm]', startDate: '[To Confirm]', mode: '[To Confirm]', cta: { label: 'Enquire Now', link: '/registration' } },
    { id: 'batch-ailet', title: 'Upcoming Batch — AILET UG & PG Modular', programme: '[To Confirm]', startDate: '[To Confirm]', mode: '[To Confirm]', cta: { label: 'Enquire Now', link: '/registration' } },
  ],
};
export const testimonials = {
  eyebrow: 'Aspirant Experiences',
  title: 'Student Reflections',
  text: 'Hear from aspirants who trusted RRC Law Academy.',
  items: [
    { id: 't1', quote: '[Verified testimonial to be added]', name: '[Verified Student Name]', role: 'CLAT UG Aspirant' },
    { id: 't2', quote: '[Verified testimonial to be added]', name: '[Verified Student Name]', role: 'CLAT PG Scholar' },
    { id: 't3', quote: '[Verified testimonial to be added]', name: '[Verified Student Name]', role: 'AILET Aspirant' },
  ],
};
export const contact = {
  eyebrow: 'Get In Touch',
  title: "Let's Plan Your Legal Learning Journey",
  text: 'Share your details and our counsellor will guide you.',
  counsellor: { title: 'Talk to a Counsellor', text: 'Speak with our counsellor for selection and schedules.', phone: '[TO CONFIRM]', email: '[TO CONFIRM]', hours: '[TO CONFIRM]' },
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
