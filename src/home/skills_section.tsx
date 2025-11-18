import { useScrollAnimation } from '@utils/hooks/use-scroll-animation';
import { Skill } from 'src/core/sanity/types/sanity.types';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: Readonly<SkillsSectionProps>) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section
      ref={elementRef}
      className={`skills-section ${isVisible ? 'visible' : ''}`}
      id="skills"
    >
      <div className="skills-background">
        <div className="gradient-orb-1"></div>
        <div className="gradient-orb-2"></div>
        <div className="gradient-orb-3"></div>
        <div className="geometric-shape shape-pentagon"></div>
        <div className="geometric-shape shape-zigzag-line"></div>
        <div className="geometric-shape shape-diamond-ring"></div>
        <div className="geometric-shape shape-rounded-square"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="container">
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">Technologies I love working with</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill._id}
              className={`skill-item size${skill.size}`}
              style={{
                animationDelay: `${(index * 0.05).toFixed(2)}s`,
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
