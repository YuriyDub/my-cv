import { createContext, useState, useContext } from 'react';

export type ThemeType = 'light' | 'dark';

type ThemeContextType = { theme: ThemeType; setTheme: (setTheme: ThemeType) => void };

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const localTheme = localStorage.getItem('theme');

  if (localTheme === null) {
    localStorage.setItem('theme', 'light');
  }

  const [theme, setTheme] = useState<ThemeType>(localStorage.getItem('theme') as ThemeType);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
