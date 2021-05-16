import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeContextProvider, useThemeContext } from './context';
import theme from './theme';
import Module from './modules';

const Routes = () => {
  const themeContextModel = useThemeContext();
  return (<ThemeContextProvider value={themeContextModel}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Module/>
      </Router>
    </ThemeProvider>
  </ThemeContextProvider>);
}

export default Routes;
