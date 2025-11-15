import { useScrollAnimation } from '@utils/hooks/use-scroll-animation';
import ProjectCard from '@home/project_card';
import { Project } from '@sanity-types/sanity.types';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: Readonly<ProjectsSectionProps>) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section
      ref={elementRef}
      className={`projects-section ${isVisible ? 'visible' : ''}`}
      id="projects"
    >
      <div className="projects-background">
        <div className="gradient-orb-1"></div>
        <div className="gradient-orb-2"></div>
        <div className="gradient-orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">A showcase of my recent work and personal projects</p>

        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project._id} project={project} delay={index * 0.2} featured />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h3 className="other-projects-title">Other Projects</h3>
            <div className="projects-grid">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project._id} project={project} delay={index * 0.15} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
