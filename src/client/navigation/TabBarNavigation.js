import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer, StackNavigator } from 'react-navigation'
import { StyleSheet, View, Image, Text } from 'react-native'

import { HomeActiveSvg, HomeInactiveSvg, ResearchActiveSvg, ResearchInactiveSvg, WishListActiveSvg, WishListInactiveSvg, PanierActiveSvg, PanierInactiveSvg, UserActiveSvg, UserInactiveSvg, ActiveIcon } from '../images/tabbar/icons';

import Home from '../screens/Home/Home';
import Concept from '../screens/Home/ConceptScreen';

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
})

const TabBarNavigator = createBottomTabNavigator({
    Accueil: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><HomeActiveSvg /><ActiveIcon /></View>
                : <HomeInactiveSvg style={ styles.wrapperSvg } />
            )
        }
    },
    Research: {
        screen: ResearchStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><ResearchActiveSvg /><ActiveIcon /></View>
                : <ResearchInactiveSvg style={ styles.wrapperSvg } />
            )
        }
    },
    WishList: {
        screen: WishListStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><WishListActiveSvg /><ActiveIcon /></View>
                : <WishListInactiveSvg style={ styles.wrapperSvg }/>
            )
        }
    },
    Panier: {
        screen: PanierStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }>
                    <PanierActiveSvg />
                    <ActiveIcon />
                    <BadgePanier value={0}/>
                </View>
                : <View style={ styles.wrapperPanier }>
                    <PanierInactiveSvg style={ styles.wrapperSvg } />
                    <BadgePanier value={0}/>
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
                : <UserInactiveSvg style={ styles.wrapperSvg } />
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        // paddingBottom: 12,
        // paddingRight: 16,
        // paddingLeft: 16,
        height: 42,
        marginBottom: -6
    },
    wrapperPanier: {
        position: 'relative',
        height: 42,
        paddingTop: 10,
        marginBottom: -6
    }
})

export default AppContainer;