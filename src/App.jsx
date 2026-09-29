import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Programs from './pages/Programs';
import CLATUG from './pages/CLATUG';
import CLATPG from './pages/CLATPG';
import AILETUG from './pages/AILETUG';
import AILETPG from './pages/AILETPG';
import Foundation from './pages/Foundation';
import IntensiveRevision from './pages/IntensiveRevision';
import MockTest from './pages/MockTest';
import CurrentAffairs from './pages/CurrentAffairs';
import WhyRRC from './pages/WhyRRC';
import CareerInLaw from './pages/CareerInLaw';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Registration from './pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="programs" element={<Programs />} />
          <Route path="courses/clat-ug" element={<CLATUG />} />
          <Route path="courses/clat-pg" element={<CLATPG />} />
          <Route path="courses/ailet-ug" element={<AILETUG />} />
          <Route path="courses/ailet-pg" element={<AILETPG />} />
          <Route path="programs/foundation" element={<Foundation />} />
          <Route path="programs/intensive-revision" element={<IntensiveRevision />} />
          <Route path="programs/mock-test" element={<MockTest />} />
          <Route path="programs/current-affairs" element={<CurrentAffairs />} />
          <Route path="why-rrc" element={<WhyRRC />} />
          <Route path="career-in-law" element={<CareerInLaw />} />
          <Route path="resources" element={<Resources />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
