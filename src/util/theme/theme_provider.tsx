import { useTheme } from '@utils/hooks/use-theme';
import { createContext, ReactNode, useMemo, useCallback } from 'react';

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

interface ThemeContextProviderProps {
  children?: ReactNode;
}

export function ThemeContextProvider({ children }: Readonly<ThemeContextProviderProps>) {
  const { isDarkTheme, setIsDarkTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(!isDarkTheme);
  }, [isDarkTheme, setIsDarkTheme]);

  const value = useMemo(() => ({ isDarkTheme, toggleTheme }), [isDarkTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
