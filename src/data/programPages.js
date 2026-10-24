// Programs data architecture for RRC Law Academy
// Source: approved RRC Law Academy ecosystem definitions + program descriptions.
// Verified academic delivery modes: Classroom (Thanjavur) & Hybrid Mentorship.

import foundationHeroImage from '../assets/program-foundation-hero.webp';
import intensiveRevisionHeroImage from '../assets/program-intensive-revision-hero.webp';
import mockTestHeroImage from '../assets/program-mock-test-hero.webp';
import currentAffairsHeroImage from '../assets/program-current-affairs-hero.webp';

// Approved shared preparation philosophy (Understand -> Practise -> Test -> Analyse -> Improve)
const SHARED_METHODOLOGY = [
  { id: 'understand', step: '01', title: 'Understand', text: 'Conceptual lectures, statutory principles and foundational clarity across all legal disciplines.' },
  { id: 'practise', step: '02', title: 'Practise', text: 'Guided exercises, sectional drills, passage navigation, and speed-building practice.' },
  { id: 'test', step: '03', title: 'Test', text: 'Periodic assessments, timed sectional checks, and exam-grade simulation papers.' },
  { id: 'analyse', step: '04', title: 'Analyse', text: 'Detailed question-level review, score distribution diagnostic, and individualized feedback.' },
  { id: 'improve', step: '05', title: 'Improve', text: 'Targeted remediation, personal doubt resolution, and personalized test-taking strategy fine-tuning.' },
];

const SHARED_JOURNEY = [
  { id: 'onboarding', step: 'Phase 1', title: 'Orientation & Diagnostic', text: 'Initial academic assessment, study plan orientation, and baseline diagnostic evaluation.' },
  { id: 'instruction', step: 'Phase 2', title: 'Guided Academic Input', text: 'Systematic conceptual coverage and structured mentoring aligned with programme objectives.' },
  { id: 'consolidation', step: 'Phase 3', title: 'Practice & Consolidation', text: 'Structured drills, revision cycles, and diagnostic checkpoints to solidify learning.' },
  { id: 'readiness', step: 'Phase 4', title: 'Evaluation & Final Readiness', text: 'Comprehensive readiness review, pacing strategy calibration, and individualized counselling.' },
];

