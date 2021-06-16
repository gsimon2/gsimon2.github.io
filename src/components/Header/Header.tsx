import { BottomNavigation, BottomNavigationAction, makeStyles, Theme, useTheme } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes, ThemeTypes } from '../../constants/Constants';
import { Description, Home, Collections } from '@material-ui/icons';
import CssConstants from '../../constants/CssConstants';
import SettingsMenu from './SettingsMenu';

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
        width: '10rem',
        marginRight: 'auto'
    },
    RightHeaderElement: {
        width: '10rem',
        marginLeft: 'auto'
    }
  }));

const Header: React.FC = () => {
    const location = useLocation();
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    const [selectedTab, setSelectedTab] = useState<string>(location.pathname);

    React.useEffect(() => {
        setSelectedTab(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <header className={classes.header}>
                <div className={classes.leftHeaderElement} />
                <BottomNavigation value={selectedTab} showLabels className={classes.bottomNav} >
                    <BottomNavigationAction component={Link} label="Home" value={Routes.home} icon={<Home />} to={Routes.home} />
                    <BottomNavigationAction component={Link} label="Projects" value={Routes.projects} icon={<Collections />} to={Routes.projects} />
                    <BottomNavigationAction component={Link} label="Resume" value={Routes.resume} icon={<Description />} to={Routes.resume} />
                </BottomNavigation>
                <div className={classes.RightHeaderElement}>
                    <SettingsMenu />
                </div>
            </header>
            <div className={classes.headerBorder} /> 
        </>
    );
};

export default Header;