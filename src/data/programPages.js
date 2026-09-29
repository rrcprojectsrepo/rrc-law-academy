// STEP 7A — Programs data architecture (no JSX, no CSS).
// Source: approved RRC Law Academy ecosystem definitions + program descriptions.
// Unverified values use [TO CONFIRM]; images use [ASSET TO CONFIRM].

import foundationHeroImage from '../assets/program-foundation-hero.png';
import intensiveRevisionHeroImage from '../assets/program-intensive-revision-hero.png';
import mockTestHeroImage from '../assets/program-mock-test-hero.png';
import currentAffairsHeroImage from '../assets/program-current-affairs-hero.png';

// Approved shared preparation philosophy (Understand → Practise → Test → Analyse → Improve)
const SHARED_METHODOLOGY = [
  { id: 'understand', step: '01', title: 'Understand', text: 'Conceptual lectures, statutory principles and foundational clarity.' },
  { id: 'practise', step: '02', title: 'Practise', text: 'Guided exercises, sectional drills and speed-building practice.' },
  { id: 'test', step: '03', title: 'Test', text: 'Periodic assessments and exam-grade simulation papers.' },
  { id: 'analyse', step: '04', title: 'Analyse', text: 'Detailed question-level review and diagnostic feedback.' },
  { id: 'improve', step: '05', title: 'Improve', text: 'Targeted remediation, doubt resolution and strategy fine-tuning.' },
];

const SHARED_FACULTY = [
  { id: 'faculty-1', name: '[Faculty Profile To Be Announced]', role: 'Academic Mentor [To Confirm]', bio: '[Faculty biography to be confirmed]' },
  { id: 'faculty-2', name: '[Faculty Profile To Be Announced]', role: 'Subject Mentor [To Confirm]', bio: '[Faculty biography to be confirmed]' },
];

const SHARED_JOURNEY = [
  { id: 'onboarding', step: 'Phase 1', title: 'Orientation & Diagnostic', text: 'Initial assessment, study plan orientation and baseline review.' },
  { id: 'instruction', step: 'Phase 2', title: 'Guided Academic Input', text: 'Systematic coverage aligned with the programme objectives.' },
  { id: 'consolidation', step: 'Phase 3', title: 'Practice & Consolidation', text: 'Structured drills, revision cycles and diagnostic checkpoints.' },
  { id: 'readiness', step: 'Phase 4', title: 'Evaluation & Final Readiness', text: 'Outcome review, strategy fine-tuning and next-step counselling.' },
];

