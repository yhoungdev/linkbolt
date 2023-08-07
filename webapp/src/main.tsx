// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Router } from 'react-chrome-extension-router';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { NovuProvider } from '@novu/notification-center';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NovuProvider
          applicationIdentifier='7fSS0c2QxlKD'
          subscriberId=''
          initialFetchingStrategy={{
            fetchNotifications: true,
            fetchUserPreferences: true,
          }}
        >
          <SkeletonTheme baseColor='#202020' highlightColor='#444'>
            <App />
          </SkeletonTheme>
        </NovuProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
