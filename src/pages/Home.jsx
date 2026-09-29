import HomeHero from '../components/home/HomeHero';
import HomeQuickStrip from '../components/home/HomeQuickStrip';
import HomeJourney from '../components/home/HomeJourney';
import HomeCourses from '../components/home/HomeCourses';
import HomePillars from '../components/home/HomePillars';
import HomeMethodology from '../components/home/HomeMethodology';
import HomeSkills from '../components/home/HomeSkills';
import HomeWhyRRC from '../components/home/HomeWhyRRC';
import HomeFaculty from '../components/home/HomeFaculty';
import HomeTimeline from '../components/home/HomeTimeline';
import HomeResources from '../components/home/HomeResources';
import HomePrograms from '../components/home/HomePrograms';
import HomeBatches from '../components/home/HomeBatches';
import HomeTestimonials from '../components/home/HomeTestimonials';
import HomeFAQ from '../components/home/HomeFAQ';
import HomeContact from '../components/home/HomeContact';
import HomeFinalCTA from '../components/home/HomeFinalCTA';

// Home — full 17-section composition (clean, data lives in src/data).
export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCourses />
      <HomeQuickStrip />
      <HomeJourney />
      <HomePillars />
      <HomeMethodology />
      <HomeSkills />
      <HomeWhyRRC />
      <HomeFaculty />
      <HomeTimeline />
      <HomeResources />
      <HomePrograms />
      <HomeBatches />
      <HomeTestimonials />
      <HomeFAQ />
      <HomeContact />
      <HomeFinalCTA />
    </>
  );
}

