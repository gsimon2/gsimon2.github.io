import { AppBar, Toolbar, useMediaQuery, InputBase, makeStyles, Theme, useTheme, fade, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import {projects} from '../../siteInfo/projects';
import SearchIcon from '@material-ui/icons/Search';
import { IProject } from '../../models/projectModel';
import CloseIcon from '@material-ui/icons/Close';
import CssConstants from '../../constants/CssConstants';
import ParticlesBackground from '../../particles/ParticlesBackground';

const GridContainer = styled.div<{numColumns: number}>`
    display: grid;
    grid-template-columns: ${props => `repeat(${props.numColumns}, 1fr)`};
`;

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        top: CssConstants.headerHeight
    },
    toolbar: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        display: 'flex',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '15ch',
          '&:focus': {
            width: '30ch',
          },
        },
      },
      clearButton: {
          padding: '0 0.75rem'
      }
}));

const ProjectsPage: React.FC = () => {
    const [filterText, setFilterText] = useState('');
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);

    const isSingleColumnView = useMediaQuery('(max-width:500px)');
    const isDoubleColumnView = useMediaQuery('(max-width:750px)');
    const isTripleColumnView = useMediaQuery('(max-width:1000px)');

    const getNumberOfColumns = () => {
        if (isSingleColumnView) {
            return 1;
        }

        if (isDoubleColumnView) {
            return 2;
        }

        if (isTripleColumnView) {
            return 3;
        }

        return 4;
    };

    const filterFunc = (p: IProject) => {
        return p.name.toLowerCase().includes(filterText.toLowerCase())
            || p.tags?.some(t => t.type.toString().toLowerCase().includes(filterText.toLowerCase()))
            || p.year.includes(filterText.toLowerCase())
            || p.description.toLowerCase().includes(filterText.toLowerCase())
    };

    const projectsToDisplay = projects.filter(filterFunc).map((p, index) => <ProjectCard {...p} key={`card${index}`}/>);

    return (
        <>
            <AppBar position="sticky" className={classes.appBar} >
                <Toolbar variant="dense" className={classes.toolbar}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="search..." 
                                   autoComplete="on"
                                   value={filterText}
                                   onChange={e => setFilterText(e.target.value)}
                                   classes={{root: classes.inputRoot, input: classes.inputInput}}
                                   endAdornment={!!filterText.length ?
                                        <IconButton color="secondary" onClick={() => setFilterText('')} title="clear" id="clear-filter-text-button" className={classes.clearButton}>
                                            <CloseIcon />
                                        </IconButton>:
                                        null} />
                    </div>
                </Toolbar>
            </AppBar>
            <ParticlesBackground>
                <GridContainer numColumns={getNumberOfColumns()}>
                    {projectsToDisplay}
                </GridContainer>
            </ParticlesBackground>
        </>
    );
};

export default ProjectsPage;