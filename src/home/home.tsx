import HeroSection from '@home/hero_section';
import AboutSection from '@home/about_section';
import SkillsSection from '@home/skills_section';
import ProjectsSection from '@home/projects_section';
import ExperienceSection from '@home/experience_section';
import FooterSection from '@home/footer_section';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <FooterSection />
    </>
  );
}
