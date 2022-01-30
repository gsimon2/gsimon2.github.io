import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import AppContentRouter from './components/AppContentRouter';
import { createTheme, ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import React from 'react';
import CssConstants from './constants/CssConstants';
import { RootState } from './redux/store';
import { useSelector } from 'react-redux';
import { ThemeTypes } from './constants/Constants';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const PageWrapper = styled.div<{themeType: ThemeTypes}>`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: ${props => props.themeType === ThemeTypes.dark ? CssConstants.themes.dark.primaryBackground : CssConstants.themes.light.primaryBackground};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  color: ${props => props.themeType === ThemeTypes.dark ? CssConstants.themes.dark.textColor : CssConstants.themes.light.textColor};
`;

const AppContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

function App() {
  const themeType = useSelector((state: RootState) => state.userPreferences.theme);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeType === ThemeTypes.dark ? 'dark' : 'light',
          primary: {
            main: CssConstants.themes.shared.accentColor,
            dark: CssConstants.themes.shared.accentColor
          }
        }
      }),
    [themeType],
  );
  
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <PageWrapper themeType={themeType}>
            <AppContentWrapper>
              <Header />
              <AppContentRouter />
              {/* <AssetPreFetchManager /> */}
            </AppContentWrapper>
          </PageWrapper>
        </HashRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
