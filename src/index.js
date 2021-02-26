import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      ,
    </Provider>
    document.getElementById('root')
  </Fragment>
);
