import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../assets/themes.js';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = React.useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
