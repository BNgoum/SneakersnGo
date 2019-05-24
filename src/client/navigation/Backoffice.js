import { createDrawerNavigator, createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from '../screens/backoffice/Home';
import AddBrands from '../screens/backoffice/AddBrands';
import AddModels from '../screens/backoffice/AddModels';
import AddSneakers from '../screens/backoffice/AddSneakers';
import AllSneakers from '../screens/backoffice/AllSneakers';

const NavigatorStack = createStackNavigator({
    AllSneakers: {
        screen: AllSneakers,
        navigationOptions: {
            title: 'Les Sneakers'
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Dashboard"
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
    AddSneakers: {
        screen: AddSneakers,
        navigationOptions: {
            title: 'Les Sneakers'
        }
    },
    
})

const AddBrandsStack = createStackNavigator({
    AddBrands: {
        screen: AddBrands,
        navigationOptions: {
            title: 'Les marques'
        }
    }
})

const Drawer = createDrawerNavigator({
    Dashboard: { screen: NavigatorStack },
    'Nouvelle Sneaker': { screen: AddBrandsStack }
})

// const AppContainer = createAppContainer(Drawer);


// export default AppContainer;

export default createAppContainer(createSwitchNavigator(
    {
        NavigatorStack: NavigatorStack
    }
));