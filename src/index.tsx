import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { GlobalStyle } from './components/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
