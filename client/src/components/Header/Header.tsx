import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { SxProps, Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { MouseEvent, useState } from 'react';
import AppMenu from './AppMenu';
import Branding from './Branding';
import MobileMenu from './MobileMenu';
import UserMenu from './UserMenu';

const toolbarSx: SxProps<Theme> = {
  // display: { xs: 'none', md: 'flex' },
};

const rightAppBarSx: SxProps<Theme> = {
  display: 'flex',
  columnGap: 2,
  justifyContent: 'flex-end',
  flexGrow: 1,
  flexShrink: 1,
};

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={toolbarSx}>
          {/* Mobile Menu */}
          <MobileMenu
            handleClick={() => setOpenMobileMenu(true)}
            onClose={() => setOpenMobileMenu(false)}
            open={openMobileMenu}
          >
            <AppMenu handleClick={() => setOpenMobileMenu(false)} />
          </MobileMenu>

          {/* Logo set up */}
          <Branding />

          {/* horizontal menu and Avatar */}
          <Box sx={rightAppBarSx}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
              }}
            >
              <AppMenu />
            </Box>

            <UserMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