export const foundation = {
  id: 'foundation',
  slug: 'foundation',
  title: 'Foundation Program',
  shortTitle: 'Foundation',
  eyebrow: 'Early Preparation • Foundational Clarity',
  description: 'Build strong fundamentals, reading discipline, and core analytical competencies from an early academic stage for law entrance preparation.',
  heroImage: foundationHeroImage,
  targetAudience: [
    { id: 'school', title: 'School Students (Class XI & XII)', text: 'Students seeking an early, structured start alongside school studies without overwhelming academic pressure.' },
    { id: 'beginners', title: 'Law Entrance Beginners', text: 'Aspirants starting their legal reasoning, language analysis, and reading preparation from the ground up.' },
    { id: 'professionals', title: 'Working Candidates & Degree Students', text: 'Learners needing a methodical conceptual base before attempting intensive entrance test modules.' },
    { id: 'early-planners', title: 'Early Planners', text: 'Candidates who want to build critical reading habits, advanced vocabulary, and analytical discipline well in advance.' },
  ],
  overview: [
    'The Foundation Program at RRC Law Academy focuses on building strong academic fundamentals, disciplined study habits, and core analytical competencies from an early stage.',
    'It provides learners with the conceptual base required for competitive law entrance examinations before advancing into high-intensity practice. Structured classroom guidance in Thanjavur and hybrid mentorship ensure steady, long-term mastery.',
  ],
  admissionsNotice: {
    title: 'Foundation Admissions Open',
    text: 'Early batches for Class XI & XII students and beginners are open for the 2026–27 session. Weekend and after-school schedules are designed to complement regular schooling.',
    points: [
      'Comprehensive coverage of reading comprehension & legal vocabulary',
      'Small cohort sizes ensuring individualized faculty interaction',
      'Weekend classroom sessions in Thanjavur & hybrid learning support',
    ],
    cta: { label: 'Enquire for Foundation', link: '/registration?course=foundation' },
  },
  objectives: [
    { id: 'obj-1', title: 'Core Conceptual Base', text: 'Develop baseline clarity across reading comprehension, foundational reasoning, and legal awareness.' },
    { id: 'obj-2', title: 'Disciplined Study Habits', text: 'Establish regular study routines, structured note-taking, and consistent analytical reading practice.' },
    { id: 'obj-3', title: 'Analytical Thinking', text: 'Nurture critical thinking, premise evaluation, and principled argument analysis early in the academic journey.' },
    { id: 'obj-4', title: 'Smooth Progression', text: 'Create a seamless transition into entrance-specific cohorts and high-yield test preparation tracks.' },
  ],
  features: [
    { id: 'feat-1', title: 'Foundational Curriculum', text: 'Curated coverage focusing on foundational concepts and structural reasoning rather than premature test drills.' },
    { id: 'feat-2', title: 'Reading & Vocabulary Cultivation', text: 'Guided reading exercises to strengthen comprehension speed, syntactic analysis, and legal language nuances.' },
    { id: 'feat-3', title: 'Analytical Reasoning Basics', text: 'Step-by-step introduction to logic, argumentation, deduction, and principle-fact frameworks.' },
    { id: 'feat-4', title: 'Academic Mentorship', text: 'Regular mentoring sessions to help learners build confidence, clear doubts, and maintain continuous study momentum.' },
  ],
  methodology: SHARED_METHODOLOGY,
  structure: {
    title: 'Programme Structure & Syllabus Modules',
    description: 'A phased curriculum designed to develop foundational skills progressively from baseline literacy to entrance readiness.',
    modules: [
      {
        id: 'm1',
        title: 'Module 1 — Reading & Language Fundamentals',
        topics: [
          'Passage skimming, structural reading, and main-idea identification',
          'Contextual legal vocabulary and common Latin maxims in law',
          'Identifying author tone, inference, and implicit arguments',
          'Daily editorial reading habits and active comprehension exercises',
        ],
      },
      {
        id: 'm2',
        title: 'Module 2 — Reasoning & Analytical Basics',
        topics: [
          'Core logical reasoning principles and syllogistic structures',
          'Premise, assumption, and conclusion identification in arguments',
          'Analytical puzzle solving, sequences, and pattern deduction',
          'Systematic elimination of distractor options in multiple-choice sets',
        ],
      },
      {
        id: 'm3',
        title: 'Module 3 — Introduction to Legal Systems & Concepts',
        topics: [
          'Overview of the Indian legal system and court hierarchy',
          'Foundational constitutional concepts and Fundamental Rights framework',
          'Basic principles of Torts, Contracts, and Criminal Law',
          'Principle-and-fact application mechanics for law entrance scenarios',
        ],
      },
      {
        id: 'm4',
        title: 'Module 4 — Quantitative & Numerical Literacy',
        topics: [
          'Foundational arithmetic, percentages, and profit-loss calculations',
          'Ratios, proportions, and averages applied to practical scenarios',
          'Basic data interpretation: reading tables, bar graphs, and pie charts',
          'Mental arithmetic shortcuts and step-by-step calculation discipline',
        ],
      },
    ],
  },
  practice: {
    title: 'Guided Practice & Exercises',
    text: 'Structured practice exercises and foundational drills designed to build consistency and analytical discipline.',
    items: [
      'Weekly concept-check worksheets and vocabulary drills',
      'Guided passage comprehension exercises with detailed answer rationales',
      'Diagnostic baseline assessments to monitor skill progression',
      'Sectional speed-building drills tailored for early-stage learners',
    ],
  },
  currentAffairs: {
    title: 'Current Awareness Orientation',
    text: 'Introductory current-awareness guidance helping students build news-reading routines and contextual legal understanding.',
    items: [
      'Curated daily editorial reading guidelines and source verification',
      'Monthly foundational awareness digests focused on public governance',
      'Discussion of landmark constitutional developments in accessible language',
      'Periodic current affairs quizzes to build retention and curiosity',
    ],
  },
  studyMaterial: {
    title: 'Study Material & Workbooks',
    text: 'Comprehensive foundational notes, reading lists, and concept workbooks developed exclusively by RRC Law Academy.',
    items: [
      'RRC Foundational Reading & Vocabulary Primer',
      'Critical Reasoning & Logical Foundations Workbook',
      'Introductory Legal Concepts & Principle-Fact Handbook',
      'Numerical Literacy & Data Interpretation Practice Sheets',
    ],
  },
  faculty: [
    {
      id: 'foundation-fac-legal',
      name: 'Legal Reasoning & Foundational Concepts Lead',
      role: 'Foundational Legal Studies Mentor',
      bio: 'Guiding school students and beginners through core legal vocabulary, constitutional basics, and principle-fact problem solving.',
      link: '/about',
    },
    {
      id: 'foundation-fac-reasoning',
      name: 'Analytical Aptitude & Language Lead',
      role: 'Critical Reading & Reasoning Specialist',
      bio: 'Specializing in reading comprehension cultivation, logical argument decomposition, and early analytical skill building.',
      link: '/about',
    },
  ],
  batchInformation: {
    programme: 'Foundation Program',
    startDate: 'Admissions Open (Upcoming Academic Cohort)',
    mode: 'Classroom (Thanjavur) & Hybrid Mentorship',
    session: '2026–27 Academic Cycle',
    timings: 'Weekend Batches & After-School Timings Available',
  },
  learningEnvironment: [
    'Small cohort focus for personal academic attention and interactive discussion',
    'Structured academic mentorship with continuous progress tracking',
    'Dedicated legal reference library and quiet reading room access in Thanjavur',
    'Regular parent-faculty progress consultations and study plan alignment',
  ],
  studentJourney: SHARED_JOURNEY,
  faqs: [
    {
      q: 'Who should enrol in the Foundation Program?',
      a: 'The Foundation Program is designed for school students (Class XI and XII), degree candidates, and beginners who want to build a solid academic base in critical reading, analytical logic, and legal concepts before taking intensive entrance courses.',
    },
    {
      q: 'Does this programme cover entrance exam syllabi directly?',
      a: 'Yes, it systematically covers the core competencies—reading comprehension, logical analysis, introductory legal reasoning, and quantitative basics—that form the bedrock of CLAT, AILET, and other competitive law entrance exams.',
    },
    {
      q: 'What is the schedule, duration, and delivery mode?',
      a: 'The programme is delivered through classroom sessions at our Thanjavur centre as well as hybrid options. Sessions are scheduled primarily on weekends and after-school hours to avoid interfering with school or college academics.',
    },
    {
      q: 'Can students transition into intensive entrance coaching later?',
      a: 'Yes. Foundation students transition smoothly into full entrance examination cohorts (such as CLAT UG or AILET UG) with a strong conceptual advantage over direct entrants.',
    },
  ],
  cta: {
    title: 'Build a Strong Foundation for Your Legal Career',
    text: 'Connect with an academic counsellor to learn more about the Foundation Program schedule, curriculum, and admissions.',
    primaryCta: { label: 'Enquire for Foundation', link: '/registration?course=foundation' },
    secondaryCta: { label: 'Talk to an Academic Counsellor', link: '/contact' },
  },
  seoTitle: 'Foundation Program | RRC Law Academy',
  metaDescription: 'Build strong fundamentals, reading discipline, and core analytical competencies from an early academic stage for law entrance preparation.',
  canonical: null,
  primaryKeyword: 'Foundation law entrance preparation',
};

