import { useEffect, useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

const DARK_THEME = 'dark_theme_key';

/**
 * Exposes the main theme for the application.
 *
 * By default, it follows the theme set by the device running the application.
 * Once the user toggles the current theme, it is persisted to [localStorage] and
 * no longer depends on the system defined theme.
 */
export function useTheme() {
  const systemPreference = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
  );

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(!!systemPreference);
  const [isClient, setIsClient] = useState(false);

  // After mounting on client, check localStorage and update if needed
  useEffect(() => {
    setIsClient(true);

    const storedTheme = safeGetLocalStorage(DARK_THEME);

    if (storedTheme !== null) {
      setIsDarkTheme(storedTheme === 'true');
    }
  }, []);

  // Once the user toggles the theme, we add or remove the [dark] class to
  // the body, which prompts the whole app's theme to change.
  useEffect(() => {
    if (!isClient) return;

    if (isDarkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkTheme, isClient]);

  const setDarkTheme = useCallback((newTheme: boolean) => {
    safeSetLocalStorage(DARK_THEME, newTheme.toString());
    setIsDarkTheme(newTheme);
  }, []);

  return {
    isDarkTheme,
    setIsDarkTheme: setDarkTheme,
  };
}

/**
 * Safely get item from localStorage with error handling.
 * Returns null if localStorage is unavailable or throws an error.
 */
function safeGetLocalStorage(key: string): string | null {
  if (!globalThis.window) {
    return null;
  }

  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn('localStorage.getItem failed:', error);
    return null;
  }
}

/**
 * Safely set item to localStorage with error handling.
 * Returns true if successful, false otherwise.
 */
function safeSetLocalStorage(key: string, value: string): boolean {
  if (!globalThis.window) {
    return false;
  }

  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn('localStorage.setItem failed:', error);
    return false;
  }
}
