import { Card, CardContent, CardMedia, Grow, makeStyles, Modal, Theme, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeTypes } from '../constants/Constants';
import CssConstants from '../constants/CssConstants';
import { IProject } from '../models/projectModel';

const Wrapper = styled.div`
    padding: 1rem;
    box-sizing: border-box;
`;

const useStyles = makeStyles({
    media: {
      height: 140,
    },
  });

const ModalWrapper = styled.div<{theme: Theme}>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400;
    background-color: ${props => props.theme.palette.type === ThemeTypes.dark ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground};
    color: ${props => props.theme.palette.type === ThemeTypes.dark ? CssConstants.themes.dark.textColor : CssConstants.themes.light.textColor};
    border: 2px solid;
    border-color: ${props => props.theme.palette.type === ThemeTypes.dark ? CssConstants.themes.dark.textColor : CssConstants.themes.light.textColor};
    box-shadow: ${props => props.theme.shadows[5]};
    padding: ${props => props.theme.spacing(2, 4, 3)};
    border-radius: 1rem;
`;

const ProjectCard: React.FC<IProject> = ({name, img, description}) => {
    const [displayModal, setDisplayModal] = useState(false);
    const theme = useTheme<Theme>();
    const classes = useStyles();

    return (
        <>
            <Grow in={true}>
                <Wrapper>
                    <Card variant="outlined" onClick={() => setDisplayModal(true)}>
                        {img && <CardMedia 
                            className={classes.media}
                            image={img}
                            title={name}
                        />}
                        <CardContent>
                            {name}
                        </CardContent>
                    </Card>
                </Wrapper>
            </Grow>
            <Modal open={displayModal} onClose={() => setDisplayModal(false)}>
                <ModalWrapper theme={theme}>
                    <h2 id="project-details-modal-title">{`${name} Details`}</h2>
                    <p id="project-details-modal-description">
                        {description}
                    </p>
                </ModalWrapper>
            </Modal>
        </>
    );
};

export default ProjectCard;