export const intensiveRevision = {
  id: 'intensive-revision',
  slug: 'intensive-revision',
  title: 'Intensive Revision',
  shortTitle: 'Intensive Revision',
  eyebrow: 'High-Yield Preparation • Rapid Consolidation',
  description: 'Focused revision, timed speed drills, and high-yield examination strategy designed for upcoming law entrance dates.',
  heroImage: intensiveRevisionHeroImage,
  targetAudience: [
    { id: 'upcoming-aspirants', title: 'Immediate Exam Aspirants', text: 'Candidates appearing for upcoming law entrance examinations in the current academic cycle.' },
    { id: 'crash-revisers', title: 'Syllabus Consolidators', text: 'Students who have covered the syllabus once and require structured, high-yield revision to consolidate retention.' },
    { id: 'repeaters', title: 'Repeaters & Retakers', text: 'Candidates seeking targeted revision to improve speed, eliminate unforced errors, and refresh core legal doctrines.' },
    { id: 'final-year', title: 'Final-Year Students', text: 'Degree or board students requiring a compact, time-efficient revision track aligned with exam schedules.' },
  ],
  overview: [
    'The Intensive Revision programme offers focused revision, reinforcement of high-yield concepts, targeted practice, and examination-oriented strategy for candidates approaching law entrance dates.',
    'It prioritises rapid recall, question-selection strategy, time management, and diagnostic error correction. Conducted in classroom format at Thanjavur and hybrid mode, it ensures students peak at the right time.',
  ],
  admissionsNotice: {
    title: 'Intensive Revision Cohorts Open',
    text: 'Admissions are open for upcoming crash and revision batches ahead of CLAT and AILET entrance dates. Fast-track and weekend options are available.',
    points: [
      'High-yield doctrinal reviews and landmark case summaries',
      'Daily timed sectional drills with instant error diagnosis',
      'Classroom sessions in Thanjavur with hybrid mentorship support',
    ],
    cta: { label: 'Join Intensive Revision', link: '/registration?course=intensive-revision' },
  },
  objectives: [
    { id: 'obj-1', title: 'Rapid Syllabus Consolidation', text: 'Revisit high-yield syllabus areas efficiently across all tested entrance examination subjects.' },
    { id: 'obj-2', title: 'Concept Reinforcement', text: 'Clarify complex legal doctrines, critical reasoning patterns, and core numerical methods with precision.' },
    { id: 'obj-3', title: 'Error Minimisation', text: 'Identify recurring mistakes through diagnostics and apply targeted corrections to reduce negative marking.' },
    { id: 'obj-4', title: 'Exam-Pacing Strategy', text: 'Sharpen time allocation, section-switching strategies, and question triage under timed examination conditions.' },
  ],
  features: [
    { id: 'feat-1', title: 'High-Yield Subject Capsules', text: 'Focused revision modules targeting frequently tested concepts, statutory frameworks, and landmark judgments.' },
    { id: 'feat-2', title: 'Speed & Accuracy Drills', text: 'Timed sectional drills designed to rebuild pacing, sharpen reading speed, and reduce unforced errors.' },
    { id: 'feat-3', title: 'Doubt Resolution Sessions', text: 'Dedicated academic discussion to address specific student queries, conceptual bottlenecks, and ambiguous cases.' },
    { id: 'feat-4', title: 'Strategy & Test Triage', text: 'Practical guidance on question selection, negative marking control, and dynamic section allocation.' },
  ],
  methodology: SHARED_METHODOLOGY,
  structure: {
    title: 'Programme Structure & High-Yield Modules',
    description: 'A condensed, high-intensity revision schedule covering key subjects and examination execution strategy.',
    modules: [
      {
        id: 'm1',
        title: 'Module 1 — Legal Reasoning High-Yield Review',
        topics: [
          'Core constitutional principles and fundamental freedoms review',
          'High-frequency doctrines in Law of Torts, Contracts, and IPC/BNS',
          'Recent landmark Supreme Court precedents and judicial interpretations',
          'Rapid principle-fact problem solving and identifying critical exceptions',
        ],
      },
      {
        id: 'm2',
        title: 'Module 2 — Critical Reasoning & Comprehension Brush-Up',
        topics: [
          'Passage navigation, scanning techniques, and structural reading refresh',
          'Deconstructing complex arguments, hidden assumptions, and inferences',
          'Sectional pacing discipline and passage triage under timed pressure',
          'Eliminating subtle distractor options in high-difficulty reading sets',
        ],
      },
      {
        id: 'm3',
        title: 'Module 3 — Current Affairs & Legal GK Consolidation',
        topics: [
          'Annual current affairs roundup covering major national and global events',
          'Landmark statutory enactments, legal bills, and judicial appointments',
          'High-yield static GK cross-links in constitutional polity and history',
          'Fast-track monthly digest revision and rapid-recall checkpoints',
        ],
      },
      {
        id: 'm4',
        title: 'Module 4 — Numerical Techniques & Strategy Drills',
        topics: [
          'High-frequency quantitative patterns: percentages, ratios, and averages',
          'Data interpretation sets under strict time constraints',
          'Dynamic sectional time budgeting and negative marking avoidance',
          'Full-paper execution strategy, section order, and mental endurance',
        ],
      },
    ],
  },
  practice: {
    title: 'Practice & Revision Drills',
    text: 'Timed practice drills and sectional revision papers structured to rebuild examination reflexes and accuracy.',
    items: [
      'High-yield sectional speed drills across all test subjects',
      'Timed problem sets replicating recent examination patterns',
      'Full-syllabus revision test papers with negative marking controls',
      'Comprehensive error-diagnostic reviews after each revision cycle',
    ],
  },
  currentAffairs: {
    title: 'Current Affairs Consolidation',
    text: 'High-yield compilations and fast-track briefings of major legal developments and national general awareness.',
    items: [
      'Annual legal affairs and landmark judgments revision capsule',
      'Key national policies, treaties, and public governance summaries',
      'Monthly current affairs fast-track compendiums',
      'High-frequency awareness quizzes tailored to entrance patterns',
    ],
  },
  studyMaterial: {
    title: 'Revision Study Material',
    text: 'Concise high-yield revision booklets, formula sheets, and precedent digests prepared for rapid revision.',
    items: [
      'High-yield legal doctrine revision summaries and case tables',
      'Critical reasoning quick-reference rules and fallacy guides',
      'Annual Current Affairs & Legal GK master compendium',
      'Exam execution pacing charts and question triage frameworks',
    ],
  },
  faculty: [
    {
      id: 'revision-fac-legal',
      name: 'Entrance Test Strategy & Revision Lead',
      role: 'High-Yield Legal Studies Mentor',
      bio: 'Specializing in fast-track doctrinal consolidation, landmark judicial precedent review, and negative-marking reduction.',
      link: '/about',
    },
    {
      id: 'revision-fac-strategy',
      name: 'Speed & Analytical Aptitude Specialist',
      role: 'Test Pacing & Critical Reasoning Mentor',
      bio: 'Guiding candidates through timed passage navigation, sectional speed calibration, and exam execution strategies.',
      link: '/about',
    },
  ],
  batchInformation: {
    programme: 'Intensive Revision Program',
    startDate: 'Admissions Open (Fast-Track & Crash Cohorts)',
    mode: 'Classroom (Thanjavur) & Hybrid Mentorship',
    session: '2026–27 Academic Cycle',
    timings: 'Daily Fast-Track & Weekend Intensive Sessions',
  },
  learningEnvironment: [
    'Intensive academic pace with high-focus delivery and rigorous preparation culture',
    'Targeted doubt-clearing and error-diagnostic support after every practice session',
    'Exam-oriented cohort environment driving healthy peer motivation and discipline',
    'Quiet study room and reference library access at the Thanjavur academy',
  ],
  studentJourney: SHARED_JOURNEY,
  faqs: [
    {
      q: 'Who should enrol in the Intensive Revision programme?',
      a: 'This programme is intended for students who have already covered the baseline entrance syllabus and want a structured, high-intensity revision track to consolidate concepts, eliminate errors, and build speed before entrance exams.',
    },
    {
      q: 'How does Intensive Revision differ from the Foundation Program?',
      a: 'The Foundation Program builds core concepts from the ground up over a longer horizon, while Intensive Revision focuses on rapid recall, question triage, error elimination, and exam-oriented execution strategies.',
    },
    {
      q: 'What are the batch dates and class timings?',
      a: 'Batches are scheduled with both weekday fast-track and weekend intensive formats. Connect with an academic counsellor to check the immediate upcoming batch schedule.',
    },
    {
      q: 'Are full mock tests included with Intensive Revision?',
      a: 'Yes, the programme includes high-yield revision papers and simulated test sessions with comprehensive diagnostic error reviews.',
    },
  ],
  cta: {
    title: 'Accelerate Your Entrance Exam Revision',
    text: 'Speak with an academic counsellor to check upcoming Intensive Revision batch dates and secure your seat.',
    primaryCta: { label: 'Enquire for Revision', link: '/registration?course=intensive-revision' },
    secondaryCta: { label: 'Talk to an Academic Counsellor', link: '/contact' },
  },
  seoTitle: 'Intensive Revision Program | RRC Law Academy',
  metaDescription: 'Focused revision, timed speed drills, and high-yield examination strategy designed for upcoming entrance exam dates.',
  canonical: null,
  primaryKeyword: 'Intensive law entrance revision',
};

