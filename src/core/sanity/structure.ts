import type { StructureResolver } from 'sanity/structure';

/**
 * Defines the navigation structure for Sanity Studio.
 * Controls how content types appear in the Studio sidebar.
 *
 * @see https://www.sanity.io/docs/structure-builder-reference
 */
export const structure: StructureResolver = S =>
  S.list().title('Content').items(S.documentTypeListItems());
