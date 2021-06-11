import styled from 'styled-components';
import Header from './Header';

const PageWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const AppContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

function App() {
  return (
    <PageWrapper>
      <AppContentWrapper>
        <Header />
         <span>Hello</span>
      </AppContentWrapper>
    </PageWrapper>
  );
}

export default App;
