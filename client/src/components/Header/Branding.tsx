import { CarRepairRounded } from '@mui/icons-material';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { FC } from 'react';

const rootSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  columnGap: 1,
};

const APP_NAME = 'AutoBill Studio';

const Branding: FC = () => {
  
  return (
    <Box sx={rootSx}>
      <CarRepairRounded  />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/" // add href to the dashboard
          sx={{ color: 'inherit', textDecoration: 'none' }}
        >
          {APP_NAME}
        </Typography>
    </Box>
  );
};

export default Branding;
