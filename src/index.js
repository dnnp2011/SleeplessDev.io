// Apollo and GraphQL
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import WebFont from 'webfontloader';
import App from './app.component';
import { BackendUrl } from './helpers/Const';
import './index.css';
import portalApp from './reducers';
import registerServiceWorker from './registerServiceWorker';


WebFont.load({ google: { families: [ 'Barlow:300,400,400i,500,600,700' ] } });

const store = createStore(portalApp);

const cache = new InMemoryCache();
const storage = window.localStorage;

const client = new ApolloClient({
  link: new ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: BackendUrl,
      credentials: 'same-origin'
    })
  ]),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first'
    }
  }
});
const waitOnCache = persistCache({
  cache,
  storage
});

waitOnCache.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </Provider>,
    document.getElementById('root')
  );
});
registerServiceWorker();