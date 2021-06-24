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
import {ReactComponent as HeaderLogoLight} from '../../assets/header-logo-light.svg';
import {ReactComponent as HeaderLogoDark} from '../../assets/header-logo-dark.svg';

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
    headerElement: {
        display: 'flex',
        flex: 1,
        height: CssConstants.headerHeight,
        minWidth: 0
    },
    leftHeaderElement: {
        justifyContent: 'flex-start'
    },
    centerHeaderElement: {
        justifyContent: 'center',
        flexGrow: 3
    },
    rightHeaderElement: {
        justifyContent: 'flex-end'
    },
    logo: {
        maxWidth: '235px'
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

    const HeaderLogo = theme.palette.type === ThemeTypes.dark ? <HeaderLogoDark className={classes.logo} /> : <HeaderLogoLight className={classes.logo} />;

    return (
        <>
            <header className={classes.header}>
                <div className={`${classes.headerElement} ${classes.leftHeaderElement}`}>
                    {isMobileView ? <MobileNavMenu />: HeaderLogo}
                </div>
                <div className={`${classes.headerElement} ${classes.centerHeaderElement}`}>
                {isMobileView ? HeaderLogo : NavElement}
                </div>
                <div className={`${classes.headerElement} ${classes.rightHeaderElement}`}>
                    <SettingsMenu />
                </div>
            </header>
            <div className={classes.headerBorder} /> 
        </>
    );
};

export default Header;