import { useEffect, useMemo, useState, useCallback } from 'react';
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
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>();

  const systemPreference = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
  );

  const isDark = useMemo<boolean>(() => {
    // Checking if the app is running in the client-side. If window is undefined,
    // it means this hook was called server-side.
    if (typeof window !== 'undefined') {
      const darkTheme = localStorage.getItem(DARK_THEME);

      if (darkTheme) {
        return darkTheme == 'true';
      }
    }

    // If there's no theme defined in our current state, we return the system
    // defined one.
    return isDarkTheme ?? !!systemPreference;
  }, [systemPreference, isDarkTheme]);

  // Once the user toggles the theme, we add or remove the [dark] class to
  // the body, which prompts the whole app's theme to change.
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const setDarkTheme = useCallback(
    (isDarkTheme: boolean) => {
      // Same as above. If window is undefined, it means this function was called
      // on the server-side.
      if (typeof window == 'undefined') return;

      // Persisting the theme to the [localStorage] and our current state.
      localStorage.setItem(DARK_THEME, isDarkTheme.toString());
      setIsDarkTheme(isDarkTheme);
    },
    [setIsDarkTheme],
  );

  return {
    isDarkTheme: isDark,
    setIsDarkTheme: setDarkTheme,
  };
}
