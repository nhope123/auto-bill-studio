import Button from '@mui/material/Button';
import { FC, MouseEvent, useCallback } from 'react';
import { matchPath, useLocation, useMatch, useNavigate } from 'react-router';
import { AppMenuProps } from './types';
import { SxProps, Theme } from '@mui/material/styles';

const buttonSx: SxProps<Theme> = {
  display: 'block',
  color: 'text.primary',
  width: { xs: '100%', md: 'unset' },
  textAlign: { xs: 'left', md: 'center' },
  pl: { xs: 3, md: 1 },
}

const pages = ['Dashboard', 'Import', 'Invoice'];

const AppMenu: FC<AppMenuProps> = (props: AppMenuProps) => {
  const { handleClick } = props;

  const navigate = useNavigate();
  const { pathname} = useLocation();

  const _handleBtnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>, path: string) => {
      handleClick?.(e);
      navigate(path);
    },
    []
  );

  const isActiveRoute = useCallback((page: string) => {
    const match = matchPath(pathname, `/${page.toLowerCase()}`);
    
    return match ? true : false;
  }, [pathname]);

  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={(e) => _handleBtnClick(e, `/${page.toLowerCase()}`)}
          size="medium"
          sx={{ 
            ...buttonSx,
            backgroundColor: isActiveRoute(page) ? 'primary.main' : 'inherit',
            border: isActiveRoute(page) ? (theme) => `1px solid ${theme.palette.primary.contrastText}` : 'none',
            color: isActiveRoute(page) ? 'primary.contrastText' : 'text.primary',
          }}
          
        >
          {page}
        </Button>
      ))}
    </>
  );
};

export default AppMenu;
