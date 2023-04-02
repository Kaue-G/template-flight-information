import { createContext, useState } from 'react';

export const DEFAULT_THEME = 'theme-01';
export const SECOND_THEME = 'theme-02';
export const THIRD_THEME = 'theme-03';
export const FOURTH_THEME = 'theme-04';

export const ThemeContext = createContext({
  globalTheme: '',
  setGlobalTheme: () => { },
});

const ThemeContextParent = (props) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const { children } = props;

  const value = {
    globalTheme: theme,
    setGlobalTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextParent;
