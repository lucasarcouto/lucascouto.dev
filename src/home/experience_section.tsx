import React from 'react';
import { useScrollAnimation } from '@utils/hooks/use-scroll-animation';

export default function ExperienceSection() {
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
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tech Innovators Inc.',
    role: 'Senior Full-Stack Developer',
    period: 'Jan 2022 - Present',
    description:
      'Leading development of scalable web applications and mentoring junior developers.',
    achievements: [
      'Architected and deployed microservices handling 1M+ daily requests',
      'Reduced page load time by 60% through optimization strategies',
      'Mentored team of 5 junior developers',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    id: 2,
    company: 'StartupXYZ',
    role: 'Full-Stack Developer',
    period: 'Mar 2020 - Dec 2021',
    description: 'Built core features for a SaaS platform serving 10,000+ users.',
    achievements: [
      'Developed real-time collaboration features using WebSockets',
      'Implemented CI/CD pipeline reducing deployment time by 75%',
      'Integrated payment systems processing $500K+ monthly',
    ],
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Redis', 'Stripe'],
  },
  {
    id: 3,
    company: 'Digital Agency Co.',
    role: 'Frontend Developer',
    period: 'Jun 2018 - Feb 2020',
    description: 'Created responsive, accessible websites for enterprise clients.',
    achievements: [
      'Delivered 20+ client projects with 98% satisfaction rate',
      'Improved SEO rankings resulting in 150% traffic increase',
      'Established component library used across 30+ projects',
    ],
    technologies: ['React', 'SCSS', 'WordPress', 'Figma'],
  },
  {
    id: 4,
    company: 'Freelance',
    role: 'Web Developer',
    period: 'Jan 2017 - May 2018',
    description: 'Provided web development services to local businesses and startups.',
    achievements: [
      'Built custom e-commerce solutions for 5+ small businesses',
      'Developed SEO-optimized websites increasing client visibility',
      'Maintained 100% project delivery on-time record',
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL'],
  },
];

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

        <p className="description">{experience.description}</p>

        <ul className="achievements">
          {experience.achievements.map(achievement => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>

        <div className="technologies">
          {experience.technologies.map(tech => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