export const mockTest = {
  id: 'mock-test',
  slug: 'mock-test',
  title: 'Mock Test Program',
  shortTitle: 'Mock Test Series',
  eyebrow: 'Exam Simulation • Performance Diagnostics',
  description: 'Exam-grade timed simulations, detailed question-level analytics, and strategic diagnostics to master sectional speed and pacing.',
  heroImage: mockTestHeroImage,
  targetAudience: [
    { id: 'clat-ailet', title: 'CLAT & AILET Aspirants', text: 'Candidates seeking rigorous exam-grade simulation and realistic proctored testing conditions.' },
    { id: 'time-managers', title: 'Speed & Pacing Seekers', text: 'Students needing to master sectional time distribution, reading speed, and question-selection accuracy.' },
    { id: 'self-study', title: 'Self-Study Candidates', text: 'Aspirants preparing independently who require formal benchmarking, percentile tracking, and diagnostic reviews.' },
    { id: 'repeater-benchmarkers', title: 'Retakers & Droppers', text: 'Candidates who want to benchmark readiness across multiple full-length papers and calibrate their test temperament.' },
  ],
  overview: [
    'The Mock Test Program provides structured practice through exam-grade simulated tests, comprehensive question analysis, performance diagnostics, and continuous strategy adjustment.',
    'It trains candidates to manage exam pressure, allocate time across sections effectively, and minimize negative marking under realistic test constraints. Available in classroom format in Thanjavur and proctored online.',
  ],
  admissionsNotice: {
    title: 'Mock Test Series Enrolment Open',
    text: 'Rolling admissions are open for our full-length mock test series covering CLAT and AILET patterns. Both classroom and proctored hybrid formats are available.',
    points: [
      'Full-length exam simulations matching latest official test patterns',
      'Question-by-question analytics and personalized error diagnostics',
      'Proctored exam hall environment at Thanjavur centre & online portal',
    ],
    cta: { label: 'Enrol in Mock Series', link: '/registration?course=mock-test' },
  },
  objectives: [
    { id: 'obj-1', title: 'Exam-Grade Simulation', text: 'Experience realistic entrance test conditions, question diversity, and timed interface environments.' },
    { id: 'obj-2', title: 'Time & Pacing Mastery', text: 'Master section-wise time distribution, reading pace, and pressure management under strict 120-minute constraints.' },
    { id: 'obj-3', title: 'Diagnostic Feedback', text: 'Receive question-by-question analysis, identifying strengths, weak topics, and persistent error patterns.' },
    { id: 'obj-4', title: 'Iterative Improvement', text: 'Refine test-taking strategy after every mock using the Understand-Practise-Test-Analyse-Improve loop.' },
  ],
  features: [
    { id: 'feat-1', title: 'Curated Full-Length Mocks', text: 'Full-length test papers structured according to the latest entrance exam patterns, passage lengths, and negative marking.' },
    { id: 'feat-2', title: 'Sectional & Speed Drills', text: 'Targeted sectional tests to isolate and improve specific subject performance and sectional execution speed.' },
    { id: 'feat-3', title: 'Detailed Solution Sets', text: 'Comprehensive answer keys and explanatory analyses detailing the legal and logical rationale for every question.' },
    { id: 'feat-4', title: 'Performance Analytics', text: 'Objective metrics on accuracy rates, negative marks, time per question, topic mastery, and comparative percentiles.' },
  ],
  methodology: SHARED_METHODOLOGY,
  structure: {
    title: 'Programme Structure & Testing Stages',
    description: 'A progressive testing calendar starting from sectional diagnostics and culminating in full-length simulations.',
    modules: [
      {
        id: 'm1',
        title: 'Stage 1 — Diagnostic & Sectional Benchmarking',
        topics: [
          'Subject-wise baseline diagnostic tests across all exam sections',
          'Evaluation of baseline reading speed vs question comprehension',
          'Identification of individual error profiles and negative marking tendencies',
          'Initial study plan calibration based on objective baseline metrics',
        ],
      },
      {
        id: 'm2',
        title: 'Stage 2 — Progressive Multi-Section Mocks',
        topics: [
          'Combined multi-section timed drills (Legal + Logic, English + GK)',
          'Pacing and endurance conditioning over extended testing intervals',
          'Negative marking control and question selection discipline',
          'Section-switching strategy and mental energy management',
        ],
      },
      {
        id: 'm3',
        title: 'Stage 3 — Full-Length Exam Simulations',
        topics: [
          'Proctored full-syllabus papers strictly adhering to official test duration',
          'Realistic entrance test conditions, answer-sheet discipline, and timing',
          'Comprehensive scorecards with topic-wise and question-type breakdowns',
          'Post-test mentor review discussing optimal question selection triage',
        ],
      },
      {
        id: 'm4',
        title: 'Stage 4 — Final Readiness Simulations',
        topics: [
          'Pre-exam final simulation papers replicating the exact examination pattern',
          'Last-mile strategy fine-tuning, section order locking, and pacing confidence',
          'Exam-day mindset, time budgeting, and stress management guidance',
          'Final performance debrief and confidence-building consultation',
        ],
      },
    ],
  },
  practice: {
    title: 'Simulation & Practice Framework',
    text: 'A structured battery of sectional and full-length simulated examinations reflecting modern entrance patterns.',
    items: [
      'Full-length entrance mock tests with calibrated difficulty levels',
      'Timed sectional speed tests to sharpen individual subject performance',
      'Passage-based reading and legal reasoning problem batteries',
      'Previous-pattern trend simulations and negative marking control drills',
    ],
  },
  currentAffairs: {
    title: 'Current Affairs in Mock Tests',
    text: 'Current affairs and legal awareness questions integrated directly into mock papers to reflect contemporary trends.',
    items: [
      'Passage-based current affairs sets mirroring actual examination formats',
      'Monthly update assessment modules embedded directly into full-length mocks',
      'Doctrinal legal awareness questions based on recent judgments',
      'Static GK cross-verification questions testing retention and recall',
    ],
  },
  studyMaterial: {
    title: 'Test Material & Solution Explanations',
    text: 'Explanatory solution keys, analytical test review booklets, and question-level breakdown sheets for every test.',
    items: [
      'Detailed answer keys with step-by-step rationales and case references',
      'Personalized diagnostic scorecards highlighting strong and weak topics',
      'Question difficulty and time-spent analytics to evaluate question triage',
      'High-yield error review notebooks and distractor analysis guides',
    ],
  },
  faculty: [
    {
      id: 'mock-fac-analytics',
      name: 'Diagnostic Evaluation & Test Analyst Lead',
      role: 'Test Performance & Analytics Mentor',
      bio: 'Specializing in question-level error analysis, percentile benchmarking, and sectional score optimization.',
      link: '/about',
    },
    {
      id: 'mock-fac-strategy',
      name: 'Exam Execution & Strategy Mentor',
      role: 'Pacing & Test Temperament Specialist',
      bio: 'Focusing on 120-minute time budgeting, negative-marking discipline, question selection triage, and exam mindset.',
      link: '/about',
    },
  ],
  batchInformation: {
    programme: 'Mock Test Program',
    startDate: 'Rolling Enrolment (Immediate Test Series Access)',
    mode: 'Classroom (Thanjavur Centre) & Proctored Online',
    session: '2026–27 Academic Cycle',
    timings: 'Scheduled Weekend Mocks & Flexible Online Testing Windows',
  },
  learningEnvironment: [
    'Proctored classroom test simulations in Thanjavur replicating official exam environments',
    'Question-level diagnostic feedback mechanism pinpointing persistent errors',
    'Post-test doubt clarification and strategic discussion with experienced faculty',
    'Quiet testing hall and legal reference library access for thorough post-test review',
  ],
  studentJourney: SHARED_JOURNEY,
  faqs: [
    {
      q: 'How many mock tests are included in this programme?',
      a: 'The programme includes a comprehensive battery of full-length simulated examinations alongside targeted sectional tests. Enquire with our academic team for the exact schedule and test counts for the current cycle.',
    },
    {
      q: 'Are detailed solutions provided for every question?',
      a: 'Yes, every test is accompanied by comprehensive explanatory keys, detailed reasoning rationales, and diagnostic analytics to help students understand their errors.',
    },
    {
      q: 'Can students enrolled in other courses join the Mock Test Program?',
      a: 'Yes, the Mock Test Program is open to independent self-study students, school candidates, and students from other coaching tracks who want rigorous benchmarking.',
    },
    {
      q: 'Can I take the mock tests offline in Thanjavur?',
      a: 'Yes, RRC Law Academy conducts proctored offline mock tests at our Thanjavur academy to replicate actual test center conditions, alongside hybrid online access.',
    },
  ],
  cta: {
    title: 'Master Entrance Test Execution Under Timed Conditions',
    text: 'Speak to an academic counsellor to view the mock test calendar, test features, and enrolment options.',
    primaryCta: { label: 'Enrol in Mock Series', link: '/registration?course=mock-test' },
    secondaryCta: { label: 'Talk to an Academic Counsellor', link: '/contact' },
  },
  seoTitle: 'Mock Test Program | RRC Law Academy',
  metaDescription: 'Timed practice, exam simulations, and rigorous performance diagnostics to master sectional speed and pacing.',
  canonical: null,
  primaryKeyword: 'CLAT AILET mock test program',
};

