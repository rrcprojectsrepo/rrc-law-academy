import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Button from '../Button';
import { hero } from '../../data/homepage';
import './HomeHero.css';

// Section 1 — Cinematic Legal Education Journey Hero
// Auto-progresses scenes continuously. No manual controls.
export default function HomeHero() {
  const [currentScene, setCurrentScene] = useState(0);
  const videoRefs = useRef([]);
  const totalScenes = hero.scenes.length;
  const shouldReduceMotion = useReducedMotion();

  // Autoplay: 5 seconds per scene, loops continuously
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScene((prev) => (prev + 1) % totalScenes);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentScene, totalScenes]);

  // Keep each <video> playing/paused in sync with the active scene
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentScene) {
        if (video.paused) {
          video.play().catch(() => { /* autoplay blocked \u2014 poster shown */ });
        }
      } else {
        if (!video.paused) {
          video.pause();
        }
        video.currentTime = 0;
      }
    });
  }, [currentScene]);

  // Pause every video when the hero unmounts
  useEffect(() => () => {
    videoRefs.current.forEach((video) => video && video.pause());
  }, []);

  const transitionConfig = shouldReduceMotion 
    ? { duration: 0.01 } 
    : { duration: 0.55, ease: [0.22, 0.61, 0.21, 1] };

  const initialConfig = shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 10 };
  const animateConfig = { opacity: 1, y: 0 };
  const exitConfig = shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: -8 };

  return (
    <section className="rrc-cinematic-hero" aria-label="RRC Law Academy — Legal Education Journey">

      {/* ── Background media layer ── */}
      <div className="rrc-cinematic-hero__media" aria-hidden="true">
        {hero.scenes.map((scene, index) => (
          <div
            key={scene.id}
            className={`rrc-cinematic-hero__video-wrapper${index === currentScene ? ' is-active' : ''}`}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={scene.video}
              poster={scene.poster}
              muted
              playsInline
              loop
              autoPlay={index === 0}
              className="rrc-cinematic-hero__video"
              disablePictureInPicture
            />
          </div>
        ))}
        <div className="rrc-cinematic-hero__overlay" />
      </div>

      {/* ── Content layer ── */}
      <div className="rrc-container rrc-cinematic-hero__content">

        {/* Persistent branding — always visible */}
        <div className="rrc-cinematic-hero__persistent">
          <p className="rrc-cinematic-hero__brand">
            {hero.persistent.title}
          </p>
          <h1 className="rrc-cinematic-hero__title">
            <span className="rrc-cinematic-hero__title-line">{hero.persistent.subtitle1}</span>
            <span className="rrc-cinematic-hero__title-line rrc-cinematic-hero__title-gold">
              {hero.persistent.subtitle2}
            </span>
          </h1>
          <p className="rrc-cinematic-hero__lead">{hero.persistent.text}</p>
          <div className="rrc-cinematic-hero__ctas">
            <Button to={hero.persistent.primaryCta.link} variant="primary">
              {hero.persistent.primaryCta.label}
            </Button>
            <Button to={hero.persistent.secondaryCta.link} variant="secondary">
              {hero.persistent.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Scene info panel — transitions with each scene */}
        <div className="rrc-cinematic-hero__panel-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene}
              initial={initialConfig}
              animate={animateConfig}
              exit={exitConfig}
              transition={transitionConfig}
              className="rrc-cinematic-hero__panel"
            >
              {/* Stage label */}
              <div className="rrc-cinematic-hero__panel-eyebrow">
                <span className="rrc-cinematic-hero__panel-stage">
                  {hero.scenes[currentScene].title}
                </span>
              </div>

              {/* Headline */}
              <p className="rrc-cinematic-hero__panel-headline">
                {hero.scenes[currentScene].headline}
              </p>

              {/* Tags */}
              <p className="rrc-cinematic-hero__panel-tags">
                {hero.scenes[currentScene].tags}
              </p>

              {/* Supporting description */}
              <p className="rrc-cinematic-hero__panel-desc">
                {hero.scenes[currentScene].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
