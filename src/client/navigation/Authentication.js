import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

import Inscription from '../screens/authentication/Inscription';
import Connexion from '../screens/authentication/Connexion';

const ConnexionStack = createStackNavigator({
    Connexion: {
        screen: Connexion,
        navigationOptions: {
            title: 'Connexion'
        }
    },
    
})

const InscriptionStack = createStackNavigator({
    Inscription: {
        screen: Inscription,
        navigationOptions: {
            title: 'Inscription'
        }
    }
})

export default createAppContainer(createSwitchNavigator(
    {
      Connexion: ConnexionStack,
      Inscription: InscriptionStack,
    }
));