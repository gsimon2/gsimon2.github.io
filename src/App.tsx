import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import AppContentRouter from './components/AppContentRouter';
import { createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import React from 'react';
import CssConstants from './constants/CssConstants';

const PageWrapper = styled.div<{isDarkTheme: boolean}>`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: ${props => props.isDarkTheme ? CssConstants.themes.dark.primaryBackground : CssConstants.themes.light.primaryBackground};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  color: ${props => props.isDarkTheme ? CssConstants.themes.dark.textColor : CssConstants.themes.light.textColor};
`;

const AppContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light'
        }
      }),
    [prefersDarkMode],
  );
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PageWrapper isDarkTheme={prefersDarkMode}>
          <AppContentWrapper>
            <Header isDarkTheme={prefersDarkMode} />
            <AppContentRouter />
          </AppContentWrapper>
        </PageWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
