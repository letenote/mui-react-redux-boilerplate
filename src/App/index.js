import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Config/theme';

const Routes = lazy(() => import('../Routes'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={'loading App'}>
        <Routes />
      </Suspense>
    </ThemeProvider>
  )
}

export default App;