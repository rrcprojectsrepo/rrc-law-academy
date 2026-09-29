import CourseTemplate from '../components/course/CourseTemplate';

// Step 6C — route body. All content comes from data/coursePages.js via
// getCoursePage('ailet-pg') inside the shared CourseTemplate. No local copy.
export default function AILETPG() {
  return <CourseTemplate slug="ailet-pg" />;
}

