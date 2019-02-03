import React from 'react';
import { Font } from 'expo';

import { Provider } from 'react-redux';
import Store from './src/client/store/configureStore'

import Navigation from './src/client/navigation/Navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  async componentDidMount() {
    await Font.loadAsync({
      'roboto-bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
      'roboto-regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
      'brawler-regular': require('./assets/fonts/Brawler-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      this.state.fontLoaded &&
      <Provider store={Store}>
        <Navigation />
      </Provider>
      
    );
  }
}
