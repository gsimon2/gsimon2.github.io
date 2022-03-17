import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateLiveBackground } from '../../redux/userPreferencesSlice';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Label = styled.label`
    cursor: pointer;
`;

const LiveBackgroundSelector: React.FC = () => {
    const isEnabled = useSelector((state: RootState) => state.userPreferences.liveBackground);
    const dispatch = useDispatch();

    const handleSettingsChange = (event: React.MouseEvent<HTMLElement>, newSetting: boolean) => {
        dispatch(updateLiveBackground(newSetting));
    };
   
    return (
        <Wrapper>
            <Label onClick={e => handleSettingsChange(e, !isEnabled)}>Live Background</Label>
            <ToggleButtonGroup value={isEnabled} exclusive onChange={handleSettingsChange} aria-label="Live Background Selection">
                <ToggleButton value={false} aria-label="Disabled" title="Disabled">
                    <CloseIcon />
                </ToggleButton>
                <ToggleButton value={true} aria-label="Enabled" title="Enabled">
                    <CheckIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Wrapper>
    );
};

export default LiveBackgroundSelector;