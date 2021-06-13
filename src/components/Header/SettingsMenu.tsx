import React from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import SettingsIcon from '@material-ui/icons/Settings';
import ThemeSelector from './ThemeSelector';
import { useMediaQuery } from '@material-ui/core';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 0.5rem;
    height: 100%;
`;

const MenuContainer = styled.div`   
    width: 12.5rem;
    padding: 0.5rem;
    box-sizing: border-box;
`;

const SettingsMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const isDesktopView = useMediaQuery('(min-width:650px)');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'settings-popover' : undefined;

  return (
    <Wrapper>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick} startIcon={<SettingsIcon />} title="Settings">
            {isDesktopView && "Settings"}
        </Button>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        >
            <MenuContainer>
                <ThemeSelector />
            </MenuContainer>
        </Popover>
    </Wrapper>
  );
};

export default SettingsMenu;