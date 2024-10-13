import Button from '@mui/material/Button';
import { FC, useCallback, MouseEvent } from 'react';
import { AppMenuProps } from './types';
import { useMatch, useNavigate } from 'react-router';

const pages = ['Dashboard', 'Import', 'Invoice'];

const AppMenu: FC<AppMenuProps> = (props: AppMenuProps) => {
  const { handleClick } = props;

  const navigate = useNavigate();
  // const match = useMatch

  const _handleBtnClick = useCallback((
    e: MouseEvent<HTMLButtonElement>, 
    path: string
  ) => { 
    handleClick?.(e);
    navigate(path);
  }, []);

  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={(e) => _handleBtnClick(e, `/${page.toLowerCase()}`)}
          sx={{ display: 'block', color: 'text.primary', width: { xs: '100%', md: 'unset' }, textAlign: { xs: 'left', md: 'center'}, pl: { xs: 3, md: 0 } }}
        >
          {page}
        </Button>
      ))}
    </>
  );
};

export default AppMenu;
