import { Card, CardContent, CardMedia, Grow, makeStyles, Theme, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { IProject } from '../../models/projectModel';
import ProjectTagsDisplay from './ProjectTagsDisplay';
import ProjectModal from './ProjectModal';
import CssConstants from '../../constants/CssConstants';
import { ThemeTypes } from '../../constants/Constants';

const Wrapper = styled.div`
    padding: 1rem;
    box-sizing: border-box;
    cursor: pointer;
`;

const DescriptionWrapper = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: small;
`;

const useStyles = makeStyles((theme: Theme) => ({
    media: {
      height: 140
    },
    card: {
        backgroundColor: theme.palette.type === ThemeTypes.dark ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground,
        borderColor: CssConstants.themes.shared.accentColor,
        boxShadow: theme.shadows[2]
    }
  }));

  const CardTopWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const YearSpan = styled.span`
    font-size: small;
  `;

const ProjectCard: React.FC<IProject> = (props) => {
    const {name, img, description, year, tags} = props;
    const [displayModal, setDisplayModal] = useState(false);
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);

    return (
        <>
            <Grow in={true}>
                <Wrapper>
                    <Card variant="outlined" onClick={() => setDisplayModal(true)} className={classes.card}>
                        {img && <CardMedia 
                            className={classes.media}
                            image={img}
                            title={name}
                        />}
                        <CardContent>
                            <CardTopWrapper>
                                <span>
                                    {name}
                                </span>
                                <YearSpan>
                                    {year}
                                </YearSpan>
                            </CardTopWrapper>
                            <DescriptionWrapper>
                                {description}
                            </DescriptionWrapper>
                            {tags?.length && <ProjectTagsDisplay tags={tags} isCompactView={true} />}
                        </CardContent>
                    </Card>
                </Wrapper>
            </Grow>
            <ProjectModal project={props} isOpen={displayModal} onClose={() => setDisplayModal(false)} />
        </>
    );
};

export default ProjectCard;