import HeroSection from '@home/hero_section';
import AboutSection from '@home/about_section';
import SkillsSection from '@home/skills_section';
import ProjectsSection from '@home/projects_section';
import ExperienceSection from '@home/experience_section';
import FooterSection from '@home/footer_section';
import { HomePageData } from 'src/core/sanity/types/sanity.types';

interface HomePageProps {
  data: HomePageData;
}

export function HomePage({ data }: Readonly<HomePageProps>) {
  return (
    <>
      <HeroSection hero={data.hero} />
      <AboutSection about={data.about} />
      <SkillsSection skills={data.skills} />
      <ProjectsSection projects={data.projects} />
      <ExperienceSection experiences={data.experiences} />
      <FooterSection socialLinks={data.socialLinks} />
    </>
  );
}
