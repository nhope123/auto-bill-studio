import { Grid2, SxProps, Theme } from '@mui/material';
import { FC } from 'react';

const rootSx: SxProps<Theme> = {
  height: '100%',
  width: '100%',
};

const App: FC = () => {
  return (
    <Grid2 container sx={rootSx}>
      App Place Holder
    </Grid2>
  );
};

export default App;
