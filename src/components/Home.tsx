import { Grow, useMediaQuery } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import profileImag from '../assets/glen-mt.jpg';
import {PageWrapper} from '../util/sharedElements';

const Img = styled.img`
    border-radius: 20%;
    object-fit: contain;
    justify-self: center;
`;

const MobileImg = styled(Img)`
    min-width: 0;
    max-width: 22rem;
    max-height: 100%;
`;

const DesktopImg = styled(Img)`
    max-width: 100%;
    max-height: 35rem;
`;

const GridContainerColumns = styled.div`
    display: grid;
    grid-template-columns: minmax(5rem, 1fr) 1fr;
`;

const GridContainerRows = styled.div`
    display: grid;
    grid-template-rows: minmax(5rem, 1fr) 1fr;
`;

const TextContainer = styled.span<{isDesktopView: boolean}>`
    margin: ${props => props.isDesktopView ? '4rem 1rem 0 4rem' : '2rem auto'};
    word-break: break-word;
`;

const Home: React.FC = () => {
    const isDesktopView = useMediaQuery('(min-width:650px)');
    const GridContainer = isDesktopView ? GridContainerColumns : GridContainerRows;
    const ImageElemnt = isDesktopView ? DesktopImg : MobileImg ;

    return (
        <>
            <PageWrapper>
                <GridContainer>
                    <Grow in={true}>
                        <ImageElemnt src={profileImag} />
                    </Grow>
                    <Grow in={true}>
                        <TextContainer isDesktopView={isDesktopView}>Hi I'm Glen! Eventually I will talk about myself here</TextContainer>
                    </Grow>
                </GridContainer>
            </PageWrapper>
        </>
    );
};

export default Home;