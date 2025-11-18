import { type SchemaTypeDefinition } from 'sanity';
import project from './project';
import experience from './experience';
import skill from './skill';
import about from './about';
import hero from './hero';
import socialLink from './socialLink';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, experience, skill, about, hero, socialLink],
};
