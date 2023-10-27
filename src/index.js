import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/RegistryFront">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
