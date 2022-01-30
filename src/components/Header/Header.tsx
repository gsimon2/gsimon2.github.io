import { BottomNavigation, BottomNavigationAction, Theme, useMediaQuery, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes, ThemeTypes } from '../../constants/Constants';
import { Description, Home, Collections } from '@mui/icons-material';
import CssConstants from '../../constants/CssConstants';
import SettingsMenu from './SettingsMenu';
import GitHubIcon from '@mui/icons-material/GitHub';
import MobileNavMenu from './MobileNavMenu';
import {ReactComponent as HeaderLogoLight} from '../../assets/header-logo-light.svg';
import {ReactComponent as HeaderLogoDark} from '../../assets/header-logo-dark.svg';

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display: 'flex',
        height: CssConstants.headerHeight,
        backgroundColor: theme.palette.mode === ThemeTypes.dark ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground,
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.appBar
    },
    bottomNav: {
        backgroundColor: theme.palette.mode === ThemeTypes.dark ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground
    },
    NavAction: {
        width: '6.5rem'
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
            <BottomNavigationAction component={Link} label="Home" value={Routes.home} icon={<Home />} to={Routes.home} className={classes.NavAction} />
            <BottomNavigationAction component={Link} label="Github Stats" value={Routes.githubStats} icon={<GitHubIcon />} to={Routes.githubStats} className={classes.NavAction} />
            <BottomNavigationAction component={Link} label="Projects" value={Routes.projects} icon={<Collections />} to={Routes.projects} className={classes.NavAction} />
            <BottomNavigationAction component={Link} label="Resume" value={Routes.resume} icon={<Description />} to={Routes.resume} className={classes.NavAction} />
        </BottomNavigation>
    );

    const HeaderLogo = theme.palette.mode === ThemeTypes.dark ? <HeaderLogoDark className={classes.logo} /> : <HeaderLogoLight className={classes.logo} />;

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