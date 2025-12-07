import { SanityImageSource } from '@sanity/image-url';
import { PortableTextBlock } from 'sanity';

export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: PortableTextBlock[];
  image?: SanityImageSource & {
    alt?: string;
  };
  technologies?: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  order: number;
}

export interface Experience {
  _id: string;
  company: string;
  role: string;
  period: string;
  description: PortableTextBlock[];
  achievements?: string[];
  technologies?: string[];
  order: number;
}

export interface Skill {
  _id: string;
  name: string;
  size: 1 | 2 | 3;
  order: number;
}

export interface About {
  _id: string;
  bio: PortableTextBlock[];
  profileImage?: SanityImageSource & {
    alt?: string;
  };
}

export interface Hero {
  _id: string;
  name: string;
  greeting: string;
  description: string;
  titles: string[];
}

export interface SocialLink {
  _id: string;
  name: string;
  url: string;
  platform: 'github' | 'linkedin' | 'twitter' | 'email';
  order: number;
}

export interface HomePageData {
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  about: About | null;
  hero: Hero | null;
  socialLinks: SocialLink[];
}
