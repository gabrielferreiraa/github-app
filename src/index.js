'use strict';

import { render } from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import App from './app';
import './style.css';

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    renderApp(NextApp);
  });
}
