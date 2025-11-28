import '@styles';
import type { AppProps } from 'next/app';
import { Raleway } from 'next/font/google';
import { ThemeContextProvider } from '@utils/theme/theme_provider';
import { useWindowData } from '@utils/hooks/use-window-data';

const raleway = Raleway({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps) {
  // Calling this hook here makes sure the correct class name is always
  // appended to the body regarding the screen size
  useWindowData();

  return (
    <ThemeContextProvider>
      <main className={raleway.className}>
        <Component {...pageProps} />
      </main>
    </ThemeContextProvider>
  );
}

export default App;
