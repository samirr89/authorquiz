import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './bootstrap.min.css'
import App from './components/App'
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from './redux/configureStore';
import {Provider as ReduxProvider} from 'react-redux'
const store=configureStore();
  ReactDOM.render(
    <React.StrictMode>
      <ReduxProvider store={store}>
      <Router>
        <App  />
      </Router>
      </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );

serviceWorker.unregister();
