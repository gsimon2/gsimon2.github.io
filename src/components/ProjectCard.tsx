import { Card, CardContent, Grow, Modal, Theme, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeTypes } from '../constants/Constants';
import CssConstants from '../constants/CssConstants';

const Wrapper = styled.div`
    padding: 1rem;
    box-sizing: border-box;
`;

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

const ProjectCard: React.FC = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const theme = useTheme<Theme>();

    return (
        <>
            <Grow in={true}>
                <Wrapper>
                    <Card variant="outlined" onClick={() => setDisplayModal(true)}>
                        <CardContent>
                            Sample Project
                        </CardContent>
                    </Card>
                </Wrapper>
            </Grow>
            <Modal open={displayModal} onClose={() => setDisplayModal(false)}>
                <ModalWrapper theme={theme}>
                    <h2 id="project-details-modal-title">Sample Project Details</h2>
                    <p id="project-details-modal-description">
                        More details about projects will be listed here
                    </p>
                </ModalWrapper>
            </Modal>
        </>
    );
};

export default ProjectCard;