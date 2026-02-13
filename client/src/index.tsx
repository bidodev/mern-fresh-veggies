import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';

/* React Router Dom */
import { BrowserRouter as Router } from 'react-router-dom';

/* Redux Imports */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

/* Fontawesome Import */
import './lib/icons';

/* Root APP Imports */
import App from './App';
import './scss/index.scss';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>
);

serviceWorker.register(undefined);
