import { useScrollAnimation } from '@utils/hooks/use-scroll-animation';
import { Experience } from '@sanity-types/sanity.types';
import { PortableText } from '@portabletext/react';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: Readonly<ExperienceSectionProps>) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={elementRef}
      className={`experience-section ${isVisible ? 'visible' : ''}`}
      id="experience"
    >
      <div className="experience-background">
        <div className="gradient-orb-1"></div>
        <div className="gradient-orb-2"></div>
        <div className="gradient-orb-3"></div>

        <div className="grid-pattern"></div>
      </div>

      <div className="container">
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">My professional journey and key accomplishments</p>

        <div className="timeline">
          <div className="timeline-line"></div>
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience._id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

function ExperienceCard({ experience, index }: Readonly<ExperienceCardProps>) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: true,
  });

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={elementRef}
      className={`timeline-item ${isLeft ? 'left' : 'right'} ${isVisible ? 'visible' : ''}`}
    >
      <div className="timeline-dot"></div>
      <div className="experience-card">
        <div className="card-header">
          <h3 className="role">{experience.role}</h3>
          <h4 className="company">{experience.company}</h4>
          <span className="period">{experience.period}</span>
        </div>

        <div className="description">
          <PortableText value={experience.description} />
        </div>

        {experience.achievements && experience.achievements.length > 0 && (
          <ul className="achievements">
            {experience.achievements.map(achievement => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        )}

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="technologies">
            {experience.technologies.map(tech => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
