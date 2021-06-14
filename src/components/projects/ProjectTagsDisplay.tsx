import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ProjectTags } from "../../constants/Constants";
import CasinoIcon from '@material-ui/icons/Casino';

const TypeTagsWrapperCompact = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 -0.5rem -1rem 0;
`;

const TypeTyagsWrapperExpanded = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const IconWrapper = styled.div`
    padding: 0.25rem;
    display: flex;

    >span {
        margin-left: 0.5rem;
    }
`;

const ProjectTagsDisplay: React.FC<IProjectTagsDisplayProps> = ({tags, isCompactView = false}) => {
    const Wrapper = isCompactView ? TypeTagsWrapperCompact : TypeTyagsWrapperExpanded;

    return (
        <Wrapper>
            {tags.includes(ProjectTags.github) && <IconWrapper title="Has Github Repo"><GitHubIcon />{!isCompactView && <span>Has Github Repo</span>}</IconWrapper>}
            {tags.includes(ProjectTags.foundry) && <IconWrapper title="Foundry Module"><CasinoIcon />{!isCompactView && <span>Foundry Module</span>}</IconWrapper>}
      </Wrapper>
    );
};

export interface IProjectTagsDisplayProps {
    tags: ProjectTags[];
    isCompactView?: boolean;
}

export default ProjectTagsDisplay;