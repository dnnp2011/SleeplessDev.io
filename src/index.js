import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import WebFont from 'webfontloader';
import App from './app.component';
import './index.css';
import portalApp from './reducers';
import registerServiceWorker from './registerServiceWorker';


WebFont.load({ google: { families: ['Barlow:300,400,400i,500,600,700'] } });


const store = createStore(portalApp);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
