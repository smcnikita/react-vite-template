import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import { BrowserRouterProvider, RootStoreContextProvider } from '@/modules/providers';

// Locales
import './locales';

// Styles
import './assets/global.css';

ReactDOM.createRoot(document.getElementById('app-root')!).render(
  <React.StrictMode>
    <RootStoreContextProvider>
      <BrowserRouterProvider>
        <App />
      </BrowserRouterProvider>
    </RootStoreContextProvider>
  </React.StrictMode>
);
