import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './config/index';

require('@solana/wallet-adapter-react-ui/styles.css');
require('./index.tailwind.css');

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Router>
        <App />
      </Router>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
