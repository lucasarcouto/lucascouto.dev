import { HomePage } from '@home/home';
import { MainNavigationHeader } from '@ui/navigation_header/navigation_header';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllHomeContent } from 'src/core/sanity/sanity.queries';
import { HomePageData } from 'src/core/sanity/types/sanity.types';

interface HomeProps {
  data: HomePageData;
}

export default function Home({ data }: Readonly<HomeProps>) {
  const siteUrl = 'https://lucascouto.dev';
  const title = 'Lucas Couto | Software Developer';
  const description =
    'Portfolio of Lucas Couto - Software Developer specializing in web and mobile development with React, Next.js, Flutter, React Native, and modern technologies.';
  const imageUrl = `${siteUrl}/og-image.png`;

  return (
    <div>
      <Head>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      <MainNavigationHeader />
      <HomePage data={data} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const data = await getAllHomeContent();

  return {
    props: {
      data,
    },
    revalidate: 60, // Revalidate every 60 seconds (ISR)
  };
};
