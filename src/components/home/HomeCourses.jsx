import SectionHeader from '../SectionHeader';
import CourseCard from '../CourseCard';
import { courses } from '../../data/courses';
import './HomeCourses.css';

// Section 4 — Courses (CLAT UG / CLAT PG / AILET UG / AILET PG).
export default function HomeCourses() {
  return (
    <section id="courses" className="rrc-section rrc-section--light" aria-labelledby="rrc-courses-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow="Flagship Programmes"
          title="Prepare for the Right Path"
          description="Focused entrance preparation for undergraduate and postgraduate law pathways."
        />
        <div className="rrc-grid-4 rrc-stagger">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
