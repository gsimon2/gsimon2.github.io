import { Modal, Theme, useTheme } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { ThemeTypes } from '../../constants/Constants';
import { IProject } from '../../models/projectModel';
import CssConstants from '../../constants/CssConstants';
import ProjectTagsDisplay from './ProjectTagsDisplay';

const ModalWrapper = styled.div<{theme: Theme}>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 0;
    width: 70vw;
    background-color: ${props => props.theme.palette.type === ThemeTypes.dark ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground};
    color: ${props => props.theme.palette.type === ThemeTypes.dark ? CssConstants.themes.dark.textColor : CssConstants.themes.light.textColor};
    border: 2px solid;
    border-color: ${props => props.theme.palette.type === ThemeTypes.dark ? CssConstants.themes.dark.textColor : CssConstants.themes.light.textColor};
    box-shadow: ${props => props.theme.shadows[5]};
    padding: ${props => props.theme.spacing(2, 4, 3)};
    border-radius: 1rem;
`;

const Header = styled.h2`
    text-align: center;
`;

const ImgWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const Img = styled.img`
    max-width: min(60vw, ${CssConstants.appContentMaxWidth});
    max-height: 30rem;
`;

const ProjectModal: React.FC<IProjectModalProps> = ({project, isOpen, onClose}) => {
    const theme = useTheme<Theme>();

    return (
        <Modal open={isOpen} onClose={onClose}>
            <ModalWrapper theme={theme}>
                <Header id="project-details-modal-title">{project.name}</Header>
                {project.img && <ImgWrapper><Img src={project.img} alt={`${project.name}`} /></ImgWrapper>}
                <p id="project-details-modal-description">
                    {project.description}
                </p>
                {project.tags && <ProjectTagsDisplay tags={project.tags} />}
            </ModalWrapper>
        </Modal>
    );
};

export interface IProjectModalProps {
    project: IProject;
    isOpen: boolean;
    onClose(): void;
}

export default ProjectModal;