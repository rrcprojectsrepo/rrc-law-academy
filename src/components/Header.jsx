import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import rrcLawAcademyLogo from '../assets/rrc-law-academy-logo.png';
import { SOCIAL_PROFILE_URLS } from '../config/socialLinks';
import { coursePageList } from '../data/coursePages';
import './Header.css';

const COURSE_ITEMS = coursePageList.map((course) => ({
  label: course.title,
  to: '/courses/' + course.slug,
}));

const PROGRAM_ITEMS = [
  { label: 'Foundation Program', to: '/programs/foundation' },
  { label: 'Intensive Revision', to: '/programs/intensive-revision' },
  { label: 'Mock Test Program', to: '/programs/mock-test' },
  { label: 'Current Affairs & GK', to: '/programs/current-affairs' },
];

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Programs', to: '/programs/foundation' },
  { label: 'Why RRC', to: '/why-rrc' },
  { label: 'Career in Law', to: '/career-in-law' },
  { label: 'Resources', to: '/resources' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

const SOCIAL_ITEMS = [
  { label: 'Instagram', href: SOCIAL_PROFILE_URLS.instagram },
  { label: 'Facebook', href: SOCIAL_PROFILE_URLS.facebook },
  { label: 'LinkedIn', href: SOCIAL_PROFILE_URLS.linkedin },
];

function SocialIcon({ name }) {
  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M13.7 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5H17V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.5v3.2h2.8V21h3.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M6.5 9.2H3.3V20h3.2V9.2ZM4.9 7.8a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM20.7 13.8c0-3.3-1.8-4.8-4.2-4.8-1.9 0-2.7 1.1-3.2 1.8V9.2h-3.2V20h3.2v-5.4c0-1.4.3-2.8 2-2.8s1.9 1.6 1.9 2.9V20h3.3v-6.2Z" />
    </svg>
  );
}

