import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button';
import { hero } from '../../data/homepage';
import './HomeHero.css';

// Section 1 \u2014 Cinematic Legal Education Journey Hero
// Auto-progresses Scene 01 \u2192 02 \u2192 03 (stops at 03). No manual controls.
export default function HomeHero() {
  const [currentScene, setCurrentScene] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRefs = useRef([]);
  const totalScenes = hero.scenes.length;

  // Autoplay: 4 seconds per scene, stops after the last scene
  useEffect(() => {
    if (hasEnded) return;
    const timer = setTimeout(() => {
      if (currentScene < totalScenes - 1) {
        setCurrentScene((prev) => prev + 1);
      } else {
        setHasEnded(true); // stay on Scene 03
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentScene, hasEnded, totalScenes]);

  // Keep each <video> playing/paused in sync with the active scene
  // Added a check for video.paused to avoid unhandled promise rejections
  // when calling play()/pause() in rapid succession.
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

  return (
    <section className="rrc-cinematic-hero" aria-label="RRC Law Academy \u2014 Legal Education Journey">

      {/* \u2500\u2500 Background media layer \u2500\u2500 */}
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

      {/* \u2500\u2500 Content layer \u2500\u2500 */}
      <div className="rrc-container rrc-cinematic-hero__content">

        {/* Persistent branding \u2014 always visible */}
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

        {/* Scene info panel \u2014 transitions with each scene */}
        <div className="rrc-cinematic-hero__panel-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.21, 1] }}
              className="rrc-cinematic-hero__panel"
            >
              {/* Scene number + stage label */}
              <div className="rrc-cinematic-hero__panel-eyebrow">
                <span className="rrc-cinematic-hero__panel-num">
                  {hero.scenes[currentScene].number}
                </span>
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

        {/* Non-interactive scene indicator */}
        <div className="rrc-cinematic-hero__indicator" aria-hidden="true">
          <span className="rrc-cinematic-hero__indicator-current">
            {hero.scenes[currentScene].number}
          </span>
          <span className="rrc-cinematic-hero__indicator-sep">/</span>
          <span className="rrc-cinematic-hero__indicator-total">
            {String(totalScenes).padStart(2, '0')}
          </span>
        </div>

      </div>
    </section>
  );
}
