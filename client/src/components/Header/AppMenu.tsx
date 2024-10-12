import Button from '@mui/material/Button';
import { FC } from 'react';
import { AppMenuProps } from './types';

const pages = ['Dashboard', 'Import', 'Invoice'];

const AppMenu: FC<AppMenuProps> = (props: AppMenuProps) => {
  const { handleClick } = props;

  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleClick} // add selected menu action
          sx={{ display: 'block', color: 'text.primary' }}
        >
          {page}
        </Button>
      ))}
    </>
  );
};

export default AppMenu;
