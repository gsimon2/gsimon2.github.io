import { Grow, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import profileImag from '../assets/glen-mt.jpg';
import CssConstants from '../constants/CssConstants';
import {PageWrapper} from '../util/sharedElements';
import bio from '../siteInfo/bio';

const useStyles = makeStyles((theme: Theme) => ({
    img: {
        borderRadius: '20%',
        objectFit: 'contain',
        justifySelf: 'center',
        minWidth: 0,
        boxShadow: theme.shadows[5],
        border: `1px solid ${CssConstants.themes.shared.accentColor}`
    },
    imgMobile: {
        maxHeight: '100%',
        maxWidth: 'min(25rem, 100%)'
    },
    imgDesktop: {
        maxHeight: '35rem',
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
        margin: '4rem 1rem 0 4rem'
    }
}));

const Home: React.FC = () => {
    const isMobileView = useMediaQuery(`(max-width:${CssConstants.mobileBreakPoint})`);
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);

    return (
        <>
            <PageWrapper>
                <div className={`${classes.gridContainer} ${isMobileView ? classes.gridMobile : classes.gridDesktop}`}>
                    <Grow in={true}>
                        <img src={profileImag} className={`${classes.img} ${isMobileView ? classes.imgMobile : classes.imgDesktop}`} alt="profile" />
                    </Grow>
                    <Grow in={true}>
                        <p className={isMobileView ? classes.textContainerMobile : classes.textContainerDesktop}>{bio.aboutMe}</p>
                    </Grow>
                </div>
            </PageWrapper>
        </>
    );
};

export default Home;