import { FC, useCallback, useState } from 'react';
import { MobileMenuProps } from './types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { SxProps, Theme } from '@mui/material/styles';

const rootSx: SxProps<Theme> = {
  flexGrow: 1,
  display: { xs: 'flex', md: 'none' },
};

const MobileMenu: FC<MobileMenuProps> = (props: MobileMenuProps) => {
  const { children, onClose } = props;

  const [navAnchorEl, setNavAnchorEl] = useState<HTMLButtonElement | null>(null);

  const _handleToggleNavMenu = useCallback(() => {
    setNavAnchorEl(null);
    onClose();
  }, []);
  
  return (
    <Box sx={rootSx}>
      <IconButton
        size="large"
        aria-label="mobile menu button"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => setNavAnchorEl((p) => !p ? e.currentTarget : null)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={navAnchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(navAnchorEl)}
        onClose={() => _handleToggleNavMenu()}
      >
        {children}
      </Menu>
    </Box>
  );
};

export default MobileMenu;
