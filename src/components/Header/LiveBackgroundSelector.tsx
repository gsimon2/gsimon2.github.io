import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateLiveBackground } from '../../redux/userPreferencesSlice';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LiveBackgroundSelector: React.FC = () => {
    const isEnabled = useSelector((state: RootState) => state.userPreferences.liveBackground);
    const dispatch = useDispatch();

    const handleSettingsChange = (event: React.MouseEvent<HTMLElement>, newSetting: boolean) => {
        dispatch(updateLiveBackground(newSetting));
    };
   
    return (
        <Wrapper>
            <span>Live Background</span>
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