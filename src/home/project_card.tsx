import { useState, useRef } from 'react';
import { Project } from 'src/core/sanity/types/sanity.types';
import { getImageUrl } from 'src/core/sanity/sanity.image';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: Readonly<ProjectCardProps>) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <article
      ref={cardRef}
      className="project-card"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        animationDelay: `${delay}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-image">
        {project.image ? (
          <Image
            src={getImageUrl(project.image, 800)}
            alt={project.image.alt || project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="image-placeholder">
            <span>{project.title}</span>
          </div>
        )}
        <div className="image-overlay"></div>
        <h3 className="project-title">{project.title}</h3>
      </div>

      <div className="card-content">
        <div className="project-description">
          <PortableText value={project.description} />
        </div>

        {project.technologies && project.technologies.length > 0 && (
          <div className="technologies-container">
            <h5 className="technologies-title">Tech Stack</h5>

            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {(project.liveUrl || project.githubUrl) && (
          <div className="card-actions-container">
            <h5 className="card-actions-title">Links</h5>

            <div className="card-actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button"
                >
                  Website
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  Code
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
