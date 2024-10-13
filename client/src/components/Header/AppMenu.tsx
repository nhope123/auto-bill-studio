import Button from '@mui/material/Button';
import { FC, MouseEvent, useCallback } from 'react';
import { matchPath, useLocation, useMatch, useNavigate } from 'react-router';
import { AppMenuProps } from './types';

const pages = ['Dashboard', 'Import', 'Invoice'];

const AppMenu: FC<AppMenuProps> = (props: AppMenuProps) => {
  const { handleClick } = props;

  const navigate = useNavigate();
  const { pathname} = useLocation();
  // const match = useMatch

  const _handleBtnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>, path: string) => {
      handleClick?.(e);
      navigate(path);
    },
    []
  );

  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={(e) => _handleBtnClick(e, `/${page.toLowerCase()}`)}
          size="medium"
          sx={{
            display: 'block',
            color: 'text.primary',
            width: { xs: '100%', md: 'unset' },
            textAlign: { xs: 'left', md: 'center' },
            pl: { xs: 3, md: 1 },
          }}
          color={matchPath(`/${page.toLowerCase()}`, pathname) ? 'primary' : 'inherit'}
        >
          {page}
        </Button>
      ))}
    </>
  );
};

export default AppMenu;
