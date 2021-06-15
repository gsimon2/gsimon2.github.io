import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ProjectTags } from "../../constants/Constants";
import CasinoIcon from '@material-ui/icons/Casino';
import { IProjectTag } from '../../models/projectModel';
import TagDisplay from './TagDisplay';

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

const ProjectTagsDisplay: React.FC<IProjectTagsDisplayProps> = ({tags, isCompactView = false}) => {
    const Wrapper = isCompactView ? TypeTagsWrapperCompact : TypeTyagsWrapperExpanded;

    const tagsElements = tags.map(t => {
        switch (t.type) {
            case ProjectTags.github:
                return <TagDisplay text="Github Repo" icon={<GitHubIcon />} link={t.link || ''} isCompactView={isCompactView} />;
            case ProjectTags.foundry:
                return <TagDisplay text="Foundry Module" icon={<CasinoIcon />} link={t.link || ''} isCompactView={isCompactView} />;
            default:
                return null;
        }
    });

    return (
        <Wrapper>
            {tagsElements}
      </Wrapper>
    );
};

export interface IProjectTagsDisplayProps {
    tags: IProjectTag[];
    isCompactView?: boolean;
}

export default ProjectTagsDisplay;