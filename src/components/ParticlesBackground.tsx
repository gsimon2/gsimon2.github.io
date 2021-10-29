import React, { useEffect, useState } from 'react';
import ParticlesBg from 'particles-bg';
import CssConstants from '../constants/CssConstants';
import { useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';
import {PageWrapper} from '../util/sharedElements';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const Wrapper = styled.div<{isMobileView: boolean}>`
    .particles-bg-canvas-self {
        z-index: 0 !important;
        top: ${`calc(${CssConstants.totalHeaderHeight}) !important`};
        height: ${`calc(100vh - ${CssConstants.totalHeaderHeight}) !important`};
        width: ${props=> props.isMobileView ? 'calc(100% - 1rem) !important' : '100% !important'};
    }
`;

const ParticlesBackground: React.FC = ({children}) => {
    const isEnabled = useSelector((state: RootState) => state.userPreferences.liveBackground);
    const isMobileView = useMediaQuery(`(max-width:${CssConstants.mobileBreakPoint})`);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const onResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);


    return (
        <Wrapper isMobileView={isMobileView} >
            {isEnabled && <ParticlesBg type="cobweb" bg={true} color={CssConstants.themes.shared.accentColor} num={windowSize / 10} key={windowSize} />}
            <PageWrapper>
                {children}
            </PageWrapper>
        </Wrapper>
    );
};

export default ParticlesBackground;