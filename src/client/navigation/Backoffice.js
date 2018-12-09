import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '../screens/backoffice/Home';
import AddBrands from '../screens/backoffice/AddBrands';
import AddModels from '../screens/backoffice/AddModels';

const NavigatorStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Accueil'
        }
    },
    AddBrands: {
        screen: AddBrands,
        navigationOptions: {
            title: 'Les marques'
        }
    },
    AddModels: {
        screen: AddModels,
        navigationOptions: {
            title: 'Les modèles'
        }
    },
    
})

const AppContainer = createAppContainer(NavigatorStack);

export default AppContainer;