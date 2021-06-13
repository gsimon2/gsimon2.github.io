import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../util/sharedElements';
import ProjectCard from './ProjectCard';
import {projects} from '../siteInfo/projects';

const GridContainer = styled.div<{numColumns: number}>`
    display: grid;
    grid-template-columns: ${props => `repeat(${props.numColumns}, 1fr)`};
`;

const ProjectsPage: React.FC = () => {
    const isSingleColumnView = useMediaQuery('(max-width:500px)');
    const isDoubleColumnView = useMediaQuery('(max-width:750px)');
    const isTripleColumnView = useMediaQuery('(max-width:1000px)');

    const getNumberOfColumns = () => {
        if (isSingleColumnView) {
            return 1;
        }

        if (isDoubleColumnView) {
            return 2;
        }

        if (isTripleColumnView) {
            return 3;
        }

        return 4;
    };

    return (
        <PageWrapper>
            <GridContainer numColumns={getNumberOfColumns()}>
                {projects.map((p, index) => <ProjectCard {...p} key={`card${index}`}/>)}
            </GridContainer>
        </PageWrapper>
    );
};

export default ProjectsPage;