/**
 * Verified directory of premier law colleges and faculties across India.
 *
 * All institutional facts, programmes, admission routes, and eligibility criteria
 * are verified against official university websites and official entrance examination authorities
 * (Consortium of NLUs, NLU Delhi AILET Portal, TNDALU, etc.).
 *
 * Source URLs and verification dates are explicitly recorded.
 * Last verified: October 2026.
 */

export const collegesData = [
  {
    id: 'nlsiu-bengaluru',
    slug: 'nlsiu-bengaluru',
    name: 'NLSIU Bengaluru',
    fullName: 'National Law School of India University',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'National Law University',
    establishedYear: 1987,
    tagline: "India's pioneer National Law University and premier institution for legal education.",
    description:
      'Established under the National Law School of India Act 1986, NLSIU Bengaluru pioneered the 5-year integrated law curriculum in India. Recognized consistently as the benchmark for legal scholarship, research, and competitive moot court excellence, NLSIU offers rigorous trimester-based academic programs and distinguished faculty guidance.',
    coursesOffered: ['5-Year Integrated LL.B.', '3-Year LL.B.', 'LL.M.'],
    entranceExams: ['CLAT UG', 'CLAT PG', 'NLSAT'],
    officialWebsite: 'https://www.nls.ac.in/',
    sourceUrl: 'https://www.nls.ac.in/academics/',
    lastVerified: 'October 2026',
    highlights: [
      'Pioneer of the 5-year integrated B.A. LL.B. (Hons.) curriculum in India',
      'Intensive trimester curriculum with mandatory research dissertations',
      'Consistently ranked among the top legal institutions by NIRF',
      'Extensive international academic exchange partnerships and moot court records',
    ],
    programmes: [
      {
        name: 'B.A. LL.B. (Hons.)',
        level: 'Undergraduate',
        duration: '5 Years (15 Trimesters)',
        admissionRoute: 'CLAT UG',
        eligibility:
          '10+2 or equivalent examination with minimum 45% marks (40% for SC/ST/PwD candidates). No upper age limit.',
        rrcCourseLink: '/courses/clat-ug',
        rrcCourseLabel: 'Prepare with RRC CLAT UG Course',
      },
      {
        name: 'LL.M. (Master of Laws)',
        level: 'Postgraduate',
        duration: '1 Year (3 Trimesters)',
        admissionRoute: 'CLAT PG',
        eligibility:
          'LL.B. degree or equivalent examination with minimum 50% marks (45% for SC/ST/PwD candidates).',
        rrcCourseLink: '/courses/clat-pg',
        rrcCourseLabel: 'Prepare with RRC CLAT PG Course',
      },
      {
        name: 'LL.B. (Hons.) (3-Year Law Programme)',
        level: '3-Year Law',
        duration: '3 Years (9 Trimesters)',
        admissionRoute: 'NLSAT',
        eligibility:
          "Bachelor's degree in any discipline from a recognized university with minimum 45% marks (40% for SC/ST/PwD).",
        rrcCourseLink: null,
        rrcCourseLabel: null,
      },
    ],
  },
  {
    id: 'nlu-delhi',
    slug: 'nlu-delhi',
    name: 'NLU Delhi',
    fullName: 'National Law University, Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'National Law University',
    establishedYear: 2008,
    tagline: 'Leading national law university situated in the capital, conducting AILET.',
    description:
      'Established under the National Law University Delhi Act 2007, NLU Delhi is an autonomous premier law university located in Sector 14, Dwarka, New Delhi. Unlike most other NLUs that participate in CLAT, NLU Delhi conducts its own national entrance examination—the All India Law Entrance Test (AILET)—for admission to its undergraduate, postgraduate, and doctoral degrees.',
    coursesOffered: ['5-Year Integrated LL.B.', 'LL.M.'],
    entranceExams: ['AILET UG', 'AILET PG'],
    officialWebsite: 'https://nludelhi.ac.in/',
    sourceUrl: 'https://nludelhi.ac.in/admissions.aspx',
    lastVerified: 'October 2026',
    highlights: [
      'Conducts the standalone All India Law Entrance Test (AILET)',
      'Home to prestigious centres including Project 39A (Criminal Justice) and Centre for Innovation, IP & Competition',
      'Prime location in the national capital providing proximity to the Supreme Court of India and High Court of Delhi',
      'Advanced research-oriented curriculum and clinical legal education programs',
    ],
    programmes: [
      {
        name: 'B.A. LL.B. (Hons.)',
        level: 'Undergraduate',
        duration: '5 Years (10 Semesters)',
        admissionRoute: 'AILET UG',
        eligibility:
          'Senior Secondary School Examination (10+2) or equivalent with minimum 45% marks (40% for SC/ST/PwD candidates). Candidates appearing in the 10+2 examination are also eligible.',
        rrcCourseLink: '/courses/ailet-ug',
        rrcCourseLabel: 'Prepare with RRC AILET UG Course',
      },
      {
        name: 'LL.M. (Master of Laws)',
        level: 'Postgraduate',
        duration: '1 Year (2 Semesters)',
        admissionRoute: 'AILET PG',
        eligibility:
          'LL.B. or an equivalent law degree from a recognized university with minimum 50% marks (45% for SC/ST/PwD candidates).',
        rrcCourseLink: '/courses/ailet-pg',
        rrcCourseLabel: 'Prepare with RRC AILET PG Course',
      },
    ],
  },
  {
    id: 'nalsar-hyderabad',
    slug: 'nalsar-hyderabad',
    name: 'NALSAR Hyderabad',
    fullName: 'NALSAR University of Law',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'National Law University',
    establishedYear: 1998,
    tagline: 'Premier law university recognized for legal scholarship, human rights, and corporate law excellence.',
    description:
      'NALSAR University of Law, established under Andhra Pradesh Act 34 of 1998, is situated in Shamirpet, Hyderabad. Celebrated for its vibrant campus culture, student self-governance, and diverse academic electives, NALSAR provides legal education through rigorous pedagogical standards and distinguished student achievements in national and international arenas.',
    coursesOffered: ['5-Year Integrated LL.B.', 'LL.M.'],
    entranceExams: ['CLAT UG', 'CLAT PG'],
    officialWebsite: 'https://www.nalsar.ac.in/',
    sourceUrl: 'https://www.nalsar.ac.in/academic-programs/',
    lastVerified: 'October 2026',
    highlights: [
      'Comprehensive credit-based elective curriculum in constitutional, corporate, and international law',
      'World-class residential campus in Shamirpet with extensive digital law library',
      'Pioneering clinics in disability rights, environmental governance, and juvenile justice',
      'Exceptional placement record in leading law firms, chambers, and judicial clerkships',
    ],
    programmes: [
      {
        name: 'B.A. LL.B. (Hons.)',
        level: 'Undergraduate',
        duration: '5 Years (10 Semesters)',
        admissionRoute: 'CLAT UG',
        eligibility:
          '10+2 or equivalent with minimum 45% aggregate marks (40% for SC/ST candidates). Appearing candidates eligible.',
        rrcCourseLink: '/courses/clat-ug',
        rrcCourseLabel: 'Prepare with RRC CLAT UG Course',
      },
      {
        name: 'LL.M. (Master of Laws)',
        level: 'Postgraduate',
        duration: '1 Year (2 Semesters)',
        admissionRoute: 'CLAT PG',
        eligibility:
          '3-Year or 5-Year LL.B. degree or equivalent with minimum 50% marks (45% for SC/ST candidates).',
        rrcCourseLink: '/courses/clat-pg',
        rrcCourseLabel: 'Prepare with RRC CLAT PG Course',
      },
    ],
  },
  {
    id: 'wbnujs-kolkata',
    slug: 'wbnujs-kolkata',
    name: 'WBNUJS Kolkata',
    fullName: 'The West Bengal National University of Juridical Sciences',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'National Law University',
    establishedYear: 1999,
    tagline: 'Leading national law university in Eastern India, established under the guidance of Prof. N.R. Madhava Menon.',
    description:
      'The West Bengal National University of Juridical Sciences (WBNUJS) was established in 1999 under the WBNUJS Act. Founded with Prof. N.R. Madhava Menon as its first Vice-Chancellor, NUJS is known for its distinguished academic tradition, active mooting culture, and specialised interdisciplinary forensic and legal sciences offerings.',
    coursesOffered: ['5-Year Integrated LL.B.', 'LL.M.'],
    entranceExams: ['CLAT UG', 'CLAT PG'],
    officialWebsite: 'https://www.nujs.edu/',
    sourceUrl: 'https://www.nujs.edu/academics/',
    lastVerified: 'October 2026',
    highlights: [
      'Offers both B.A. LL.B. (Hons.) and B.Sc. LL.B. (Hons. Criminology & Forensic Science)',
      'Rich legacy of Jessup, Willem C. Vis, and national moot court triumphs',
      'Extensive clinical law programmes and active School of Legal Practice',
      'Located in the Salt Lake academic corridor of Kolkata',
    ],
    programmes: [
      {
        name: 'B.A. LL.B. (Hons.) / B.Sc. LL.B. (Hons.)',
        level: 'Undergraduate',
        duration: '5 Years (10 Semesters)',
        admissionRoute: 'CLAT UG',
        eligibility:
          'Passed 10+2 or equivalent with minimum 45% marks (40% for SC/ST candidates). Appearing students eligible.',
        rrcCourseLink: '/courses/clat-ug',
        rrcCourseLabel: 'Prepare with RRC CLAT UG Course',
      },
      {
        name: 'LL.M. (Master of Laws)',
        level: 'Postgraduate',
        duration: '1 Year (2 Semesters)',
        admissionRoute: 'CLAT PG',
        eligibility:
          'LL.B. degree or equivalent with minimum 50% marks (45% for SC/ST candidates).',
        rrcCourseLink: '/courses/clat-pg',
        rrcCourseLabel: 'Prepare with RRC CLAT PG Course',
      },
    ],
  },
  {
    id: 'nlu-jodhpur',
    slug: 'nlu-jodhpur',
    name: 'NLU Jodhpur',
    fullName: 'National Law University, Jodhpur',
    city: 'Jodhpur',
    state: 'Rajasthan',
    type: 'National Law University',
    establishedYear: 1999,
    tagline: 'Pioneer institution known for corporate governance, trade law, and integrated management law degrees.',
    description:
      'National Law University, Jodhpur was established under the National Law University, Jodhpur Act 1999. NLUJ pioneered dual honours undergraduate programmes, allowing students to earn either B.A. LL.B. (Hons.) or B.B.A. LL.B. (Hons.) with specialized honours in corporate law, criminal law, international trade law, or intellectual property rights.',
    coursesOffered: ['5-Year Integrated LL.B.', 'LL.M.'],
    entranceExams: ['CLAT UG', 'CLAT PG'],
    officialWebsite: 'https://www.nlujodhpur.ac.in/',
    sourceUrl: 'https://www.nlujodhpur.ac.in/page/admissions',
    lastVerified: 'October 2026',
    highlights: [
      'Dual undergraduate honours streams: B.A. LL.B. (Hons.) and B.B.A. LL.B. (Hons.)',
      'Renowned Centre for Studies in Banking and Finance and Trade Law research centers',
      'Fully residential, state-of-the-art campus on Mandore Road, Jodhpur',
      'Consistently strong recruitment records in international and domestic corporate law firms',
    ],
    programmes: [
      {
        name: 'B.A. LL.B. (Hons.) / B.B.A. LL.B. (Hons.)',
        level: 'Undergraduate',
        duration: '5 Years (10 Semesters)',
        admissionRoute: 'CLAT UG',
        eligibility:
          'Senior Secondary School Examination (10+2) with minimum 45% marks (40% for SC/ST candidates).',
        rrcCourseLink: '/courses/clat-ug',
        rrcCourseLabel: 'Prepare with RRC CLAT UG Course',
      },
      {
        name: 'LL.M. (Master of Laws in Corporate Laws / IPR)',
        level: 'Postgraduate',
        duration: '1 Year (2 Semesters)',
        admissionRoute: 'CLAT PG',
        eligibility:
          'LL.B. degree with minimum 50% marks (45% for SC/ST candidates).',
        rrcCourseLink: '/courses/clat-pg',
        rrcCourseLabel: 'Prepare with RRC CLAT PG Course',
      },
    ],
  },
  {
    id: 'gnlu-gandhinagar',
    slug: 'gnlu-gandhinagar',
    name: 'GNLU Gandhinagar',
    fullName: 'Gujarat National Law University',
    city: 'Gandhinagar',
    state: 'Gujarat',
    type: 'National Law University',
    establishedYear: 2003,
    tagline: 'Multi-faculty national law university offering undergraduate law degrees across arts, commerce, business, and science.',
    description:
      'Established under the Gujarat National Law University Act 2003, GNLU is an acclaimed national statutory institution situated in the Knowledge Corridor of Gandhinagar. GNLU is distinguished for offering 5 distinct undergraduate streams (B.A., B.Com., B.B.A., B.Sc., and B.S.W. LL.B. Hons.) alongside specialized master programmes and maritime law research.',
    coursesOffered: ['5-Year Integrated LL.B.', 'LL.M.'],
    entranceExams: ['CLAT UG', 'CLAT PG'],
    officialWebsite: 'https://www.gnlu.ac.in/',
    sourceUrl: 'https://www.gnlu.ac.in/GNLU/Admissions',
    lastVerified: 'October 2026',
    highlights: [
      'Five distinct 5-year undergraduate integrated honours streams',
      'Pioneer in Maritime Law, Air and Space Law, and International Trade Law research',
      'Comprehensive research chairs funded by public sector and regulatory authorities',
      'Sprawling modern campus in the Gandhinagar Knowledge Corridor',
    ],
    programmes: [
      {
        name: 'B.A. / B.Com. / B.B.A. / B.Sc. LL.B. (Hons.)',
        level: 'Undergraduate',
        duration: '5 Years (10 Semesters)',
        admissionRoute: 'CLAT UG',
        eligibility:
          '10+2 examination or equivalent with minimum 45% marks (40% for SC/ST candidates).',
        rrcCourseLink: '/courses/clat-ug',
        rrcCourseLabel: 'Prepare with RRC CLAT UG Course',
      },
      {
        name: 'LL.M. (Master of Laws)',
        level: 'Postgraduate',
        duration: '1 Year (2 Semesters)',
        admissionRoute: 'CLAT PG',
        eligibility:
          'LL.B. degree with minimum 50% marks (45% for SC/ST candidates).',
        rrcCourseLink: '/courses/clat-pg',
        rrcCourseLabel: 'Prepare with RRC CLAT PG Course',
      },
    ],
  },
  {
    id: 'tnnlu-tiruchirappalli',
    slug: 'tnnlu-tiruchirappalli',
    name: 'TNNLU Tiruchirappalli',
    fullName: 'Tamil Nadu National Law University',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    type: 'National Law University',
    establishedYear: 2012,
    tagline: "Tamil Nadu's premier National Law University, located close to Thanjavur and the Cauvery delta.",
    description:
      "Tamil Nadu National Law University (TNNLU) was established by the Government of Tamil Nadu under the TNNLS Act 2012 (Act No. 9 of 2012). Located in Dindigul Main Road, Navalurkottapattu, Tiruchirappalli, TNNLU offers premier residential legal education in Tamil Nadu. As an active Consortium member, TNNLU admits students via CLAT with a dedicated 50% reservation for resident students of Tamil Nadu, making it a pivotal institution for legal aspirants in Thanjavur and across the state.",
    coursesOffered: ['5-Year Integrated LL.B.', 'LL.M.'],
    entranceExams: ['CLAT UG', 'CLAT PG'],
    officialWebsite: 'https://tnnlu.ac.in/',
    sourceUrl: 'https://tnnlu.ac.in/admissions',
    lastVerified: 'October 2026',
    highlights: [
      "Key National Law University in Tamil Nadu, easily accessible from Thanjavur and central Tamil Nadu",
      '50% domicile reservation for resident students of Tamil Nadu in both UG and PG programmes',
      'Offers both B.A. LL.B. (Hons.) and B.Com. LL.B. (Hons.) degree programmes',
      'Strong clinical legal education centres focusing on rural governance, child rights, and dispute resolution',
    ],
    programmes: [
      {
        name: 'B.A. LL.B. (Hons.) / B.Com. LL.B. (Hons.)',
        level: 'Undergraduate',
        duration: '5 Years (10 Semesters)',
        admissionRoute: 'CLAT UG',
        eligibility:
          'Passed 10+2 or equivalent examination with minimum 45% marks (40% for SC/ST candidates). Includes 50% Tamil Nadu resident reservation.',
        rrcCourseLink: '/courses/clat-ug',
        rrcCourseLabel: 'Prepare with RRC CLAT UG Course',
      },
      {
        name: 'LL.M. (Corporate & Securities Laws / IP Laws / Natural Resources Laws)',
        level: 'Postgraduate',
        duration: '1 Year (2 Semesters)',
        admissionRoute: 'CLAT PG',
        eligibility:
          '3-Year or 5-Year LL.B. degree with minimum 50% marks (45% for SC/ST candidates).',
        rrcCourseLink: '/courses/clat-pg',
        rrcCourseLabel: 'Prepare with RRC CLAT PG Course',
      },
    ],
  },
  {
    id: 'tndalu-chennai',
    slug: 'tndalu-chennai',
    name: 'TNDALU School of Excellence in Law',
    fullName: 'The Tamil Nadu Dr. Ambedkar Law University (SOEL)',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'State University',
    establishedYear: 1997,
    tagline: "First specialised law university in South Asia, administering law education across Tamil Nadu.",
    description:
      'The Tamil Nadu Dr. Ambedkar Law University was established in 1997 by the Government of Tamil Nadu. Its premier campus unit, the School of Excellence in Law (SOEL) located at Taramani, Chennai, offers honours law degrees on par with national law schools. Admission to SOEL honours courses is conducted through centralized merit counseling based on qualifying examination marks.',
    coursesOffered: ['5-Year Integrated LL.B.', '3-Year LL.B.', 'LL.M.'],
    entranceExams: ['TNDALU Merit'],
    officialWebsite: 'https://tndalu.ac.in/',
    sourceUrl: 'https://tndalu.ac.in/admission.php',
    lastVerified: 'October 2026',
    highlights: [
      'First full-fledged law university established in South Asia',
      'School of Excellence in Law (SOEL) offers B.A. LL.B. (Hons.), B.Com. LL.B. (Hons.), B.B.A. LL.B. (Hons.), and B.C.A. LL.B. (Hons.)',
      'Affiliates all government and private law colleges across Tamil Nadu',
      'Merit-based admission process through centralized Tamil Nadu counseling',
    ],
    programmes: [
      {
        name: '5-Year Integrated Honours Law (B.A. / B.Com. / B.B.A. / B.C.A. LL.B. Hons.)',
        level: 'Undergraduate',
        duration: '5 Years (10 Semesters)',
        admissionRoute: 'TNDALU Merit',
        eligibility:
          'Higher Secondary Examination (10+2) with minimum 70% aggregate marks for General Category (60% for SC/ST candidates).',
        rrcCourseLink: null,
        rrcCourseLabel: null,
      },
      {
        name: '3-Year LL.B. (Hons.)',
        level: '3-Year Law',
        duration: '3 Years (6 Semesters)',
        admissionRoute: 'TNDALU Merit',
        eligibility:
          'Any recognized undergraduate degree with minimum 60% marks (55% for SC/ST candidates).',
        rrcCourseLink: null,
        rrcCourseLabel: null,
      },
      {
        name: 'LL.M. (Postgraduate in 9 Specialisations)',
        level: 'Postgraduate',
        duration: '2 Years (4 Semesters)',
        admissionRoute: 'TNDALU Merit',
        eligibility:
          'B.L. / LL.B. degree with minimum 50% marks (45% for SC/ST candidates).',
        rrcCourseLink: null,
        rrcCourseLabel: null,
      },
    ],
  },
  {
    id: 'mnlu-mumbai',
    slug: 'mnlu-mumbai',
    name: 'MNLU Mumbai',
    fullName: 'Maharashtra National Law University Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    type: 'National Law University',
    establishedYear: 2014,
    tagline: 'Premier national law university in the financial capital, excelling in commercial and arbitration law.',
    description:
      'Maharashtra National Law University Mumbai was established under the Maharashtra National Law University Act 2014. Located in Powai, Mumbai, MNLU Mumbai leverages its strategic position in the financial and commercial capital of India to foster close linkages with the Bombay High Court, leading arbitration institutions, and premier corporate law firms.',
    coursesOffered: ['5-Year Integrated LL.B.', 'LL.M.'],
    entranceExams: ['CLAT UG', 'CLAT PG'],
    officialWebsite: 'https://mnlumumbai.edu.in/',
    sourceUrl: 'https://mnlumumbai.edu.in/admissions/',
    lastVerified: 'October 2026',
    highlights: [
      'Strategic location in Mumbai providing immersion in commercial law and maritime arbitration',
      'Offers specialized LL.M. in Commercial and Corporate Law, Investment Law, and IP',
      'Active Centres of Excellence in Arbitration, Mediation, and Insolvency Law',
      'Strong judicial mentorship and clinical learning opportunities',
    ],
    programmes: [
      {
        name: 'B.A. LL.B. (Hons.) / B.B.A. LL.B. (Hons.)',
        level: 'Undergraduate',
        duration: '5 Years (10 Semesters)',
        admissionRoute: 'CLAT UG',
        eligibility:
          '10+2 examination with minimum 45% marks (40% for SC/ST candidates).',
        rrcCourseLink: '/courses/clat-ug',
        rrcCourseLabel: 'Prepare with RRC CLAT UG Course',
      },
      {
        name: 'LL.M. (Corporate and Commercial Law / IP Law)',
        level: 'Postgraduate',
        duration: '1 Year (2 Semesters)',
        admissionRoute: 'CLAT PG',
        eligibility:
          'LL.B. degree or equivalent with minimum 50% marks (45% for SC/ST candidates).',
        rrcCourseLink: '/courses/clat-pg',
        rrcCourseLabel: 'Prepare with RRC CLAT PG Course',
      },
    ],
  },
  {
    id: 'nliu-bhopal',
    slug: 'nliu-bhopal',
    name: 'NLIU Bhopal',
    fullName: 'National Law Institute University',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    type: 'National Law University',
    establishedYear: 1997,
    tagline: 'Second National Law University established in India, renowned for cyber law and mooting prowess.',
    description:
      'National Law Institute University, Bhopal was established by Act No. 41 of 1997 of the Madhya Pradesh Legislature. Located beside Kerwa Dam in Bhopal, NLIU is renowned for its Rajiv Gandhi National Cyber Law Centre, pioneering B.Sc. LL.B. (Hons. Cyber Security) programme, and stellar record in international commercial arbitration moots.',
    coursesOffered: ['5-Year Integrated LL.B.', 'LL.M.'],
    entranceExams: ['CLAT UG', 'CLAT PG'],
    officialWebsite: 'https://www.nliu.ac.in/',
    sourceUrl: 'https://www.nliu.ac.in/admissions/',
    lastVerified: 'October 2026',
    highlights: [
      'Second NLU in India, established in 1997',
      'Home to the Rajiv Gandhi National Cyber Law Centre (RGNCLC)',
      'Offers B.A. LL.B. (Hons.) and specialized B.Sc. LL.B. (Hons. Cyber Security)',
      'Scenic residential campus on Kerwa Dam Road, Bhopal',
    ],
    programmes: [
      {
        name: 'B.A. LL.B. (Hons.) / B.Sc. LL.B. (Hons. Cyber Security)',
        level: 'Undergraduate',
        duration: '5 Years (15 Trimesters)',
        admissionRoute: 'CLAT UG',
        eligibility:
          '10+2 with minimum 45% marks (40% for SC/ST candidates). For B.Sc. LL.B., candidates must have studied Science with Mathematics at 10+2 level.',
        rrcCourseLink: '/courses/clat-ug',
        rrcCourseLabel: 'Prepare with RRC CLAT UG Course',
      },
      {
        name: 'LL.M. (Master of Laws)',
        level: 'Postgraduate',
        duration: '1 Year (3 Trimesters)',
        admissionRoute: 'CLAT PG',
        eligibility:
          'LL.B. degree or equivalent with minimum 50% marks (45% for SC/ST candidates).',
        rrcCourseLink: '/courses/clat-pg',
        rrcCourseLabel: 'Prepare with RRC CLAT PG Course',
      },
    ],
  },
  {
    id: 'du-faculty-of-law',
    slug: 'du-faculty-of-law',
    name: 'Faculty of Law, University of Delhi',
    fullName: 'Faculty of Law, University of Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Central University',
    establishedYear: 1924,
    tagline: 'Historic law faculty that has educated India’s most distinguished judges, jurists, and legal leaders.',
    description:
      'Established in 1924, the Faculty of Law at the University of Delhi is one of the oldest and largest law centres in India. Comprising Campus Law Centre (CLC), Law Centre I (LC-I), and Law Centre II (LC-II), DU Law has produced Supreme Court Chief Justices, senior advocates, cabinet ministers, and scholars. In recent years, DU also introduced 5-year integrated law courses at Kanad Bhawan admitted via CLAT UG.',
    coursesOffered: ['5-Year Integrated LL.B.', '3-Year LL.B.', 'LL.M.'],
    entranceExams: ['CLAT UG', 'CUET PG'],
    officialWebsite: 'https://lawfaculty.du.ac.in/',
    sourceUrl: 'https://admission.uod.ac.in/',
    lastVerified: 'October 2026',
    highlights: [
      'Centenary legacy of producing Supreme Court Judges, Union Ministers, and leading jurists',
      'Famous 3-Year LL.B. programme across Campus Law Centre, Law Centre-I, and Law Centre-II',
      'New 5-Year Integrated B.A. LL.B. (Hons.) and B.B.A. LL.B. (Hons.) admitted through CLAT UG',
      'Prime location in the historic North Campus of University of Delhi',
    ],
    programmes: [
      {
        name: 'B.A. LL.B. (Hons.) / B.B.A. LL.B. (Hons.) (5-Year Integrated)',
        level: 'Undergraduate',
        duration: '5 Years (10 Semesters)',
        admissionRoute: 'CLAT UG',
        eligibility:
          '10+2 from a recognized board with minimum 45% marks (40% for SC/ST candidates).',
        rrcCourseLink: '/courses/clat-ug',
        rrcCourseLabel: 'Prepare with RRC CLAT UG Course',
      },
      {
        name: '3-Year LL.B. (CLC / LC-I / LC-II)',
        level: '3-Year Law',
        duration: '3 Years (6 Semesters)',
        admissionRoute: 'CUET PG',
        eligibility:
          "Graduate or Postgraduate degree from a recognized University with minimum 50% marks (45% for OBC/CW/PwD, 40% for SC/ST).",
        rrcCourseLink: null,
        rrcCourseLabel: null,
      },
      {
        name: 'LL.M. (2-Year Full-time / 3-Year Evening)',
        level: 'Postgraduate',
        duration: '2 or 3 Years',
        admissionRoute: 'CUET PG',
        eligibility:
          '3-Year or 5-Year LL.B. degree with minimum 50% marks (45% for SC/ST).',
        rrcCourseLink: null,
        rrcCourseLabel: null,
      },
    ],
  },
  {
    id: 'symbiosis-law-school-pune',
    slug: 'symbiosis-law-school-pune',
    name: 'Symbiosis Law School, Pune',
    fullName: 'Symbiosis Law School, Pune (Symbiosis International Deemed University)',
    city: 'Pune',
    state: 'Maharashtra',
    type: 'Deemed University / Private',
    establishedYear: 1977,
    tagline: 'Top-ranked private law school in India with international legal collaborations and strong placement track.',
    description:
      'Symbiosis Law School, Pune (SLS Pune) was established in 1977 and is a constituent of Symbiosis International (Deemed University). Regularly ranked as the top private law institution in India by NIRF, SLS Pune is known for its modern curriculum, international faculty exchanges, diverse mooting honours, and strong corporate law recruitment.',
    coursesOffered: ['5-Year Integrated LL.B.', '3-Year LL.B.', 'LL.M.'],
    entranceExams: ['SLAT', 'AIAT'],
    officialWebsite: 'https://www.symlaw.ac.in/',
    sourceUrl: 'https://www.symlaw.ac.in/admission-process',
    lastVerified: 'October 2026',
    highlights: [
      'Consistently ranked as the leading private law institute in India in national rankings',
      'Conducts Symbiosis Law Admission Test (SLAT) for 5-Year B.A. LL.B. and B.B.A. LL.B.',
      'Active European Union Jean Monnet Chairs and international exchange programs',
      'Modern campus located in Viman Nagar, Pune with cutting-edge moot courts',
    ],
    programmes: [
      {
        name: 'B.A. LL.B. (Hons.) / B.B.A. LL.B. (Hons.)',
        level: 'Undergraduate',
        duration: '5 Years (10 Semesters)',
        admissionRoute: 'SLAT',
        eligibility:
          'Passed Standard XII (10+2) or equivalent examination with minimum 45% marks (40% for SC/ST candidates). Admission via SLAT test and Personal Interaction.',
        rrcCourseLink: null,
        rrcCourseLabel: null,
      },
      {
        name: '3-Year LL.B.',
        level: '3-Year Law',
        duration: '3 Years (6 Semesters)',
        admissionRoute: 'AIAT',
        eligibility:
          'Graduate from any recognized university with minimum 45% marks (40% for SC/ST candidates). Admission via SLS AIAT and Personal Interaction.',
        rrcCourseLink: null,
        rrcCourseLabel: null,
      },
      {
        name: 'LL.M. (Master of Laws)',
        level: 'Postgraduate',
        duration: '1 Year (2 Semesters)',
        admissionRoute: 'AIAT',
        eligibility:
          'Three or Five Years LL.B. Degree from any recognized University with minimum 50% marks (45% for SC/ST).',
        rrcCourseLink: null,
        rrcCourseLabel: null,
      },
    ],
  },
];

export function getAllColleges() {
  return collegesData;
}

export function getCollegeBySlug(slug) {
  if (!slug) return null;
  return collegesData.find((college) => college.slug === slug) ?? null;
}

export function getAllStates() {
  const states = new Set(collegesData.map((c) => c.state));
  return Array.from(states).sort();
}

export function getAllCourses() {
  const courses = new Set();
  collegesData.forEach((c) => c.coursesOffered.forEach((course) => courses.add(course)));
  return Array.from(courses).sort();
}

export function getAllInstitutionTypes() {
  const types = new Set(collegesData.map((c) => c.type));
  return Array.from(types).sort();
}

export function getAllEntranceExams() {
  const exams = new Set();
  collegesData.forEach((c) => c.entranceExams.forEach((exam) => exams.add(exam)));
  return Array.from(exams).sort();
}
