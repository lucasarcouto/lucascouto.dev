import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from 'src/core/sanity/sanity.client';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper to get optimized image URL
export function getImageUrl(source: SanityImageSource, width?: number) {
  let imageBuilder = urlFor(source).auto('format').fit('max');

  if (width) {
    imageBuilder = imageBuilder.width(width);
  }

  return imageBuilder.url();
}
