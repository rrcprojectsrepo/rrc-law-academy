import CourseTemplate from '../components/course/CourseTemplate';

// Step 6C — route body. All content comes from data/coursePages.js via
// getCoursePage('ailet-ug') inside the shared CourseTemplate. No local copy.
export default function AILETUG() {
  return <CourseTemplate slug="ailet-ug" />;
}

