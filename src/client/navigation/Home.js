import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '../screens/Home/Home';
import Concept from '../screens/Home/ConceptScreen';

const NavigatorStack = createStackNavigator({
    // Home: {
    //     screen: Home,
    //     navigationOptions: {
    //         title: 'SNEAKERS AND GO'
    //     }
    // },
    Concept: {
        screen: Concept,
        navigationOptions: {
            title: 'SNEAKERS AND GO'
        }
    },
    
})

const AppContainer = createAppContainer(NavigatorStack);

export default AppContainer;