export const foundation = {
  id: 'foundation',
  slug: 'foundation',
  title: 'Foundation Program',
  shortTitle: 'Foundation',
  eyebrow: 'Early Preparation • Foundational Clarity',
  description: 'Build strong fundamentals and disciplined study habits from an early academic stage for law entrance preparation.',
  heroImage: foundationHeroImage,
  targetAudience: [
    { id: 'school', title: 'School Students (Class XI & XII)', text: 'Students seeking an early, structured start alongside school studies.' },
    { id: 'beginners', title: 'Law Entrance Beginners', text: 'Aspirants starting their legal reasoning and reading preparation from the ground up.' },
    { id: 'professionals', title: 'Working Candidates & Degree Students', text: 'Learners needing a methodical base before attempting intensive entrance modules.' },
    { id: 'early-planners', title: 'Early Planners', text: 'Candidates who want to build reading habits, vocabulary and analytical discipline in advance.' },
  ],
  overview: [
    'The Foundation Program focuses on building strong academic fundamentals, disciplined study habits and core analytical competencies from an early stage.',
    'It provides learners with the conceptual base required for law entrance examinations before advancing into high-intensity practice. Exact schedule, mode and inclusions [TO CONFIRM] upon enquiry.',
  ],
  objectives: [
    { id: 'obj-1', title: 'Core Conceptual Base', text: 'Develop baseline clarity across reading comprehension, foundational reasoning and legal awareness.' },
    { id: 'obj-2', title: 'Disciplined Study Habits', text: 'Establish regular study routines, structured note-taking and consistent reading practice.' },
    { id: 'obj-3', title: 'Analytical Thinking', text: 'Nurture critical thinking and principled argument analysis early in the academic journey.' },
    { id: 'obj-4', title: 'Smooth Progression', text: 'Create a seamless transition into entrance-specific and high-yield preparation tracks.' },
  ],
  features: [
    { id: 'feat-1', title: 'Foundational Curriculum', text: 'Curated coverage focusing on foundational concepts rather than premature test drills.' },
    { id: 'feat-2', title: 'Reading & Vocabulary Cultivation', text: 'Guided reading exercises to strengthen comprehension speed and textual analysis.' },
    { id: 'feat-3', title: 'Analytical Reasoning Basics', text: 'Step-by-step introduction to logic, argumentation and principle-fact frameworks.' },
    { id: 'feat-4', title: 'Academic Mentorship', text: 'Regular guidance to help learners build confidence and maintain study momentum.' },
  ],
  methodology: SHARED_METHODOLOGY,
  structure: {
    title: 'Programme Structure',
    description: 'A phased curriculum designed to develop foundational skills progressively. Specific module hours and scheduling [TO CONFIRM].',
    modules: [
      { id: 'm1', title: 'Module 1 — Reading & Language Fundamentals', topics: ['Reading comprehension foundations', 'Contextual vocabulary building', 'Structural analysis of arguments [TO CONFIRM]'] },
      { id: 'm2', title: 'Module 2 — Reasoning & Analytical Basics', topics: ['Core logical reasoning principles', 'Premise and conclusion identification', 'Analytical problem solving [TO CONFIRM]'] },
      { id: 'm3', title: 'Module 3 — Introduction to Legal Concepts', topics: ['Foundational legal concepts', 'Constitutional basics overview', 'Principle-fact application introduction [TO CONFIRM]'] },
      { id: 'm4', title: 'Module 4 — Quantitative & Numerical Literacy', topics: ['Foundational arithmetic', 'Data interpretation basics', 'Speed and accuracy drills [TO CONFIRM]'] },
    ],
  },

  practice: {
    title: 'Practice & Exercises',
    text: 'Guided practice exercises and foundational drills designed to build consistency. Exact counts [TO CONFIRM].',
    items: ['Guided foundational drills [TO CONFIRM]', 'Concept-check exercises [TO CONFIRM]', 'Diagnostic assessments [TO CONFIRM]'],
  },
  currentAffairs: {
    title: 'Current Awareness Orientation',
    text: 'Introductory current-awareness guidance helping students build news-reading routines and contextual awareness.',
    items: ['Curated reading guidelines [TO CONFIRM]', 'Monthly awareness overviews [TO CONFIRM]'],
  },
  studyMaterial: {
    title: 'Study Material',
    text: 'Comprehensive foundational notes, reading lists and concept workbooks. Exact material inclusions [TO CONFIRM].',
    items: ['Foundational reading primers [TO CONFIRM]', 'Concept workbooks [TO CONFIRM]', 'Reference compilations [TO CONFIRM]'],
  },
  faculty: SHARED_FACULTY,
  batchInformation: {
    programme: 'Foundation Program',
    startDate: '[TO CONFIRM]',
    mode: '[TO CONFIRM]',
    session: '2026–27 Session',
    timings: '[TO CONFIRM]',
  },
  learningEnvironment: [
    'Small cohort focus for personal academic attention [TO CONFIRM]',
    'Structured academic mentorship and progress monitoring [TO CONFIRM]',
    'Interactive classroom / discussion sessions [TO CONFIRM]',
  ],
  studentJourney: SHARED_JOURNEY,
  faqs: [
    {
      q: 'Who should enrol in the Foundation Program?',
      a: 'The Foundation Program is designed for school students (Class XI/XII), degree students, and beginners who want to build a solid base in reading, reasoning and legal fundamentals before taking intensive entrance courses.',
    },
    {
      q: 'Does this programme cover entrance exam syllabi directly?',
      a: 'It focuses on the essential fundamentals—reading comprehension, logical analysis, introductory legal ideas, and quantitative basics—that underpin all major law entrance examinations.',
    },
    {
      q: 'What is the schedule, duration, and delivery mode?',
      a: 'Exact batch schedules, duration and delivery modes are [TO CONFIRM] at the time of academic enquiry.',
    },
  ],
  cta: {
    title: 'Build a Strong Foundation for Your Legal Career',
    text: 'Connect with an academic counsellor to learn more about the Foundation Program schedule and enrolment.',
    primaryCta: { label: 'Explore the Programme', link: '/registration?course=foundation' },
    secondaryCta: { label: 'Talk to a Counsellor', link: '/registration?course=foundation' },
  },
  seoTitle: '[TO CONFIRM]',
  metaDescription: '[TO CONFIRM]',
  canonical: '[TO CONFIRM]',
  primaryKeyword: '[TO CONFIRM]',
};
export const intensiveRevision = {
  id: 'intensive-revision',
  slug: 'intensive-revision',
  title: 'Intensive Revision',
  shortTitle: 'Intensive Revision',
  eyebrow: 'High-Yield Preparation • Rapid Consolidation',
  description: 'Focused revision and high-yield examination preparation for upcoming entrance dates.',
  heroImage: intensiveRevisionHeroImage,
  targetAudience: [
    { id: 'upcoming-aspirants', title: 'Immediate Exam Aspirants', text: 'Candidates appearing for upcoming law entrance examinations in the current cycle.' },
    { id: 'crash-revisers', title: 'Syllabus Consolidators', text: 'Students who have covered the syllabus once and require structured, high-yield revision.' },
    { id: 'repeaters', title: 'Repeaters & Retakers', text: 'Candidates seeking targeted revision to improve speed, eliminate errors and refresh core concepts.' },
    { id: 'final-year', title: 'Final-Year Students', text: 'Degree or board students requiring a compact, time-efficient revision track.' },
  ],
  overview: [
    'The Intensive Revision programme offers focused revision, reinforcement of high-yield concepts, targeted practice and examination-oriented strategy for candidates approaching law entrance dates.',
    'It prioritises rapid recall, question-selection strategy and diagnostic error correction. Exact schedule, duration and inclusions [TO CONFIRM] upon enquiry.',
  ],
  objectives: [
    { id: 'obj-1', title: 'Rapid Syllabus Consolidation', text: 'Revisit high-yield syllabus areas efficiently across all tested subjects.' },
    { id: 'obj-2', title: 'Concept Reinforcement', text: 'Clarify tricky legal doctrines, critical reasoning patterns and core numerical methods.' },
    { id: 'obj-3', title: 'Error Minimisation', text: 'Identify recurring mistakes through diagnostics and apply targeted corrections.' },
    { id: 'obj-4', title: 'Exam-Pacing Strategy', text: 'Sharpen time allocation, section-switching strategies and question triage under timed conditions.' },
  ],
  features: [
    { id: 'feat-1', title: 'High-Yield Subject Capsules', text: 'Focused revision modules targeting frequently tested concepts and frameworks.' },
    { id: 'feat-2', title: 'Speed & Accuracy Drills', text: 'Timed sectional drills to rebuild pacing and reduce unforced errors.' },
    { id: 'feat-3', title: 'Doubt Resolution Sessions', text: 'Dedicated academic discussion to address specific student queries and bottlenecks.' },
    { id: 'feat-4', title: 'Strategy & Test Triage', text: 'Practical guidance on question selection, negative marking control and pacing.' },
  ],
  methodology: SHARED_METHODOLOGY,
  structure: {
    title: 'Programme Structure',
    description: 'A condensed, high-intensity revision schedule covering key subjects and strategy modules. Exact hours and dates [TO CONFIRM].',
    modules: [
      { id: 'm1', title: 'Module 1 — Legal Reasoning High-Yield Review', topics: ['Core constitutional principles review', 'Key statutory frameworks refresher', 'Recent legal precedents review [TO CONFIRM]'] },
      { id: 'm2', title: 'Module 2 — Critical Reasoning & Comprehension Brush-Up', topics: ['Argument analysis review', 'Passage navigation strategies', 'Inference and assumption traps [TO CONFIRM]'] },
      { id: 'm3', title: 'Module 3 — Current Affairs & Legal GK Consolidation', topics: ['High-yield annual current affairs roundup', 'Landmark judgments summary', 'Legal awareness quick-revision [TO CONFIRM]'] },
      { id: 'm4', title: 'Module 4 — Numerical Techniques & Strategy Drills', topics: ['High-frequency quant patterns', 'Speed techniques review', 'Full-paper execution strategy [TO CONFIRM]'] },
    ],
  },
  practice: {
    title: 'Practice & Revision Drills',
    text: 'Timed practice drills and sectional revision papers. Exact test counts [TO CONFIRM].',
    items: ['High-yield sectional drills [TO CONFIRM]', 'Timed revision problem sets [TO CONFIRM]', 'Comprehensive revision tests [TO CONFIRM]'],
  },
  currentAffairs: {
    title: 'Current Affairs Consolidation',
    text: 'High-yield compilations and fast-track briefings of major legal and general awareness developments.',
    items: ['Annual current affairs revision capsule [TO CONFIRM]', 'Landmark legal updates summary [TO CONFIRM]'],
  },
  studyMaterial: {
    title: 'Study Material',
    text: 'Concise high-yield revision booklets, formula sheets and precedent digests. Exact inclusions [TO CONFIRM].',
    items: ['High-yield revision capsules [TO CONFIRM]', 'Quick-reference formula and rule sheets [TO CONFIRM]', 'Diagnostic worksheets [TO CONFIRM]'],
  },
  faculty: SHARED_FACULTY,
  batchInformation: {
    programme: 'Intensive Revision',
    startDate: '[TO CONFIRM]',
    mode: '[TO CONFIRM]',
    session: '2026–27 Session',
    timings: '[TO CONFIRM]',
  },
  learningEnvironment: [
    'Intensive academic pace with high-focus delivery [TO CONFIRM]',
    'Targeted doubt-clearing and error-diagnostic support [TO CONFIRM]',
    'Exam-oriented cohort environment [TO CONFIRM]',
  ],
  studentJourney: SHARED_JOURNEY,
  faqs: [
    {
      q: 'Who should enrol in the Intensive Revision programme?',
      a: 'This programme is intended for students who have already covered the baseline syllabus and want a structured, high-intensity revision track to consolidate concepts before entrance exams.',
    },
    {
      q: 'How does Intensive Revision differ from the Foundation Program?',
      a: 'The Foundation Program builds core concepts from the beginning, while Intensive Revision focuses on rapid recall, error elimination, and exam-oriented strategy.',
    },
    {
      q: 'What are the batch dates and class timings?',
      a: 'Exact batch start dates, timings and session frequencies are [TO CONFIRM] at the time of academic enquiry.',
    },
  ],
  cta: {
    title: 'Accelerate Your Entrance Exam Revision',
    text: 'Speak with an academic counsellor to check upcoming Intensive Revision batches and availability.',
    primaryCta: { label: 'Explore the Programme', link: '/registration?course=intensive-revision' },
    secondaryCta: { label: 'Talk to a Counsellor', link: '/registration?course=intensive-revision' },
  },
  seoTitle: '[TO CONFIRM]',
  metaDescription: '[TO CONFIRM]',
  canonical: '[TO CONFIRM]',
  primaryKeyword: '[TO CONFIRM]',
};
export const mockTest = {
  id: 'mock-test',
  slug: 'mock-test',
  title: 'Mock Test Program',
  shortTitle: 'Mock Test Series',
  eyebrow: 'Exam Simulation • Performance Diagnostics',
  description: 'Timed practice and rigorous performance review to master sectional speed and pacing.',
  heroImage: mockTestHeroImage,
  targetAudience: [
    { id: 'clat-ailet', title: 'CLAT & AILET Aspirants', text: 'Candidates seeking rigorous exam-grade simulation and realistic test conditions.' },
    { id: 'time-managers', title: 'Speed & Pacing Seekers', text: 'Students needing to improve sectional time management and question-selection accuracy.' },
    { id: 'self-study', title: 'Self-Study Candidates', text: 'Aspirants preparing independently who require formal benchmarking and diagnostic reviews.' },
    { id: 'repeater-benchmarkers', title: 'Retakers & Droppers', text: 'Candidates who want to benchmark readiness across multiple full-length papers.' },
  ],
  overview: [
    'The Mock Test Program provides structured practice through exam-grade simulated tests, comprehensive question analysis, performance diagnostics and continuous strategy adjustment.',
    'It trains candidates to manage exam pressure, allocate time across sections effectively, and minimize negative marking under realistic test constraints. Exact test counts, schedule and format [TO CONFIRM] upon enquiry.',
  ],
  objectives: [
    { id: 'obj-1', title: 'Exam-Grade Simulation', text: 'Experience realistic entrance test conditions, question diversity and interface environments.' },
    { id: 'obj-2', title: 'Time & Pacing Mastery', text: 'Master section-wise time distribution, reading pace and pressure management.' },
    { id: 'obj-3', title: 'Diagnostic Feedback', text: 'Receive question-by-question analysis, identifying strengths, weak topics and error patterns.' },
    { id: 'obj-4', title: 'Iterative Improvement', text: 'Refine test-taking strategy after every mock using the Understand-Practise-Test-Analyse-Improve loop.' },
  ],
  features: [
    { id: 'feat-1', title: 'Curated Full-Length Mocks', text: 'Full-length test papers structured according to the latest entrance exam patterns.' },
    { id: 'feat-2', title: 'Sectional & Speed Drills', text: 'Targeted sectional tests to isolate and improve specific subject performance.' },
    { id: 'feat-3', title: 'Detailed Solution Sets', text: 'Comprehensive answer keys and explanatory analyses for every question.' },
    { id: 'feat-4', title: 'Performance Analytics', text: 'Objective metrics on accuracy rates, negative marks, time per question and topic mastery.' },
  ],
  methodology: SHARED_METHODOLOGY,
  structure: {
    title: 'Programme Structure',
    description: 'A progressive testing calendar starting from sectional diagnostics and culminating in full-length simulations. Exact test counts [TO CONFIRM].',
    modules: [
      { id: 'm1', title: 'Stage 1 — Diagnostic & Sectional Benchmarking', topics: ['Subject-wise diagnostic tests', 'Baseline speed and accuracy evaluation', 'Error profile identification [TO CONFIRM]'] },
      { id: 'm2', title: 'Stage 2 — Progressive Multi-Section Mocks', topics: ['Multi-section combination tests', 'Pacing and endurance building', 'Strategy fine-tuning [TO CONFIRM]'] },
      { id: 'm3', title: 'Stage 3 — Full-Length Exam Simulations', topics: ['Proctored full-syllabus papers', 'Timed exam-grade conditions', 'Comprehensive result analytics [TO CONFIRM]'] },
      { id: 'm4', title: 'Stage 4 — Final Readiness Simulations', topics: ['Final pre-exam simulation papers', 'Last-mile question triage review', 'Mindset and exam execution guidance [TO CONFIRM]'] },
    ],
  },
  practice: {
    title: 'Practice & Simulation Framework',
    text: 'A structured battery of sectional and full-length simulated examinations. Exact test numbers [TO CONFIRM].',
    items: ['Full-length entrance mock tests [TO CONFIRM]', 'Sectional speed drills [TO CONFIRM]', 'Previous-pattern review tests [TO CONFIRM]'],
  },
  currentAffairs: {
    title: 'Current Affairs in Mock Tests',
    text: 'Current affairs and legal awareness questions integrated directly into mock papers to reflect contemporary trends.',
    items: ['Passage-based awareness sets [TO CONFIRM]', 'Monthly update assessment modules [TO CONFIRM]'],
  },
  studyMaterial: {
    title: 'Test Material & Explanations',
    text: 'Explanatory solution keys, analytical test review booklets, and question-level breakdown sheets. Inclusions [TO CONFIRM].',
    items: ['Detailed answer keys with step-by-step rationales [TO CONFIRM]', 'Diagnostic scorecards [TO CONFIRM]', 'High-yield question archives [TO CONFIRM]'],
  },
  faculty: SHARED_FACULTY,
  batchInformation: {
    programme: 'Mock Test Program',
    startDate: '[TO CONFIRM]',
    mode: '[TO CONFIRM]',
    session: '2026–27 Session',
    timings: '[TO CONFIRM]',
  },
  learningEnvironment: [
    'Proctored / timed simulation environment [TO CONFIRM]',
    'Question-level diagnostic feedback mechanism [TO CONFIRM]',
    'Post-test doubt clarification and strategy discussion [TO CONFIRM]',
  ],
  studentJourney: SHARED_JOURNEY,
  faqs: [
    {
      q: 'How many mock tests are included in this programme?',
      a: 'Exact numbers of full-length and sectional tests are [TO CONFIRM] at the time of academic enquiry.',
    },
    {
      q: 'Are detailed solutions provided for every question?',
      a: 'Yes, tests are accompanied by explanatory keys and analytical breakdowns to help students understand their errors.',
    },
    {
      q: 'Can students enrolled in other courses join the Mock Test Program?',
      a: 'Yes, the Mock Test Program can be taken independently by self-study students or alongside other academic courses.',
    },
  ],
  cta: {
    title: 'Master Entrance Test Execution Under Timed Conditions',
    text: 'Speak to an academic counsellor to view the mock test schedule and enrolment details.',
    primaryCta: { label: 'Explore the Programme', link: '/registration?course=mock-test' },
    secondaryCta: { label: 'Talk to a Counsellor', link: '/registration?course=mock-test' },
  },
  seoTitle: '[TO CONFIRM]',
  metaDescription: '[TO CONFIRM]',
  canonical: '[TO CONFIRM]',
  primaryKeyword: '[TO CONFIRM]',
};
export const currentAffairs = {
  id: 'current-affairs',
  slug: 'current-affairs',
  title: 'Current Affairs & GK',
  shortTitle: 'Current Affairs & GK',
  eyebrow: 'General Knowledge • Legal Awareness',
  description: 'Regular awareness and comprehensive knowledge development tailored to legal examinations.',
  heroImage: currentAffairsHeroImage,
  targetAudience: [
    { id: 'all-aspirants', title: 'All Law Entrance Aspirants', text: 'Candidates preparing for CLAT, AILET, and other entrance tests where general and legal awareness is evaluated.' },
    { id: 'systematic-learners', title: 'Structured Knowledge Seekers', text: 'Students overwhelmed by uncurated daily news who need a disciplined, exam-focused briefing format.' },
    { id: 'retention-focused', title: 'Revision & Retention Focus', text: 'Learners needing periodic quizzes, monthly compendiums and systematic revision to retain facts.' },
    { id: 'legal-awareness', title: 'Legal Awareness Beginners', text: 'Aspirants who require clarity on constitutional developments, statutory changes and landmark judgments.' },
  ],
  overview: [
    'The Current Affairs & GK programme delivers structured current-affairs learning, general knowledge development, legal awareness and regular revision tailored to law entrance examinations.',
    'It cuts through generic news noise by focusing on high-relevance themes, constitutional developments, international events and contemporary jurisprudence. Exact schedule and materials [TO CONFIRM] upon enquiry.',
  ],
  objectives: [
    { id: 'obj-1', title: 'Curated Exam-Oriented Coverage', text: 'Filter national, international and legal developments into high-yield, exam-relevant briefings.' },
    { id: 'obj-2', title: 'Legal & Constitutional Awareness', text: 'Track landmark judgments, statutory amendments and institutional developments systematically.' },
    { id: 'obj-3', title: 'Static GK Integration', text: 'Connect current events to underlying static GK concepts in history, polity, geography and economics.' },
    { id: 'obj-4', title: 'Regular Revision & Quizzing', text: 'Reinforce memory through weekly quizzes, monthly compendiums and periodic recall assessments.' },
  ],
  features: [
    { id: 'feat-1', title: 'Curated Awareness Briefings', text: 'Structured coverage of major events, legal issues and public policy developments.' },
    { id: 'feat-2', title: 'Legal & Doctrinal Roundups', text: 'Specialized focus on Supreme Court judgments, legislative enactments and legal precedents.' },
    { id: 'feat-3', title: 'Periodic GK Assessments', text: 'Weekly and monthly quizzes to evaluate comprehension, retention and recall under timed limits.' },
    { id: 'feat-4', title: 'Passage-Based Practice Sets', text: 'Practice questions styled after the latest passage-based law entrance testing patterns.' },
  ],
  methodology: SHARED_METHODOLOGY,
  structure: {
    title: 'Programme Structure',
    description: 'A cyclical, continuous learning structure organized by core themes and regular revision milestones. Session schedules [TO CONFIRM].',
    modules: [
      { id: 'm1', title: 'Theme 1 — Legal & Constitutional Developments', topics: ['Supreme Court and High Court judgments', 'Constitutional amendments and bills', 'Key regulatory updates [TO CONFIRM]'] },
      { id: 'm2', title: 'Theme 2 — National Affairs & Public Policy', topics: ['Major national policies and initiatives', 'Governance and institutional developments', 'Socio-economic indices [TO CONFIRM]'] },
      { id: 'm3', title: 'Theme 3 — International Relations & Global Affairs', topics: ['Bilateral treaties and summits', 'International organisations and treaties', 'Global conflicts and diplomacy [TO CONFIRM]'] },
      { id: 'm4', title: 'Theme 4 — Science, Environment & Static GK Links', topics: ['Environmental conventions and protocols', 'Science and technology milestones', 'Foundational static GK integration [TO CONFIRM]'] },
    ],
  },
  practice: {
    title: 'Quizzes & Practice Drills',
    text: 'Regular diagnostic quizzes, passage-based practice sets and retention checkpoints. Exact counts [TO CONFIRM].',
    items: ['Weekly current affairs quizzes [TO CONFIRM]', 'Monthly comprehensive awareness tests [TO CONFIRM]', 'Passage-based entrance style sets [TO CONFIRM]'],
  },
  currentAffairs: {
    title: 'Core Awareness Compendiums',
    text: 'Curated monthly and fortnightly current-affairs digests designed specifically for legal entrance candidates.',
    items: ['Monthly awareness compendiums [TO CONFIRM]', 'Landmark legal update briefs [TO CONFIRM]', 'Key dates and facts roundups [TO CONFIRM]'],
  },
  studyMaterial: {
    title: 'Study Material',
    text: 'Structured monthly compendiums, topic summaries, and revision flash-sheets. Exact inclusions [TO CONFIRM].',
    items: ['Curated monthly GK compendiums [TO CONFIRM]', 'Legal news and judgments digests [TO CONFIRM]', 'Static GK reference summaries [TO CONFIRM]'],
  },
  faculty: SHARED_FACULTY,
  batchInformation: {
    programme: 'Current Affairs & GK',
    startDate: '[TO CONFIRM]',
    mode: '[TO CONFIRM]',
    session: '2026–27 Session',
    timings: '[TO CONFIRM]',
  },
  learningEnvironment: [
    'Regular interactive discussion and briefing sessions [TO CONFIRM]',
    'Structured questioning and retention testing [TO CONFIRM]',
    'Curated reading guidance and source verification [TO CONFIRM]',
  ],
  studentJourney: SHARED_JOURNEY,
  faqs: [
    {
      q: 'Does this programme cover both static GK and current affairs?',
      a: 'Yes, the curriculum integrates contemporary current events with their underlying static GK foundations in polity, history, and institutions.',
    },
    {
      q: 'Is the material tailored specifically for law entrance examinations?',
      a: 'Yes, the focus emphasizes legal awareness, constitutional themes, landmark judgments, and passage-based comprehension required for CLAT, AILET and related law exams.',
    },
    {
      q: 'How frequently are classes or materials released?',
      a: 'The specific release calendar and session frequency are [TO CONFIRM] at the time of academic enquiry.',
    },
  ],
  cta: {
    title: 'Build Systematic Current Affairs & GK Mastery',
    text: 'Speak with an academic counsellor to learn more about the Current Affairs & GK curriculum and enrolment.',
    primaryCta: { label: 'Explore the Programme', link: '/registration?course=current-affairs' },
    secondaryCta: { label: 'Talk to a Counsellor', link: '/registration?course=current-affairs' },
  },
  seoTitle: '[TO CONFIRM]',
  metaDescription: '[TO CONFIRM]',
  canonical: '[TO CONFIRM]',
  primaryKeyword: '[TO CONFIRM]',
};

export const programPages = {
  foundation,
  'intensive-revision': intensiveRevision,
  'mock-test': mockTest,
  'current-affairs': currentAffairs,
};

export const programPageList = [
  foundation,
  intensiveRevision,
  mockTest,
  currentAffairs,
];

export function getProgramPage(slug) {
  return programPages[slug] ?? null;
}






