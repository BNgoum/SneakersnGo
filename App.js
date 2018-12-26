import React from 'react';

import { Provider } from 'react-redux';
import Store from './src/client/store/configureStore'

import Navigation from './src/client/navigation/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}
