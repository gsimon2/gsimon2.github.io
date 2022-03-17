import { IconButton, Modal, Theme, useMediaQuery, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeTypes } from '../../constants/Constants';
import { IProject } from '../../models/projectModel';
import CssConstants from '../../constants/CssConstants';
import ProjectTagsDisplay from './ProjectTagsDisplay';
import CloseIcon from '@mui/icons-material/Close';
import ReactMarkdown from 'react-markdown';

const ModalWrapper = styled.div<{theme: Theme}>`
    margin: auto;
    min-width: 0;
    width: 70vw;
    background-color: ${props => props.theme.palette.mode === ThemeTypes.dark ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground};
    color: ${props => props.theme.palette.mode === ThemeTypes.dark ? CssConstants.themes.dark.textColor : CssConstants.themes.light.textColor};
    border: 2px solid;
    border-color: ${CssConstants.themes.shared.accentColor};
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

const P = styled.p`
    white-space: pre-line;
`;

const useStyles = makeStyles({
    modal: {
        display: 'flex',
        overflow: 'auto',
        padding: '1rem'
    },
    closeButtonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '-1rem'
    },
    metaDataWrapper: {
        display: 'flex',
        alignItems: 'center',
        "& >p": {
            margin: '0.75rem 0.5rem 0'
        },
        "& >span": {
            margin: '0.375rem 0.5rem 0 0'
        }
    },
    flexDirectionRow: {
        flexDirection: 'row'
    },
    flexDirectionColumn: {
        flexDirection: 'column'
    }
  });

const ProjectModal: React.FC<IProjectModalProps> = ({project, isOpen, onClose}) => {
    const theme = useTheme<Theme>();
    const classes = useStyles();
    const isMobileView = useMediaQuery(`(max-width:${CssConstants.mobileBreakPoint})`);
    const [showFullScreenImg, setShowFullScreenImg] = useState(false);
  
    return <>
        <Modal open={isOpen} onClose={onClose} className={classes.modal}>
            <ModalWrapper theme={theme}>
                <div className={classes.closeButtonWrapper}>
                    <IconButton
                        color="primary"
                        onClick={onClose}
                        title="close"
                        id="close-modal-button"
                        size="large">
                        <CloseIcon />
                    </IconButton>
                </div>
                <Header id="project-details-modal-title">{project.name}</Header>
                {project.img && <ImgWrapper onClick={() => setShowFullScreenImg(true)}><Img src={project.img} alt={`${project.name}`} /></ImgWrapper>}
                <div className={`${classes.metaDataWrapper} ${isMobileView ? classes.flexDirectionColumn : classes.flexDirectionRow}`}>
                    <span>{project.year}</span>
                    {project.shields?.map((s, index) => <ReactMarkdown children={s} key={`shield-io-${index}`} />)}
                </div>
                <P id="project-details-modal-description">
                    {project.description}
                </P>
                {project.tags && <ProjectTagsDisplay tags={project.tags} />}
            </ModalWrapper>
        </Modal>
        <Modal open={showFullScreenImg} onClose={() => setShowFullScreenImg(false)}>
            <FullScreenImgWrapper onClick={() => setShowFullScreenImg(false) }>
                <FullScreenImg src={project.img} alt={`${project.name}-fullscreen`}  />
            </FullScreenImgWrapper>
        </Modal>
    </>;
};

export interface IProjectModalProps {
    project: IProject;
    isOpen: boolean;
    onClose(): void;
}

export default ProjectModal;