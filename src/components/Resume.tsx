import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import Constants from '../constants/Constants';
import CssConstants from '../constants/CssConstants';

const ResumeIFrame = styled.iframe`
    height: 100%;
`;

const ContentWrapper = styled.div`
    width: 100%;
    position: absolute;
    height: ${`calc(100vh - ${CssConstants.totalHeaderHeight})`};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Resume: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <ContentWrapper><CircularProgress /></ContentWrapper>}
            <ResumeIFrame title="ResumeWrapper" src={Constants.resumeIframeSource} onLoad={() => setIsLoading(false)} />
        </>
    );
};

export default Resume;