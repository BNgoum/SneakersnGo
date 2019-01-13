import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '../screens/Home/Home';

const NavigatorStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Accueil'
        }
    }
    
})

const AppContainer = createAppContainer(NavigatorStack);

export default AppContainer;