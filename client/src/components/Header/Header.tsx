import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { SxProps, Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { MouseEvent } from 'react';
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

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={toolbarSx}>
          {/* Mobile Menu */}
          <MobileMenu onClose={() => ({})}>
            <AppMenu
              handleClick={function (
                event: MouseEvent<HTMLButtonElement>
              ): void {
                throw new Error('Function not implemented.');
              }}
            />
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
              <AppMenu
                handleClick={function (
                  event: MouseEvent<HTMLButtonElement>
                ): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Box>

            <UserMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
