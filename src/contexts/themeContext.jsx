/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import {
  useTemplateVal,
} from '@dsplay/react-template-utils';

export const ThemeContext = createContext({
  globalTheme: '',
});

const ThemeContextParent = (props) => {
  const themeChoice = useTemplateVal('themeChoice', '');
  let activeTheme = '';

  switch (themeChoice) {
    case '1':
      activeTheme = 'theme-01';
      break;
    case '2':
      activeTheme = 'theme-02';
      break;
    case '3':
      activeTheme = 'theme-03';
      break;
    case '4':
      activeTheme = 'theme-04';
      break;
    default:
      activeTheme = 'theme-01';
      break;
  }

  // const theme = activeTheme;
  const { children } = props;

  const value = {
    globalTheme: activeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextParent;
