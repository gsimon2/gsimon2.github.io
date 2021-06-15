import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ProjectTags } from "../../constants/Constants";
import CasinoIcon from '@material-ui/icons/Casino';
import { IProjectTag } from '../../models/projectModel';
import TagDisplay from './TagDisplay';
import SchoolIcon from '@material-ui/icons/School';
import DescriptionIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';

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
                return <TagDisplay text="Github Repo" icon={<GitHubIcon />} link={t.link} isCompactView={isCompactView} key="github-tag" />;
            case ProjectTags.foundry:
                return <TagDisplay text="Foundry Module" icon={<CasinoIcon />} link={t.link} isCompactView={isCompactView} key="foundry-tag" />;
            case ProjectTags.school:
                return <TagDisplay text="School Project" icon={<SchoolIcon />} isCompactView={isCompactView} key="school-tag" />;
            case ProjectTags.paper:
                return <TagDisplay text="Paper" icon={<DescriptionIcon />} link={t.link} isCompactView={isCompactView} key="paper-tag" />
            case ProjectTags.code:
                return <TagDisplay text="Coding Project" icon={<CodeIcon />} isCompactView={isCompactView} key="code-tag" />
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