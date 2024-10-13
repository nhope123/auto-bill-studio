import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { SxProps, Theme } from '@mui/material/styles';
import { FC, useCallback, useRef, useState } from 'react';
import { MobileMenuProps } from './types';

const menuSx: SxProps<Theme> = {
  // minWidth: '200px',
};
const rootSx: SxProps<Theme> = {
  flexGrow: 1,
  display: { xs: 'flex', md: 'none' },
};

const MobileMenu: FC<MobileMenuProps> = (props: MobileMenuProps) => {
  const { children, onClose, open } = props;

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // const [navAnchorEl, setNavAnchorEl] = useState<HTMLButtonElement | null>(
  //   null
  // );

  const _handleToggleNavMenu = useCallback(() => {
    setNavAnchorEl(null);
    onClose();
  }, []);

  return (
    <Box sx={rootSx}>
      <IconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        aria-label="mobile menu button"
        color="inherit"
        onClick={(e) => setNavAnchorEl((p) => (!p ? e.currentTarget : null))}
        size="large"
        ref={}
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
        onClose={() => _handleToggleNavMenu()}
        slotProps={{
          paper: { sx: { minWidth: '200px' } },
        }}
        sx={menuSx}
      >
        {children}
      </Menu>
    </Box>
  );
};

export default MobileMenu;
