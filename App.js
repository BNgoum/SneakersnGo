import React from 'react';
import { Font } from 'expo';

import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/client/store/configureStore'

import Navigation from './src/client/navigation/TabBarNavigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  };

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
        <View style={ { flex: 1 } }>
          <StatusBar barStyle="dark-content" translucent={true} />
          <Navigation />
        </View>
        
      </Provider>
      
    );
  }
}
