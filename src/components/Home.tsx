import { Grow, Theme, useMediaQuery, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import profileImag from '../assets/glen-mt.jpg';
import CssConstants from '../constants/CssConstants';
import bio from '../siteInfo/bio';
import ParticlesBackground from '../particles/ParticlesBackground';

import { ThemeTypes } from '../constants/Constants';

const useStyles = makeStyles((theme: Theme) => ({
    img: {
        zIndex: 1,
        borderRadius: '20%',
        objectFit: 'contain',
        justifySelf: 'center',
        minWidth: 0,
        boxShadow: theme.shadows[5],
        border: `1px solid ${CssConstants.themes.shared.accentColor}`,
        marginTop: '2rem'
    },
    imgMobile: {
        maxHeight: '100%',
        maxWidth: 'min(25rem, 100%)'
    },
    imgDesktop: {
        maxHeight: '33rem',
        maxWidth: '100%'
    },
    gridContainer: {
        display: 'grid',
    },
    gridMobile: {
        gridTemplateRows: 'minmax(5rem, 1fr) 1fr'
    },
    gridDesktop: {
        gridTemplateColumns: 'minmax(5rem, 1fr) 1fr'
    },
    textContainerMobile: {
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        margin: '2rem auto'
    },
    textContainerDesktop: {
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        margin: '2rem 1rem 0 4rem'
    },
    glass: {
        padding: '1rem',
        borderRadius: '0.75rem',
        backgroundColor: theme.palette.mode === ThemeTypes.dark ? 'rgba(0, 0, 15, .35)' : 'rgba(220, 240, 255, 0.65)',
        backdropFilter: 'blur(5px)'
    }
}));

const Home: React.FC = () => {
    const isMobileView = useMediaQuery(`(max-width:${CssConstants.mobileBreakPoint})`);
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);

    return (
        <ParticlesBackground>
            <div className={`${classes.gridContainer} ${isMobileView ? classes.gridMobile : classes.gridDesktop}`}>
                <Grow in={true}>
                    <img src={profileImag} className={`${classes.img} ${isMobileView ? classes.imgMobile : classes.imgDesktop}`} alt="profile" />
                </Grow>
                <Grow in={true}>
                    <p className={`${isMobileView ? classes.textContainerMobile : classes.textContainerDesktop} ${classes.glass}`}>{bio.aboutMe}</p>
                </Grow>
            </div>
        </ParticlesBackground>
    );
};

export default Home;