import { useScrollAnimation } from '@utils/hooks/use-scroll-animation';
import { About } from 'src/core/sanity/types/sanity.types';
import { PortableText } from '@portabletext/react';
import { getImageUrl } from 'src/core/sanity/sanity.image';
import Image from 'next/image';

interface AboutSectionProps {
  about: About | null;
}

export default function AboutSection({ about }: Readonly<AboutSectionProps>) {
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
              {about?.profileImage ? (
                <Image
                  src={getImageUrl(about.profileImage, 600)}
                  alt={about.profileImage.alt || 'Profile photo'}
                  width={600}
                  height={600}
                  className="about-profile-image"
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <></>
              )}
              <div className="image-decoration"></div>
            </div>
          </div>

          <div className="about-text">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            {about?.bio ? (
              <div className="about-description">
                <PortableText value={about.bio} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
