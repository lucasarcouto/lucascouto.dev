import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
          <p className="hero-greeting">Hello! I&apos;m</p>
          <h1 className="hero-name">Lucas Couto</h1>
          <div className="title-container">
            <h2 className="hero-title">
              <span className="title-text" key={titleIndex}>
                {titles[titleIndex]}
              </span>
            </h2>
          </div>
          <p className="hero-description">
            Crafting exceptional digital experiences with modern technologies and creative
            solutions.
          </p>
          <div className="hero-cta">
            <button className="btn-default cta-button" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="cta-button-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const titles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Creator'];
