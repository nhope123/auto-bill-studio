import { Grid2, SxProps, Theme } from '@mui/material';
import { FC } from 'react';
import Header from './components/Header/Header';
import useCreatedRoutes from './useCreatedRoutes';

const rootSx: SxProps<Theme> = {
  flexDirection: 'column',
  height: '100%',
  width: '100%',
};

const mainSx: SxProps<Theme> = {
  flexGrow: 1,
  flexShrink: 1,
  backgroundColor: 'lightgreen',
};

const App: FC = () => {
  const routesElement = useCreatedRoutes();

  return (
    <Grid2 container sx={rootSx}>
      <Header />
      <Grid2  sx={mainSx}>
        {routesElement}
      </Grid2>
    </Grid2>
  );
};

export default App;
