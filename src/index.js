import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import MainLayout from './ui/layouts/MainLayout';
import './api/globalStyles';
import client from './api/apollo/client';
import { store, persistor } from './api/redux/store';

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={client}>
        <MainLayout {...this.props} />
      </ApolloProvider>
    </PersistGate>
  </ReduxProvider>,
  document.getElementById('root')
);
registerServiceWorker();