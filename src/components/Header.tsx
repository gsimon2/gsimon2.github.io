import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from '../constants/Constants';
import { Description, Home } from '@material-ui/icons';
import styled from 'styled-components';
import CssConstants from '../constants/CssConstants';

const HeaderEl = styled.header`
    height: ${CssConstants.headerHeight};

    >div {
        background-color: #181d27;
    }
`;

const HeaderBorder = styled.div`
    height: ${CssConstants.headerBorderWidth};
    background-color: #3f51b5 ;
`;

const Header: React.FC = () => {
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState<string>(location.pathname.replace('/', ''));

    React.useEffect(() => {
        setSelectedTab(location.pathname.replace('/', ''))
    }, [location.pathname])

    return (
        <>
            <HeaderEl className="App-header">
                <BottomNavigation value={selectedTab} showLabels >
                    <BottomNavigationAction component={Link} label="Home" value="" icon={<Home />} to={Routes.home} />
                    <BottomNavigationAction component={Link} label="Resume" value="resume" icon={<Description />} to={Routes.resume} />
                </BottomNavigation>
            </HeaderEl>
            <HeaderBorder />
        </>
    );
};

export default Header;