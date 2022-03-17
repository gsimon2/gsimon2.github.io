import {
    IconButton,
    ListItemIcon,
    SwipeableDrawer,
    ListItem,
    ListItemText,
    useTheme,
    Theme,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Description, Home, Collections } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, useLocation } from 'react-router-dom';
import { Routes, ThemeTypes } from '../../constants/Constants';
import CssConstants from '../../constants/CssConstants';

const useStyles = makeStyles((theme: Theme) => ({
    selected: {
        boxShadow: `inset 3px 0px 5px 0px ${ThemeTypes.dark ? CssConstants.linkColorSecondary : CssConstants.linkColor}`
    },
    listItem: {
        color: theme.palette.mode === ThemeTypes.dark ? CssConstants.linkColorSecondary : CssConstants.linkColor
    }
}));

const MobileNavMenu: React.FC = () => {
    const location = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState<string>(location.pathname);
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    
    React.useEffect(() => {
        setSelectedTab(location.pathname);
    }, [location.pathname]);

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
      ) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
    
        setIsDrawerOpen(open);
      };

    return (
        <div>
            <IconButton onClick={toggleDrawer(true)} title="Navigation Menu" size="large">
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} color="primary">
                <ListItem component={Link} to={Routes.home} className={`${classes.listItem} ${selectedTab === Routes.home ? classes.selected : ''}`}>
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem component={Link} to={Routes.githubStats} className={`${classes.listItem} ${selectedTab === Routes.githubStats ? classes.selected : ''}`}>
                    <ListItemIcon><GitHubIcon /></ListItemIcon>
                    <ListItemText primary="Github Stats" />
                </ListItem>
                <ListItem component={Link} to={Routes.projects} className={`${classes.listItem} ${selectedTab === Routes.projects ? classes.selected : ''}`}>
                    <ListItemIcon><Collections /></ListItemIcon>
                    <ListItemText primary="Projects" />
                </ListItem>
                <ListItem component={Link} to={Routes.resume} className={`${classes.listItem} ${selectedTab === Routes.resume ? classes.selected : ''}`}>
                    <ListItemIcon><Description /></ListItemIcon>
                    <ListItemText primary="Resume" />
                </ListItem>
            </SwipeableDrawer>
        </div>
    );
};

export default MobileNavMenu;