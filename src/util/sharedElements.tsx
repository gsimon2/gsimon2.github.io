import styled from 'styled-components';
import CssConstants from '../constants/CssConstants';

export const PageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: ${`calc(100vh - ${CssConstants.totalHeaderHeight})`};
    max-width: ${CssConstants.appContentMaxWidth};
    margin: auto;
    padding: 2rem 1rem;
    box-sizing: border-box;
`;
