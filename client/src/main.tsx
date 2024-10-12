import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme } from '@mui/material';

const theme = createTheme({});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <App />
  </StrictMode>
);
