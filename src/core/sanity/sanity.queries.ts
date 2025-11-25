import { client } from 'src/core/sanity/sanity.client';
import { Project, Experience, Skill, About, Hero, SocialLink } from 'src/core/sanity/types/sanity.types';

// Projects
export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc) {
      _id,
      title,
      slug,
      description,
      image,
      technologies,
      liveUrl,
      githubUrl,
      order
    }`,
  );
}

// Experiences
export async function getExperiences(): Promise<Experience[]> {
  return client.fetch(
    `*[_type == "experience"] | order(order asc) {
      _id,
      company,
      role,
      period,
      description,
      achievements,
      technologies,
      order
    }`,
  );
}

// Skills
export async function getSkills(): Promise<Skill[]> {
  return client.fetch(
    `*[_type == "skill"] | order(order asc) {
      _id,
      name,
      size,
      order
    }`,
  );
}

// About (singleton)
export async function getAbout(): Promise<About | null> {
  return client.fetch(
    `*[_type == "about"][0] {
      _id,
      bio,
      profileImage
    }`,
  );
}

// Hero (singleton)
export async function getHero(): Promise<Hero | null> {
  return client.fetch(
    `*[_type == "hero"][0] {
      _id,
      name,
      greeting,
      description,
      titles
    }`,
  );
}

// Social Links
export async function getSocialLinks(): Promise<SocialLink[]> {
  return client.fetch(
    `*[_type == "socialLink"] | order(order asc) {
      _id,
      name,
      url,
      platform,
      order
    }`,
  );
}

// Fetch all content for homepage
export async function getAllHomeContent() {
  const [projects, experiences, skills, about, hero, socialLinks] = await Promise.all([
    getProjects(),
    getExperiences(),
    getSkills(),
    getAbout(),
    getHero(),
    getSocialLinks(),
  ]);

  return {
    projects,
    experiences,
    skills,
    about,
    hero,
    socialLinks,
  };
}
