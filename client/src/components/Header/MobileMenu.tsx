import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { SxProps, Theme } from '@mui/material/styles';
import { FC, useRef } from 'react';
import { MobileMenuProps } from './types';

const rootSx: SxProps<Theme> = {
  flexGrow: 1,
  display: { xs: 'flex', md: 'none' },
};

const MobileMenu: FC<MobileMenuProps> = (props: MobileMenuProps) => {
  const { children, handleClick, onClose, open } = props;

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Box sx={rootSx}>
      <IconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        aria-label="mobile menu button"
        color="inherit"
        onClick={handleClick}
        size="large"
        ref={buttonRef}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={buttonRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={open}
        onClose={onClose}
        slotProps={{
          paper: { sx: { minWidth: '200px' } },
        }}
      >
        {children}
      </Menu>
    </Box>
  );
};

export default MobileMenu;
