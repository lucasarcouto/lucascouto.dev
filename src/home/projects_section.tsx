import { useScrollAnimation } from '@utils/hooks/use-scroll-animation';
import ProjectCard from '@home/project_card';

export default function ProjectsSection() {
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
            <ProjectCard key={project.id} project={project} delay={index * 0.2} featured />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h3 className="other-projects-title">Other Projects</h3>
            <div className="projects-grid">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} delay={index * 0.15} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.',
    image: '/placeholder-project-1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management tool with real-time updates, team workflows, and productivity analytics.',
    image: '/placeholder-project-2.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description:
      'AI-powered content creation platform leveraging GPT models to generate high-quality marketing copy and blog posts.',
    image: '/placeholder-project-3.jpg',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'React'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description:
      'Beautiful weather visualization dashboard with forecasts, historical data, and location-based alerts.',
    image: '/placeholder-project-4.jpg',
    technologies: ['Vue.js', 'D3.js', 'Weather API', 'TailwindCSS'],
    githubUrl: 'https://github.com',
  },
  {
    id: 5,
    title: 'Portfolio Template',
    description:
      'Customizable portfolio template for developers with dark mode, animations, and CMS integration.',
    image: '/placeholder-project-5.jpg',
    technologies: ['Next.js', 'Sanity CMS', 'Framer Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description:
      'Mobile-first fitness tracking app with workout plans, progress tracking, and social features.',
    image: '/placeholder-project-6.jpg',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    liveUrl: 'https://example.com',
  },
];
