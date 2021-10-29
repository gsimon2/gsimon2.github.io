import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeTypes } from '../../constants/Constants';
import { RootState } from '../../redux/store';
import { updateTheme } from '../../redux/userPreferencesSlice';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Label = styled.label`
    cursor: pointer;
`;

const ThemeSelector: React.FC = () => {
    const themeType = useSelector((state: RootState) => state.userPreferences.theme);
    const dispatch = useDispatch();

    const handleThemeChange = (event: React.MouseEvent<HTMLElement>, newTheme: ThemeTypes) => {
        dispatch(updateTheme(newTheme));
    };
   
    return (
        <Wrapper>
            <Label onClick={e => handleThemeChange(e, themeType === ThemeTypes.dark ? ThemeTypes.light : ThemeTypes.dark)}>Theme</Label>
            <ToggleButtonGroup value={themeType} exclusive onChange={handleThemeChange} aria-label="Theme Selection">
                <ToggleButton value={ThemeTypes.dark} aria-label="Dark Theme" title="Dark Theme">
                    <NightsStayIcon />
                </ToggleButton>
                <ToggleButton value={ThemeTypes.light} aria-label="Light Theme" title="Light Theme">
                    <Brightness7Icon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Wrapper>
    );
};

export default ThemeSelector;