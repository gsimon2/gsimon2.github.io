import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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

let timeoutId: NodeJS.Timeout;
const timeoutDurationInMs = 1500;

const Resume: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadAttempts, setLoadAttempts] = useState(0);

    useEffect(() => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setLoadAttempts(loadAttempts + 1)
        }, timeoutDurationInMs);
    }, [loadAttempts, setLoadAttempts]);

    const onLoad = () => {
        clearTimeout(timeoutId);
        setIsLoading(false)
    };

    return (
        <>
            {isLoading && <ContentWrapper><CircularProgress /></ContentWrapper>}
            <ResumeIFrame key={loadAttempts} title="ResumeWrapper" src={Constants.resumeIframeSource} onLoad={onLoad} />
        </>
    );
};

export default Resume;