export const currentAffairs = {
  id: 'current-affairs',
  slug: 'current-affairs',
  title: 'Current Affairs & GK',
  shortTitle: 'Current Affairs & GK',
  eyebrow: 'General Knowledge • Legal Awareness',
  description: 'Regular awareness, constitutional updates, and comprehensive knowledge development tailored to legal entrance examinations.',
  heroImage: currentAffairsHeroImage,
  targetAudience: [
    { id: 'all-aspirants', title: 'All Law Entrance Aspirants', text: 'Candidates preparing for CLAT, AILET, and other entrance tests where general and legal awareness is evaluated.' },
    { id: 'systematic-learners', title: 'Structured Knowledge Seekers', text: 'Students overwhelmed by uncurated daily news who need a disciplined, exam-focused briefing format.' },
    { id: 'retention-focused', title: 'Revision & Retention Focus', text: 'Learners needing periodic quizzes, monthly compendiums, and systematic revision to retain facts.' },
    { id: 'legal-awareness', title: 'Legal Awareness Beginners', text: 'Aspirants who require clarity on constitutional developments, statutory changes, and landmark judgments.' },
  ],
  overview: [
    'The Current Affairs & GK programme delivers structured current-affairs learning, general knowledge development, legal awareness, and regular revision tailored to law entrance examinations.',
    'It cuts through generic news noise by focusing on high-relevance themes, constitutional developments, international events, and contemporary jurisprudence. Available in classroom format in Thanjavur and hybrid digital access.',
  ],
  admissionsNotice: {
    title: 'Current Affairs & GK Enrolment Open',
    text: 'Admissions are open for our continuous current affairs learning and monthly compendium series for the 2026–27 session.',
    points: [
      'Curated monthly legal GK compendiums and landmark judgment digests',
      'Weekly interactive briefing sessions and retention quizzes',
      'Classroom sessions in Thanjavur & digital compendium access',
    ],
    cta: { label: 'Join Current Affairs', link: '/registration?course=current-affairs' },
  },
  objectives: [
    { id: 'obj-1', title: 'Curated Exam-Oriented Coverage', text: 'Filter national, international, and legal developments into high-yield, exam-relevant briefings.' },
    { id: 'obj-2', title: 'Legal & Constitutional Awareness', text: 'Track landmark judgments, statutory amendments, and institutional developments systematically.' },
    { id: 'obj-3', title: 'Static GK Integration', text: 'Connect current events to underlying static GK concepts in history, polity, geography, and economics.' },
    { id: 'obj-4', title: 'Regular Revision & Quizzing', text: 'Reinforce memory through weekly quizzes, monthly compendiums, and periodic recall assessments.' },
  ],
  features: [
    { id: 'feat-1', title: 'Curated Awareness Briefings', text: 'Structured coverage of major events, legal issues, public policy developments, and global treaties.' },
    { id: 'feat-2', title: 'Legal & Doctrinal Roundups', text: 'Specialized focus on Supreme Court judgments, legislative enactments, and constitutional developments.' },
    { id: 'feat-3', title: 'Periodic GK Assessments', text: 'Weekly and monthly quizzes to evaluate comprehension, retention, and recall under timed limits.' },
    { id: 'feat-4', title: 'Passage-Based Practice Sets', text: 'Practice questions styled after the latest passage-based law entrance testing patterns.' },
  ],
  methodology: SHARED_METHODOLOGY,
  structure: {
    title: 'Programme Structure & Thematic Modules',
    description: 'A cyclical, continuous learning structure organized by core themes, landmark cases, and regular revision milestones.',
    modules: [
      {
        id: 'm1',
        title: 'Theme 1 — Legal & Constitutional Developments',
        topics: [
          'Supreme Court and High Court landmark judgments and rulings',
          'Constitutional amendments, key legislative bills, and enactments',
          'Major regulatory updates, institutional commissions, and legal reforms',
          'Legal maxims, doctrines, and contemporary jurisprudential debates',
        ],
      },
      {
        id: 'm2',
        title: 'Theme 2 — National Affairs & Public Policy',
        topics: [
          'Major national policies, welfare initiatives, and public governance schemes',
          'Constitutional and statutory bodies: roles, powers, and recent updates',
          'Economic indicators, Union Budget highlights, and national socio-economic indices',
          'Key national milestones, committee reports, and public debates',
        ],
      },
      {
        id: 'm3',
        title: 'Theme 3 — International Relations & Global Affairs',
        topics: [
          'Bilateral treaties, multilateral summits, and diplomatic pacts',
          'International organisations (UN, ICJ, ICC, WTO) and global governance',
          'Major geopolitical developments, international disputes, and treaties',
          'Global environmental protocols, conventions, and international indices',
        ],
      },
      {
        id: 'm4',
        title: 'Theme 4 — Science, Environment & Static GK Links',
        topics: [
          'Environmental law conventions, biodiversity pacts, and climate conferences',
          'Science and technology milestones with public policy significance',
          'Integration with static polity (Preamble, Fundamental Rights, Judiciary)',
          'Passage-based reading sets connecting current news with static GK origins',
        ],
      },
    ],
  },
  practice: {
    title: 'Quizzes & Practice Drills',
    text: 'Regular diagnostic quizzes, passage-based practice sets, and retention checkpoints to build long-term memory.',
    items: [
      'Weekly current affairs quizzes testing factual recall and context',
      'Monthly comprehensive awareness tests with comparative benchmarking',
      'Passage-based entrance style question sets matching CLAT/AILET patterns',
      'Rapid-recall factual check drills covering dates, awards, and appointments',
    ],
  },
  currentAffairs: {
    title: 'Core Awareness Compendiums',
    text: 'Curated monthly and fortnightly current-affairs digests designed specifically for legal entrance candidates.',
    items: [
      'Monthly awareness compendiums covering national and global affairs',
      'Landmark legal updates and Supreme Court case briefs',
      'Key dates, public appointments, and statutory changes roundups',
      'Exam-eve high-yield revision flash summaries',
    ],
  },
  studyMaterial: {
    title: 'Study Material & Monthly Compendiums',
    text: 'Structured monthly compendiums, topic summaries, and revision flash-sheets compiled by RRC faculty.',
    items: [
      'Curated Monthly Legal & General Awareness Compendium',
      'Landmark Judgments & Statutory Amendments Digest',
      'Static GK & Indian Polity Quick-Reference Handbook',
      'Passage-Based Current Affairs Practice Question Bank',
    ],
  },
  faculty: [
    {
      id: 'ca-fac-legal',
      name: 'Legal Current Affairs & Statutory Lead',
      role: 'Judicial Precedents & Legal News Mentor',
      bio: 'Curating contemporary judicial precedents, statutory enactments, and constitutional developments for entrance syllabi.',
      link: '/about',
    },
    {
      id: 'ca-fac-gk',
      name: 'General Knowledge & Static Polity Mentor',
      role: 'National & Global Affairs Specialist',
      bio: 'Specializing in connecting current news to static polity, international relations, and memory retention techniques.',
      link: '/about',
    },
  ],
  batchInformation: {
    programme: 'Current Affairs & GK Program',
    startDate: 'Rolling Enrolment (Ongoing Monthly Cycles)',
    mode: 'Classroom (Thanjavur) & Hybrid Digital Access',
    session: '2026–27 Academic Cycle',
    timings: 'Weekly Digest Sessions & Periodic Online Quizzes',
  },
  learningEnvironment: [
    'Regular interactive discussion and briefing sessions dissecting major legal news',
    'Structured questioning and retention testing with immediate mentor feedback',
    'Curated daily reading guidance filtering recommended editorials and sources',
    'Quiet reading room and reference material access at the Thanjavur academy',
  ],
  studentJourney: SHARED_JOURNEY,
  faqs: [
    {
      q: 'Does this programme cover both static GK and current affairs?',
      a: 'Yes, the curriculum systematically connects contemporary current events with their underlying static GK foundations in Indian polity, modern history, and international institutions.',
    },
    {
      q: 'Is the material tailored specifically for law entrance examinations?',
      a: 'Yes, our material cuts out irrelevant news and emphasizes legal awareness, constitutional themes, landmark judgments, and passage-based comprehension required for CLAT, AILET, and related law exams.',
    },
    {
      q: 'How frequently are classes conducted and materials released?',
      a: 'Sessions are held weekly with ongoing daily reading recommendations, and comprehensive compendiums are published on a monthly cycle.',
    },
    {
      q: 'Can students access this programme online as well as in person?',
      a: 'Yes, the programme is conducted at our Thanjavur academy and also supported via digital access for hybrid learners.',
    },
  ],
  cta: {
    title: 'Build Systematic Current Affairs & GK Mastery',
    text: 'Speak with an academic counsellor to learn more about the Current Affairs & GK curriculum, schedules, and enrolment.',
    primaryCta: { label: 'Enquire for Current Affairs', link: '/registration?course=current-affairs' },
    secondaryCta: { label: 'Talk to an Academic Counsellor', link: '/contact' },
  },
  seoTitle: 'Current Affairs & GK Program | RRC Law Academy',
  metaDescription: 'Regular awareness, constitutional developments, and comprehensive knowledge development tailored to legal examinations.',
  canonical: null,
  primaryKeyword: 'Current affairs for CLAT and law entrance',
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
