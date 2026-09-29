import CourseTemplate from '../components/course/CourseTemplate';

// Step 6C — route body. All content comes from data/coursePages.js via
// getCoursePage('clat-pg') inside the shared CourseTemplate. No local copy.
export default function CLATPG() {
  return <CourseTemplate slug="clat-pg" />;
}