function SocialLinks({ mobile = false }) {
  return (
    <div
      className={`rrc-header__social${mobile ? ' rrc-header__social--mobile' : ''}`}
      role="group"
      aria-label="Social media"
    >
      {SOCIAL_ITEMS.map(({ label, href }) => (
        <a
          key={label}
          className="rrc-header__social-link"
          href={href || undefined}
          target={href ? '_blank' : undefined}
          rel={href ? 'noopener noreferrer' : undefined}
          role={href ? undefined : 'link'}
          aria-disabled={href ? undefined : 'true'}
          aria-label={label}
          title={href ? label : `${label} URL not configured`}
          tabIndex={href ? undefined : 0}
        >
          <SocialIcon name={label} />
        </a>
      ))}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const location = useLocation();
  const isCoursesActive = location.pathname === '/courses' || location.pathname.startsWith('/courses/');
  const isProgramsActive = location.pathname === '/programs' || location.pathname.startsWith('/programs/');
  const coursesRef = useRef(null);
  const coursesTriggerRef = useRef(null);
  const programsRef = useRef(null);
  const programsTriggerRef = useRef(null);
  const mobileCoursesTriggerRef = useRef(null);
  const mobileProgramsTriggerRef = useRef(null);

  const closeMenus = useCallback(() => {
    setMenuOpen(false);
    setCoursesOpen(false);
    setProgramsOpen(false);
    setMobileCoursesOpen(false);
    setMobileProgramsOpen(false);
  }, []);

  // Close the panel on browser back/forward navigation.
  useEffect(() => {
    window.addEventListener('popstate', closeMenus);
    return () => window.removeEventListener('popstate', closeMenus);
  }, [closeMenus]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close disclosures with Escape and return focus to the relevant trigger.
  useEffect(() => {
    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      if (coursesOpen) {
        setCoursesOpen(false);
        coursesTriggerRef.current?.focus();
      } else if (programsOpen) {
        setProgramsOpen(false);
        programsTriggerRef.current?.focus();
      } else if (mobileCoursesOpen) {
        setMobileCoursesOpen(false);
        mobileCoursesTriggerRef.current?.focus();
      } else if (mobileProgramsOpen) {
        setMobileProgramsOpen(false);
        mobileProgramsTriggerRef.current?.focus();
      } else if (menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [coursesOpen, menuOpen, mobileCoursesOpen, mobileProgramsOpen, programsOpen]);

  useEffect(() => {
    if (!coursesOpen && !programsOpen) return undefined;
    const closeOnOutsideClick = (event) => {
      const inCourses = coursesRef.current?.contains(event.target);
      const inPrograms = programsRef.current?.contains(event.target);
      if (!inCourses && !inPrograms) {
        setCoursesOpen(false);
        setProgramsOpen(false);
      }
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick);
  }, [coursesOpen, programsOpen]);

  const handleDropdownMenuKeyDown = (event, menuRef, isOpen, setOpen, onOpen) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const links = menuRef.current?.querySelectorAll('[role="menuitem"]');
    if (!links?.length) return;
    const currentIndex = Array.from(links).indexOf(document.activeElement);
    if (!isOpen) {
      onOpen?.();
      setOpen(true);
      requestAnimationFrame(() => {
        links[event.key === 'ArrowUp' || event.key === 'End' ? links.length - 1 : 0].focus();
      });
    } else if (event.key === 'Home') links[0].focus();
    else if (event.key === 'End') links[links.length - 1].focus();
    else if (event.key === 'ArrowDown') links[(currentIndex + 1) % links.length].focus();
    else links[(currentIndex <= 0 ? links.length : currentIndex) - 1].focus();
  };

  return (
    <header className="rrc-header">
      <div className="rrc-container rrc-header__inner">
        <Link to="/" className="rrc-header__brand" aria-label="RRC Law Academy — Home">
          <img className="rrc-header__logo" src={rrcLawAcademyLogo} alt="RRC Law Academy" />
        </Link>

        <nav className="rrc-header__nav" aria-label="Primary">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to + item.label}>
                {item.label === 'Courses' ? (
                  <div className="rrc-header__courses" ref={coursesRef}>
                    <div className="rrc-header__courses-control">
                      <NavLink
                        to="/courses"
                        onClick={closeMenus}
                        className={`rrc-header__link rrc-header__courses-page-link${isCoursesActive ? ' is-active' : ''}`}
                      >
                        Courses
                      </NavLink>
                      <button
                        ref={coursesTriggerRef}
                        type="button"
                        className="rrc-header__link rrc-header__courses-trigger"
                        aria-label={coursesOpen ? 'Close course menu' : 'Open course menu'}
                        aria-expanded={coursesOpen}
                        aria-haspopup="menu"
                        aria-controls="rrc-courses-menu"
                        onClick={() => {
                          setProgramsOpen(false);
                          setCoursesOpen((open) => !open);
                        }}
                        onKeyDown={(event) => handleDropdownMenuKeyDown(event, coursesRef, coursesOpen, setCoursesOpen, () => setProgramsOpen(false))}
                      >
                        <ChevronDown size={16} aria-hidden="true" className={coursesOpen ? 'is-open' : ''} />
                      </button>
                    </div>
                    <ul
                      id="rrc-courses-menu"
                      className={`rrc-header__courses-menu${coursesOpen ? ' is-open' : ''}`}
                      role="menu"
                      aria-label="Courses"
                      aria-hidden={!coursesOpen}
                      inert={!coursesOpen}
                      onKeyDown={(event) => handleDropdownMenuKeyDown(event, coursesRef, coursesOpen, setCoursesOpen)}
                    >
                      {COURSE_ITEMS.map((course) => (
                        <li key={course.to} role="none">
                          <NavLink
                            to={course.to}
                            role="menuitem"
                            onClick={closeMenus}
                            className={({ isActive }) =>
                              isActive ? 'rrc-header__course-link is-active' : 'rrc-header__course-link'
                            }
                          >
                            {course.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : item.label === 'Programs' ? (
                  <div className="rrc-header__programs" ref={programsRef}>
                    <button
                      ref={programsTriggerRef}
                      type="button"
                      className={`rrc-header__link rrc-header__programs-trigger${isProgramsActive ? ' is-active' : ''}`}
                      aria-expanded={programsOpen}
                      aria-haspopup="true"
                      aria-controls="rrc-programs-menu"
                      onClick={() => {
                        setCoursesOpen(false);
                        setProgramsOpen((open) => !open);
                      }}
                      onKeyDown={(event) => handleDropdownMenuKeyDown(event, programsRef, programsOpen, setProgramsOpen, () => setCoursesOpen(false))}
                    >
                      Programs
                      <ChevronDown size={16} aria-hidden="true" className={programsOpen ? 'is-open' : ''} />
                    </button>
                    <ul
                      id="rrc-programs-menu"
                      className={`rrc-header__programs-menu${programsOpen ? ' is-open' : ''}`}
                      role="menu"
                      aria-label="Programs"
                      aria-hidden={!programsOpen}
                      inert={!programsOpen}
                      onKeyDown={(event) => handleDropdownMenuKeyDown(event, programsRef, programsOpen, setProgramsOpen)}
                    >
                      {PROGRAM_ITEMS.map((program) => (
                        <li key={program.to} role="none">
                          <NavLink
                            to={program.to}
                            role="menuitem"
                            onClick={closeMenus}
                            className={({ isActive }) =>
                              isActive ? 'rrc-header__program-link is-active' : 'rrc-header__program-link'
                            }
                          >
                            {program.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={closeMenus}
                    className={({ isActive }) =>
                      isActive ? 'rrc-header__link is-active' : 'rrc-header__link'
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="rrc-header__actions">
          <SocialLinks />
          <Link to="/registration" onClick={closeMenus} className="rrc-btn rrc-btn--primary rrc-header__cta">
            Enquire Now
          </Link>
          <button
            type="button"
            className="rrc-header__menu-btn"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="rrc-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel — real links, keyboard accessible */}
      <div
        id="rrc-mobile-menu"
        className={`rrc-mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to + item.label}>
                {item.label === 'Courses' ? (
                  <>
                    <div className="rrc-mobile-menu__disclosure-row">
                      <NavLink
                        to="/courses"
                        onClick={closeMenus}
                        className={`rrc-mobile-menu__link rrc-mobile-menu__courses-page-link${isCoursesActive ? ' is-active' : ''}`}
                      >
                        Courses
                      </NavLink>
                    <button
                      ref={mobileCoursesTriggerRef}
                      type="button"
                      className={`rrc-mobile-menu__courses-trigger${mobileCoursesOpen ? ' is-active' : ''}`}
                      aria-label={mobileCoursesOpen ? 'Close course links' : 'Show course links'}
                      aria-expanded={mobileCoursesOpen}
                      aria-controls="rrc-mobile-courses-menu"
                      onClick={() => {
                        setMobileProgramsOpen(false);
                        setMobileCoursesOpen((open) => !open);
                      }}
                    >
                      <ChevronDown size={18} aria-hidden="true" className={mobileCoursesOpen ? 'is-open' : ''} />
                    </button>
                    </div>
                    <div className={`rrc-mobile-menu__subnav${mobileCoursesOpen ? ' is-open' : ''}`} aria-hidden={!mobileCoursesOpen} inert={!mobileCoursesOpen}>
                      <ul id="rrc-mobile-courses-menu" className="rrc-mobile-menu__course-list">
                      {COURSE_ITEMS.map((course) => (
                        <li key={course.to}>
                          <NavLink
                            to={course.to}
                            onClick={closeMenus}
                            className={({ isActive }) =>
                              isActive ? 'rrc-mobile-menu__course-link is-active' : 'rrc-mobile-menu__course-link'
                            }
                          >
                            {course.label}
                          </NavLink>
                        </li>
                      ))}
                      </ul>
                    </div>
                  </>
                ) : item.label === 'Programs' ? (
                  <>
                    <button
                      ref={mobileProgramsTriggerRef}
                      type="button"
                      className={`rrc-mobile-menu__link rrc-mobile-menu__programs-trigger${isProgramsActive ? ' is-active' : ''}`}
                      aria-expanded={mobileProgramsOpen}
                      aria-controls="rrc-mobile-programs-menu"
                      onClick={() => {
                        setMobileCoursesOpen(false);
                        setMobileProgramsOpen((open) => !open);
                      }}
                    >
                      Programs
                      <ChevronDown size={18} aria-hidden="true" className={mobileProgramsOpen ? 'is-open' : ''} />
                    </button>
                    <div className={`rrc-mobile-menu__subnav${mobileProgramsOpen ? ' is-open' : ''}`} aria-hidden={!mobileProgramsOpen} inert={!mobileProgramsOpen}>
                      <ul id="rrc-mobile-programs-menu" className="rrc-mobile-menu__program-list">
                      {PROGRAM_ITEMS.map((program) => (
                        <li key={program.to}>
                          <NavLink
                            to={program.to}
                            onClick={closeMenus}
                            className={({ isActive }) =>
                              isActive ? 'rrc-mobile-menu__program-link is-active' : 'rrc-mobile-menu__program-link'
                            }
                          >
                            {program.label}
                          </NavLink>
                        </li>
                      ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={closeMenus}
                    className={({ isActive }) =>
                      isActive ? 'rrc-mobile-menu__link is-active' : 'rrc-mobile-menu__link'
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <div className="rrc-mobile-menu__social-area">
            <p className="rrc-mobile-menu__social-label">Social</p>
            <SocialLinks mobile />
          </div>
          <Link to="/registration" onClick={closeMenus} className="rrc-btn rrc-btn--primary rrc-mobile-menu__cta">
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

