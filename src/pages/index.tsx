import { HomePage } from '@home/home';
import { MainNavigationHeader } from '@ui/navigation_header/navigation_header';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllHomeContent } from '@lib/sanity.queries';
import { HomePageData } from '@sanity-types/sanity.types';

interface HomeProps {
  data: HomePageData;
}

export default function Home({ data }: Readonly<HomeProps>) {
  return (
    <div>
      <Head>
        <title>Lucas Couto</title>
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
