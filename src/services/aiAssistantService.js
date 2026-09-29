import { aiConfig } from '../data/ai/aiConfig';
import { rrcKnowledge } from '../data/ai/rrcKnowledge';

const ROUTE_LINKS = {
  registration: { label: 'Registration', to: rrcKnowledge.navigation.registration },
  contact: { label: 'Contact', to: rrcKnowledge.navigation.contact },
};

function result(text, links = []) {
  return { text, links };
}

function normalized(message) {
  return message.trim().toLocaleLowerCase().replace(/\s+/g, ' ');
}

function linksFor(...routes) {
  return routes.map((route) => ({ label: route.label, to: route.to }));
}

function courseFor(text) {
  return rrcKnowledge.courses.find((course) => {
    const slugTerm = course.route.split('/').at(-1).replace('-', ' ');
    return text.includes(course.title.toLocaleLowerCase())
      || text.includes(course.shortTitle.toLocaleLowerCase())
      || text.includes(slugTerm);
  });
}

function programFor(text) {
  return rrcKnowledge.programs.find((program) => {
    const slugTerm = program.route.split('/').at(-1).replaceAll('-', ' ');
    return text.includes(program.title.toLocaleLowerCase())
      || text.includes(program.shortTitle.toLocaleLowerCase())
      || text.includes(slugTerm);
  });
}

function matches(text, pattern) {
  return pattern.test(text);
}

function getLocalResponse(message) {
  const text = normalized(message);

  if (!text) return result('Please type a question about RRC Law Academy.');

  if (matches(text, /\b(fee|fees|price|pricing|cost|tuition|how much|charge|payment|scholarship|hostel|transport|office hours?|results?|success rate|ranking|rank|guarantee|placement)\b/)) {
    return result(aiConfig.unconfirmedMessage, linksFor(ROUTE_LINKS.registration, ROUTE_LINKS.contact));
  }

  if (matches(text, /\b(batch|start date|dates?|timings?|schedule|duration|how many (?:\w+ )*tests?|test count|number of tests|faculty|teacher|mentor|qualification|eligibility|exam date|official rules?|class(?:es)?|online|offline|format|mode)\b/)
    && matches(text, /\b(when|what|who|which|how|is|are|date|time|schedule|duration|batch|faculty|teacher|mentor|qualification|eligibility|exam|class(?:es)?|online|offline|format|mode)\b/)) {
    return result(aiConfig.unconfirmedMessage, linksFor(ROUTE_LINKS.registration, ROUTE_LINKS.contact));
  }

  if (matches(text, /\b(legal advice|should i sue|can i be arrested|is it legal|what should i do legally|my legal rights|my case|can i sue|sue someone|take someone to court|legal problem|lawsuit)\b/)) {
    return result("I can provide general information available in the RRC Law Academy website knowledge, but I can't provide legal advice.", [
      { label: 'Study Resources', to: rrcKnowledge.resources.route },
    ]);
  }

  if (matches(text, /\b(write|build|debug|create)\b.*\b(python|javascript|program|code|recipe|poem|story)\b|\b(weather|sports score|stock price)\b/)) {
    return result("I'm here to help with RRC Law Academy information, courses, programs, preparation, resources, career information, and registration.");
  }

  if (matches(text, /^(hi|hello|hey|good morning|good afternoon|good evening)[!. ]*$/)) {
    return result('Hello! Ask me about RRC Law Academy courses, preparation programs, resources, careers, or registration.');
  }

  const course = courseFor(text);
  if (course) {
    return result(course.title + ': ' + course.description, [{ label: 'Explore ' + course.title, to: course.route }]);
  }

  const program = programFor(text);
  if (program) {
    return result(program.title + ': ' + program.description, [{ label: 'Explore ' + program.title, to: program.route }]);
  }

  if (matches(text, /\b(methodology|approach|preparation cycle|how do you prepare|how is preparation structured)\b/)) {
    const steps = rrcKnowledge.methodology.map((step) => step.title).join(' → ');
    return result('The course data describes this preparation sequence: ' + steps + '.', [{ label: 'Explore Courses', to: rrcKnowledge.navigation.courses }]);
  }

  if (matches(text, /\b(what courses|which courses|courses.*offer|course list|all courses|courses available|show courses|courses)\b/)) {
    const list = rrcKnowledge.courses.map((item) => item.title).join(', ');
    return result('The available courses are ' + list + '.', [{ label: 'View Courses', to: rrcKnowledge.navigation.courses }]);
  }

  if (matches(text, /\b(what programs|which programs|programs.*available|programs.*offer|all programs|program list|show programs|programs)\b/)) {
    const list = rrcKnowledge.programs.map((item) => item.title).join(', ');
    return result('The preparation programs are ' + list + '.', [{ label: 'View Programs', to: rrcKnowledge.navigation.programs }]);
  }

  if (matches(text, /\b(resources?|study material|learning areas|what can i study|study for law entrance)\b/)) {
    return result(rrcKnowledge.resources.summary, [{ label: 'Study Resources', to: rrcKnowledge.resources.route }]);
  }

  if (matches(text, /\b(career in law|career|legal profession|lawyer|legal careers)\b/)) {
    return result(rrcKnowledge.career.summary, [{ label: 'Career in Law', to: rrcKnowledge.career.route }]);
  }

  if (matches(text, /\b(register|registration|enquiry|enquire|enroll|enrol|admission)\b/)) {
    return result(rrcKnowledge.registration.summary, [{ label: 'Registration / Enquiry', to: rrcKnowledge.registration.route }]);
  }

  if (matches(text, /\b(contact|phone|email|address|location|where.*academy)\b/)) {
    return result(rrcKnowledge.contact.summary, [{ label: 'Contact', to: rrcKnowledge.contact.route }]);
  }

  if (matches(text, /\b(faqs?|frequently asked|common questions)\b/)) {
    return result('Browse the FAQ page for answers to common questions about RRC Law Academy.', [{ label: 'Visit FAQ', to: rrcKnowledge.faq.route }]);
  }

  if (matches(text, /\b(about rrc|about the academy|who are you|what is rrc law academy)\b/)) {
    return result('I can help you explore ' + rrcKnowledge.academy.scope, [{ label: 'About RRC Law Academy', to: rrcKnowledge.academy.route }]);
  }

  return result(aiConfig.fallbackMessage, linksFor(ROUTE_LINKS.registration, ROUTE_LINKS.contact));
}

// The Promise-returning boundary lets a future backend replace this local source.
export async function getAssistantResponse(message, context = {}) {
  void context;
  return getLocalResponse(typeof message === 'string' ? message : '');
}
