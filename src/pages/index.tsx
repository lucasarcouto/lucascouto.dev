import { HomePage } from '@home/home';
import { MainNavigationHeader } from '@ui/navigation_header/navigation_header';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lucas Couto</title>
      </Head>
      <MainNavigationHeader />
      <HomePage />
    </div>
  );
}
