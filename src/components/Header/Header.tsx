import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes, ThemeTypes } from '../../constants/Constants';
import { Description, Home, Collections } from '@material-ui/icons';
import styled from 'styled-components';
import CssConstants from '../../constants/CssConstants';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import SettingsMenu from './SettingsMenu';

const HeaderEl = styled.header<{themeType: ThemeTypes}>`
    display: flex;
    height: ${CssConstants.headerHeight};
    background-color: ${props => props.themeType === ThemeTypes.dark ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground};

    >div {
        background-color: ${props => props.themeType === ThemeTypes.dark ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground};
    }
`;

const HeaderBorder = styled.div`
    height: ${CssConstants.headerBorderWidth};
    background-color: ${CssConstants.themes.shared.accentColor};
`;

const LeftHeaderEl = styled.div`
    width: 10rem;
    margin-right: auto;
`;

const RightHeaderEl = styled.div`
    width: 10rem;
    margin-left: auto;
`;

const Header: React.FC = () => {
    const location = useLocation();
    const themeType = useSelector((state: RootState) => state.userPreferences.theme);
    const [selectedTab, setSelectedTab] = useState<string>(location.pathname);

    React.useEffect(() => {
        setSelectedTab(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <HeaderEl className="App-header" themeType={themeType} >
                <LeftHeaderEl/>
                <BottomNavigation value={selectedTab} showLabels >
                    <BottomNavigationAction component={Link} label="Home" value={Routes.home} icon={<Home />} to={Routes.home} />
                    <BottomNavigationAction component={Link} label="Projects" value={Routes.projects} icon={<Collections />} to={Routes.projects} />
                    <BottomNavigationAction component={Link} label="Resume" value={Routes.resume} icon={<Description />} to={Routes.resume} />
                </BottomNavigation>
                <RightHeaderEl>
                    <SettingsMenu />
                </RightHeaderEl>
            </HeaderEl>
            <HeaderBorder />
        </>
    );
};

export default Header;