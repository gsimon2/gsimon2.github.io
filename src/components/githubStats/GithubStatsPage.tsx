import { Grow, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import CssConstants from '../../constants/CssConstants';
import { ReactSVG } from 'react-svg'
import ParticlesBackground from '../ParticlesBackground';

const useStyles = makeStyles((theme: Theme) => ({
    gridContainerColumns: {
        display: 'grid',
        gridTemplateColumns: 'minmax(5rem, 1fr) 1fr'
    },
    gridContainerRows: {
        display: 'grid',
        gridTemplateRows: 'minmax(5rem, 1fr) 1fr',
        justifyContent: 'center'
    },
    link: {
        color: CssConstants.linkColor
    },
    p: {
        fontSize: 'small',
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        width: 'calc(100% - 2rem)',
        maxWidth: CssConstants.appContentMaxWidth
    },
    card: {
        "& svg > g > rect": {
            stroke: `${CssConstants.themes.shared.accentColor} !important`,
            filter: 'drop-shadow(0px 3px 1px rgba(0,0,0,0.2))',
            fill: `${CssConstants.themes.light.secondaryBackground} !important`
        }
    }
}));

const GithubStatsPage: React.FC = () => {
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    const isMobileView = useMediaQuery('(max-width:1000px)');

    return (
        <ParticlesBackground>
            <div className={isMobileView ? classes.gridContainerRows : classes.gridContainerColumns}>
                <Grow in={true} style={{overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <ReactSVG src="https://raw.githubusercontent.com/gsimon2/github-stats/master/generated/overview.svg" className={classes.card} />
                </Grow>
                <Grow in={true} style={{overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <ReactSVG src="https://raw.githubusercontent.com/gsimon2/github-stats/master/generated/languages.svg" className={classes.card} />
                </Grow>
            </div>
            <div>
                <p className={classes.p}>Github stat elements were generated using: <a className={classes.link} href="https://github.com/jstrieb/github-stats" target="_blank" rel="noreferrer">Github Stats</a></p>
            </div>
        </ParticlesBackground>
    );
};

export default GithubStatsPage;