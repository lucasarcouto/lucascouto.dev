import { useState, useEffect, useMemo } from 'react';
import { Hero } from 'src/core/sanity/types/sanity.types';

interface HeroSectionProps {
  hero: Hero | null;
}

export default function HeroSection({ hero }: Readonly<HeroSectionProps>) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const titlesKey = useMemo(() => JSON.stringify(hero?.titles), [hero?.titles]);

  useEffect(() => {
    setIsVisible(true);
    setTitleIndex(0);

    if (!hero?.titles || hero.titles.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % hero.titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titlesKey, hero?.titles]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="gradient-orb-1"></div>
        <div className="gradient-orb-2"></div>
        <div className="gradient-orb-3"></div>

        <div className="geometric-shape shape-circle-1"></div>
        <div className="geometric-shape shape-circle-2"></div>
        <div className="geometric-shape shape-ring-1"></div>
        <div className="geometric-shape shape-arc-2"></div>
        <div className="geometric-shape shape-square"></div>
        <div className="geometric-shape shape-triangle-1"></div>
        <div className="grid-pattern"></div>
      </div>

      <HeroContent hero={hero} isVisible={isVisible} titleIndex={titleIndex} />
    </section>
  );
}

interface HeroContentProps {
  hero: Hero | null;
  isVisible: boolean;
  titleIndex: number;
}
function HeroContent({ hero, isVisible, titleIndex }: Readonly<HeroContentProps>) {
  if (!hero) return <></>;

  return (
    <div className="hero-content">
      <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
        <p className="hero-greeting">{hero?.greeting}</p>
        <h1 className="hero-name">{hero?.name}</h1>
        <div className="title-container">
          <h2 className="hero-title">
            <span className="title-text" key={titleIndex}>
              {hero?.titles?.[titleIndex]}
            </span>
          </h2>
        </div>
        <p className="hero-description">{hero?.description}</p>
        <div className="hero-cta">
          <button className="btn-default cta-button" onClick={() => scrollToSection('projects')}>
            View My Work
          </button>
        </div>
      </div>
      <div className={`hero-logo ${isVisible ? 'visible' : ''}`}>
        <img
          src="/assets/images/logo_light.svg"
          alt="LC Logo"
          className="hero-logo-img logo-light"
        />
        <img
          src="/assets/images/logo_dark.svg"
          alt="LC Logo"
          className="hero-logo-img logo-dark"
        />
      </div>
    </div>
  );
}

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}