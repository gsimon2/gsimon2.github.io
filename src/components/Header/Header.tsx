import { BottomNavigation, BottomNavigationAction, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes, ThemeTypes } from '../../constants/Constants';
import { Description, Home, Collections } from '@material-ui/icons';
import CssConstants from '../../constants/CssConstants';
import SettingsMenu from './SettingsMenu';
import GitHubIcon from '@material-ui/icons/GitHub';
import MobileNavMenu from './MobileNavMenu';

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display: 'flex',
        height: CssConstants.headerHeight,
        backgroundColor: theme.palette.type === ThemeTypes.dark ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground,
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.appBar
    },
    bottomNav: {
        backgroundColor: theme.palette.type === ThemeTypes.dark ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground
    },
    headerBorder: {
        minHeight: CssConstants.headerBorderWidth,
        backgroundColor: CssConstants.themes.shared.accentColor,
        position: 'sticky',
        top: CssConstants.headerHeight
    },
    leftHeaderElement: {
        display: 'flex',
        maxWidth: '10rem',
        minWidth: 0,
        flex: '1 1 auto',
        marginRight: 'auto',
        height: CssConstants.headerHeight
    },
    RightHeaderElement: {
        width: '10rem',
        marginLeft: 'auto',
        height: CssConstants.headerHeight
    }
  }));

const Header: React.FC = () => {
    const location = useLocation();
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    const [selectedTab, setSelectedTab] = useState<string>(location.pathname);
    const isMobileView = useMediaQuery(`(max-width:${CssConstants.mobileBreakPoint})`);

    React.useEffect(() => {
        setSelectedTab(location.pathname);
    }, [location.pathname]);

    const NavElement = (
        <BottomNavigation value={selectedTab} showLabels className={classes.bottomNav} >
            <BottomNavigationAction component={Link} label="Home" value={Routes.home} icon={<Home />} to={Routes.home} />
            <BottomNavigationAction component={Link} label="Github Stats" value={Routes.githubStats} icon={<GitHubIcon />} to={Routes.githubStats} />
            <BottomNavigationAction component={Link} label="Projects" value={Routes.projects} icon={<Collections />} to={Routes.projects} />
            <BottomNavigationAction component={Link} label="Resume" value={Routes.resume} icon={<Description />} to={Routes.resume} />
        </BottomNavigation>
    );

    return (
        <>
            <header className={classes.header}>
                <div className={classes.leftHeaderElement}>{isMobileView && <MobileNavMenu />}</div>
                {!isMobileView && NavElement}
                <div className={classes.RightHeaderElement}>
                    <SettingsMenu />
                </div>
            </header>
            <div className={classes.headerBorder} /> 
        </>
    );
};

export default Header;