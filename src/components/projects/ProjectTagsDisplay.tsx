import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ProjectTags } from "../../constants/Constants";
import CasinoIcon from '@material-ui/icons/Casino';

const TypeTagsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 -0.5rem -1rem 0;
`;

const IconWrapper = styled.div`
    padding: 0.25rem;
`;

const ProjectTagsDisplay: React.FC<IProjectTagsDisplayProps> = ({tags}) => {

    return (
        <TypeTagsWrapper>
            {tags.includes(ProjectTags.github) && <IconWrapper title="Has Github Repo"><GitHubIcon /></IconWrapper>}
            {tags.includes(ProjectTags.foundry) && <IconWrapper title="Foundry Module"><CasinoIcon /></IconWrapper>}
      </TypeTagsWrapper>
    );
};

export interface IProjectTagsDisplayProps {
    tags: ProjectTags[];
}

export default ProjectTagsDisplay;