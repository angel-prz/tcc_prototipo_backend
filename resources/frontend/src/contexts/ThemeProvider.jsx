import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeState = createContext({
  theme: '',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeState.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeState.Provider>
  );
}

export const useTheme = () => useContext(ThemeState);

export default ThemeProvider;
