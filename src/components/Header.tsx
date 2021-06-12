import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from '../constants/Constants';
import { Description, Home, Collections } from '@material-ui/icons';
import styled from 'styled-components';
import CssConstants from '../constants/CssConstants';

const HeaderEl = styled.header<{isDarkTheme: boolean}>`
    height: ${CssConstants.headerHeight};

    >div {
        background-color: ${props => props.isDarkTheme ? CssConstants.themes.dark.secondaryBackground : CssConstants.themes.light.secondaryBackground};
    }
`;

const HeaderBorder = styled.div`
    height: ${CssConstants.headerBorderWidth};
    background-color: ${CssConstants.themes.shared.accentColor};
`;

const Header: React.FC<IHeaderProps> = ({isDarkTheme}) => {
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState<string>(location.pathname.replace('/', ''));

    React.useEffect(() => {
        setSelectedTab(location.pathname.replace('/', ''))
    }, [location.pathname])

    return (
        <>
            <HeaderEl className="App-header" isDarkTheme={isDarkTheme} >
                <BottomNavigation value={selectedTab} showLabels >
                    <BottomNavigationAction component={Link} label="Home" value="" icon={<Home />} to={Routes.home} />
                    <BottomNavigationAction component={Link} label="Projects" value="projects" icon={<Collections />} to={Routes.projects} />
                    <BottomNavigationAction component={Link} label="Resume" value="resume" icon={<Description />} to={Routes.resume} />
                </BottomNavigation>
            </HeaderEl>
            <HeaderBorder />
        </>
    );
};

interface IHeaderProps {
    isDarkTheme: boolean;
}

export default Header;