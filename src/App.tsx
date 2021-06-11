import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import AppContentRouter from './components/AppContentRouter';
import { createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import React from 'react';

const PageWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: #282e3a;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  color: lightgray;
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
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PageWrapper>
          <AppContentWrapper>
            <Header />
            <AppContentRouter />
          </AppContentWrapper>
        </PageWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
