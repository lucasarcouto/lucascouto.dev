import { useScrollAnimation } from '@utils/hooks/use-scroll-animation';

export default function AboutSection() {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section ref={elementRef} className={`about-section ${isVisible ? 'visible' : ''}`} id="about">
      <div className="about-background">
        <div className="gradient-orb-1"></div>
        <div className="gradient-orb-2"></div>
        <div className="gradient-orb-3"></div>

        <div className="geometric-shape shape-cross"></div>

        <div className="geometric-shape shape-zigzag"></div>

        <div className="geometric-shape shape-ring-half"></div>

        <div className="grid-pattern"></div>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <span>Your Photo</span>
              </div>
              <div className="image-decoration"></div>
            </div>
          </div>

          <div className="about-text">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="about-description">
              I&apos;m a passionate developer who loves building beautiful, functional, and
              user-friendly applications. With a strong foundation in modern web technologies, I
              specialize in creating seamless digital experiences that solve real-world problems.
            </p>
            <p className="about-description">
              My journey in tech started with curiosity and evolved into a career focused on
              continuous learning and innovation. I thrive in collaborative environments and enjoy
              tackling complex challenges with creative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
