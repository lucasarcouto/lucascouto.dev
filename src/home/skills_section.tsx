import { useScrollAnimation } from '@utils/hooks/use-scroll-animation';

export default function SkillsSection() {
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
              key={skill.name}
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

interface Skill {
  name: string;
  size: number;
}

const skills: Skill[] = [
  { name: 'JavaScript', size: 3 },
  { name: 'TypeScript', size: 3 },
  { name: 'React', size: 3 },
  { name: 'Next.js', size: 3 },
  { name: 'Node.js', size: 3 },
  { name: 'Python', size: 2 },
  { name: 'GraphQL', size: 2 },
  { name: 'REST API', size: 3 },
  { name: 'PostgreSQL', size: 2 },
  { name: 'MongoDB', size: 2 },
  { name: 'Redis', size: 2 },
  { name: 'Docker', size: 2 },
  { name: 'Kubernetes', size: 2 },
  { name: 'AWS', size: 2 },
  { name: 'Git', size: 3 },
  { name: 'TailwindCSS', size: 3 },
  { name: 'SCSS', size: 2 },
  { name: 'Figma', size: 2 },
  { name: 'Jest', size: 2 },
  { name: 'CI/CD', size: 2 },
];
