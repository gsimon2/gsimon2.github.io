import { Card, CardContent, Grow, makeStyles, Theme, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { IProject } from '../../models/projectModel';
import ProjectTagsDisplay from './ProjectTagsDisplay';
import ProjectModal from './ProjectModal';
import CssConstants from '../../constants/CssConstants';
import { ThemeTypes } from '../../constants/Constants';
import CardMediaWithPlaceHolder from './CardMediaWithPlaceHolder';

const useStyles = makeStyles((theme: Theme) => ({
    media: {
      height: 140
    },
    card: {
        padding: '1px',
        backgroundColor: theme.palette.type === ThemeTypes.dark ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground,
        borderColor: CssConstants.themes.shared.accentColor,
        boxShadow: theme.shadows[2]
    },
    wrapper: {
        padding: '1rem',
        boxSizing: 'border-box',
        cursor: 'pointer'
    },
    descriptionWrapper: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        fontSize: 'small'
    },
    cardTopWrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    yearSpan: {
        fontSize: 'small'
    }
  }));

const ProjectCard: React.FC<IProject> = (props) => {
    const {name, img, description, year, tags} = props;
    const [displayModal, setDisplayModal] = useState(false);
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);

    return (
        <>
            <Grow in={true}>
                <div className={classes.wrapper}>
                    <Card variant="outlined" onClick={() => setDisplayModal(true)} className={classes.card}>
                        {img && <CardMediaWithPlaceHolder 
                            className={classes.media}
                            image={img}
                            title={name}
                        />}
                        <CardContent>
                            <div className={classes.cardTopWrapper}>
                                <span>
                                    {name}
                                </span>
                                <span className={classes.yearSpan}>
                                    {year}
                                </span>
                            </div>
                            <p className={classes.descriptionWrapper}>
                                {description}
                            </p>
                            {tags?.length && <ProjectTagsDisplay tags={tags} isCompactView={true} />}
                        </CardContent>
                    </Card>
                </div>
            </Grow>
            <ProjectModal project={props} isOpen={displayModal} onClose={() => setDisplayModal(false)} />
        </>
    );
};

export default ProjectCard;