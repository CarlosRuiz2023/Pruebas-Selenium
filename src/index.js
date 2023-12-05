import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './app/store';

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/@popperjs/core/dist/umd/popper.min.js";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);