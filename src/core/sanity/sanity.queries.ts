import { client } from 'src/core/sanity/sanity.client';
import { Project, Experience, Skill, About, Hero, SocialLink } from 'src/core/sanity/types/sanity.types';

// Projects
export async function getProjects(): Promise<Project[]> {
  try {
    return await client.fetch(
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
  } catch (error) {
    const err = error as Error;
    console.error('Failed to fetch projects:', err.message, err.stack);
    return [];
  }
}

// Experiences
export async function getExperiences(): Promise<Experience[]> {
  try {
    return await client.fetch(
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
  } catch (error) {
    const err = error as Error;
    console.error('Failed to fetch experiences:', err.message, err.stack);
    return [];
  }
}

// Skills
export async function getSkills(): Promise<Skill[]> {
  try {
    return await client.fetch(
      `*[_type == "skill"] | order(order asc) {
        _id,
        name,
        size,
        order
      }`,
    );
  } catch (error) {
    const err = error as Error;
    console.error('Failed to fetch skills:', err.message, err.stack);
    return [];
  }
}

// About (singleton)
export async function getAbout(): Promise<About | null> {
  try {
    return await client.fetch(
      `*[_type == "about"][0] {
        _id,
        bio,
        profileImage
      }`,
    );
  } catch (error) {
    const err = error as Error;
    console.error('Failed to fetch about:', err.message, err.stack);
    return null;
  }
}

// Hero (singleton)
export async function getHero(): Promise<Hero | null> {
  try {
    return await client.fetch(
      `*[_type == "hero"][0] {
        _id,
        name,
        greeting,
        description,
        titles
      }`,
    );
  } catch (error) {
    const err = error as Error;
    console.error('Failed to fetch hero:', err.message, err.stack);
    return null;
  }
}

// Social Links
export async function getSocialLinks(): Promise<SocialLink[]> {
  try {
    return await client.fetch(
      `*[_type == "socialLink"] | order(order asc) {
        _id,
        name,
        url,
        platform,
        order
      }`,
    );
  } catch (error) {
    const err = error as Error;
    console.error('Failed to fetch social links:', err.message, err.stack);
    return [];
  }
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
