import { Modal, Theme, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
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
    cursor: zoom-in;
`;

const Img = styled.img`
    max-width: min(60vw, ${CssConstants.appContentMaxWidth});
    max-height: 30rem;
`;

const FullScreenImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: black;
    cursor: zoom-out;
`;

const FullScreenImg = styled.img`
    width: auto;
    height: auto;
    max-width: 100vw;
    object-fit: contain;
`;

const ProjectModal: React.FC<IProjectModalProps> = ({project, isOpen, onClose}) => {
    const theme = useTheme<Theme>();
    const [showFullScreenImg, setShowFullScreenImg] = useState(false);

    return (
        <>
            <Modal open={isOpen} onClose={onClose}>
                <ModalWrapper theme={theme}>
                    <Header id="project-details-modal-title">{project.name}</Header>
                    {project.img && <ImgWrapper onClick={() => setShowFullScreenImg(true)}><Img src={project.img} alt={`${project.name}`} /></ImgWrapper>}
                    <span>{project.year}</span>
                    <p id="project-details-modal-description">
                        {project.description}
                    </p>
                    {project.tags && <ProjectTagsDisplay tags={project.tags} />}
                </ModalWrapper>
            </Modal>
            <Modal open={showFullScreenImg} onClose={() => setShowFullScreenImg(false)}>
                <FullScreenImgWrapper onClick={() => setShowFullScreenImg(false) }>
                    <FullScreenImg src={project.img} alt={`${project.name}-fullscreen`}  />
                </FullScreenImgWrapper>
            </Modal>
        </>
    );
};

export interface IProjectModalProps {
    project: IProject;
    isOpen: boolean;
    onClose(): void;
}

export default ProjectModal;