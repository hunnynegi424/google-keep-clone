import { createContext, useState } from 'react';

export const useThemeContext = () => {
  const [darkMode, setDarkMode] = useState(false);
  return ({
    darkMode,
    setDarkMode
  });
};

export const themeContext = createContext({
  darkMode: false,
});

export const ThemeContextProvider = themeContext.Provider;