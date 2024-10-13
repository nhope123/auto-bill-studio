import { CarRepairRounded } from '@mui/icons-material';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const rootSx: SxProps<Theme> = {
  alignItems: 'center',
  columnGap: 1,
  display: 'flex',
};

const APP_NAME = 'AutoBill Studio';
const HOME_PATH = '/dashboard';

const Branding: FC = () => {
  const navigate = useNavigate();

  const _handleClick = useCallback(() => navigate(HOME_PATH), []);

  return (
    <Box sx={rootSx}>
      <CarRepairRounded />
      <Typography
        noWrap
        onClick={_handleClick}
        sx={{ color: 'inherit', textDecoration: 'none' }}
        variant="h6"
      >
        {APP_NAME}
      </Typography>
    </Box>
  );
};

export default Branding;
