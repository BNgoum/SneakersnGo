import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation'
import { StyleSheet, View, Image } from 'react-native'

import { HomeActiveSvg, HomeInactiveSvg, ResearchActiveSvg, ResearchInactiveSvg, WishListActiveSvg, WishListInactiveSvg, PanierActiveSvg, PanierInactiveSvg, UserActiveSvg, UserInactiveSvg, ActiveIcon } from '../images/tabbar/icons';

import Home from '../screens/Home/Home';
import Concept from '../screens/Home/ConceptScreen';
import ConditionGenerales from '../screens/Home/CG/ConditionsGenerales';
import Objet from '../screens/Home/CG/Objet';
import Articles from '../screens/Home/CG/Articles';
import Commande from '../screens/Home/CG/Commande';
import Usage from '../screens/Home/CG/Usage';
import DonneesPersonnelles from '../screens/Home/CG/DonneesPersonnelles';
import RetractationAnnulation from '../screens/Home/CG/RetractationAnnulation';
import ProprieteIntellectuelle from '../screens/Home/CG/ProprieteIntellectuelle';

import MentionsLegales from '../screens/Home/MentionsLegales';

import Research from '../screens/Research/Research';
import SuccessSend from '../screens/Research/SuccessSend';
import ResearchSneakers from '../screens/Research/ResearchSneakers';
import DetailsSneakers from '../screens/Research/DetailsSneakers';
import Filters from '../screens/Research/Filters/Filters';
import Genre from '../screens/Research/Filters/Genre';

import WishList from '../screens/WishList/WishList';

import Panier from '../screens/Panier/Panier';
import BadgePanier from '../components/Style/BadgePanier';

import Connexion from '../screens/User/Connexion';
import Inscription from '../screens/User/Inscription';
import HomeUser from '../screens/User/HomeUser';
import Profil from '../screens/User/Profil';
import ChangePassword from '../screens/User/ChangePassword';
import MesCommandes from '../screens/User/MesCommandes';
import CarnetAdresses from '../screens/User/CarnetAdresses';
import DetailsAdresse from '../screens/User/DetailsAdresse';
import DetailsCommande from '../screens/User/DetailsCommande';

import HomeBackOffice from '../screens/backoffice/Home';
import AddBrands from '../screens/backoffice/AddBrands';
import AddModels from '../screens/backoffice/AddModels';
import AddSneakers from '../screens/backoffice/AddSneakers';
import AllSneakers from '../screens/backoffice/AllSneakers';

class Logo extends React.Component {
    render() {
      return (
          <View style={{display: 'flex', alignItems: 'center', flex: 1}}>
              <Image source={require('../images/logo.png')} style={{ 
                aspectRatio: 6, 
                resizeMode: 'contain' }} />
          </View>
            
      );
    }
}

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null,
        }
    },
    Concept: {
        screen: Concept,
        navigationOptions: {
            headerTitle: <Logo />,
            
        }
    },
    ConditionGenerales: {
        screen: ConditionGenerales,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null,
        }
    },
    Objet: {
        screen: Objet,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    },
    Articles: {
        screen: Articles,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    },
    Commande: {
        screen: Commande,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    },
    Usage: {
        screen: Usage,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    },
    DonneesPersonnelles: {
        screen: DonneesPersonnelles,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    },
    RetractationAnnulation: {
        screen: RetractationAnnulation,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    },
    ProprieteIntellectuelle: {
        screen: ProprieteIntellectuelle,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    },
    MentionsLegales: {
        screen: MentionsLegales,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    },
})

const ResearchStack = createStackNavigator({
    Research : {
        screen: Research,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null,
        }
    },
    DetailsSneakers : {
        screen: DetailsSneakers,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    },
    SuccessSend : {
        screen: SuccessSend,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    },
    ResearchSneakers: {
        screen: ResearchSneakers,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    },
    Filters: {
        screen: Filters,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null,
        }
    },
    Genre: {
        screen: Genre,
        navigationOptions: {
            headerTitle: <Logo />,
        }
    }
})

const WishListStack = createStackNavigator({
    WishList : {
        screen: WishList,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null,
        }
    }
})

const PanierStack = createStackNavigator({
    Panier : {
        screen: Panier,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null,
        }
    }
})

const UserStack = createStackNavigator({
    Connexion: {
        screen: Connexion,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null,
        }
    },
    Inscription: {
        screen: Inscription,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null,
        }
    },
    HomeUser: {
        screen: HomeUser,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null,
        }
    },
    Profil: {
        screen: Profil,
        navigationOptions: {
            headerTitle: <Logo />
        }
    },
    ChangePassword: {
        screen: ChangePassword,
        navigationOptions: {
            headerTitle: <Logo />
        }
    },
    MesCommandes: {
        screen: MesCommandes,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null,
        }
    },
    CarnetAdresses: {
        screen: CarnetAdresses,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null,
        }
    },
    DetailsAdresse: {
        screen: DetailsAdresse,
        navigationOptions: {
            headerTitle: <Logo />
        }
    },
    DetailsCommande: {
        screen: DetailsCommande,
        navigationOptions: {
            headerTitle: <Logo />
        }
    },
    HomeBackOffice: {
        screen: HomeBackOffice,
        navigationOptions: {
            headerTitle: <Logo />
        }
    },
    AddBrands: {
        screen: AddBrands,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null
        }
    },
    AddModels: {
        screen: AddModels,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null
        }
    },
    AddSneakers: {
        screen: AddSneakers,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null
        }
    },
    AllSneakers: {
        screen: AllSneakers,
        navigationOptions: {
            headerTitle: <Logo />,
            headerBackTitle: null
        }
    },
})

const TabBarNavigator = createBottomTabNavigator(
{
    Accueil: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><HomeActiveSvg /><ActiveIcon /></View>
                : <View style={ styles.wrapperSvg }><HomeInactiveSvg /></View>
            )            
        }
    },
    Research: {
        screen: ResearchStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><ResearchActiveSvg /><ActiveIcon /></View>
                : <View style={ styles.wrapperSvg }><ResearchInactiveSvg /></View>
            ),
            tabBarOnPress({ navigation, defaultHandler }) {
                navigation.navigate('Research')
                defaultHandler();
              }
        }
    },
    WishList: {
        screen: WishListStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><WishListActiveSvg /><ActiveIcon /></View>
                : <View style={ styles.wrapperSvg }><WishListInactiveSvg /></View>
            )
        }
    },
    Panier: {
        screen: PanierStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperPanier }>
                    <PanierActiveSvg />
                    <ActiveIcon />
                    <BadgePanier />
                </View>
                : <View style={ styles.wrapperPanier }>
                    <PanierInactiveSvg />
                    <BadgePanier />
                </View>
            )
        }
    },
    User: {
        screen: UserStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><UserActiveSvg /><ActiveIcon style={ styles.activeIcon }/></View>
                : <View style={ styles.wrapperSvg }><UserInactiveSvg /></View>
            )
        }
    }
},
    {
        tabBarOptions : {
            showLabel: false,
            showIcon: true
        }
    }
)

const AppContainer = createAppContainer(TabBarNavigator);

const styles = StyleSheet.create({
    wrapperSvg: {
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        height: 42,
        marginBottom: -6,
        overflow: 'hidden'
    },
    wrapperOverlow: {
        overflow: 'hidden'
    },
    wrapperPanier: {
        position: 'relative',
        height: 42,
        width: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingHorizontal: 10,
        marginBottom: -6,
        overflow: 'hidden'
    }
})

export default AppContainer;