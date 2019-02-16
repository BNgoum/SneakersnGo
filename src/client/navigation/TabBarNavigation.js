import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { StyleSheet, View, Image } from 'react-native'

import { HomeActiveSvg, HomeInactiveSvg, ResearchActiveSvg, ResearchInactiveSvg, WishListActiveSvg, WishListInactiveSvg, ChatActiveSvg, ChatInactiveSvg, UserActiveSvg, UserInactiveSvg, ActiveIcon } from '../images/tabbar/icons';

import Home from '../screens/Home/Home';
import Concept from '../screens/Home/ConceptScreen';

import Research from '../screens/Research/Research';
import SuccessSend from '../screens/Research/SuccessSend';
import ResearchSneakers from '../screens/Research/ResearchSneakers';
import DetailsSneakers from '../screens/Research/DetailsSneakers';
import Filters from '../screens/Research/Filters/Filters';
import Genre from '../screens/Research/Filters/Genre';

import WishList from '../screens/WishList/WishList';

import Chat from '../screens/Chat/Chat';

import Connexion from '../screens/User/Connexion';
import Inscription from '../screens/User/Inscription';
import HomeUser from '../screens/User/HomeUser';
import Profil from '../screens/User/Profil';
import ChangePassword from '../screens/User/ChangePassword';
import MesCommandes from '../screens/User/MesCommandes';
import CarnetAdresses from '../screens/User/CarnetAdresses';
import DetailsAdresse from '../screens/User/DetailsAdresse';


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
            headerTitle: <Logo></Logo>,
            headerBackTitle: null,
        }
    },
    Concept: {
        screen: Concept,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
            
        }
    },
    
})

const ResearchStack = createStackNavigator({
    Research : {
        screen: Research,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
            headerBackTitle: null,
        }
    },
    DetailsSneakers : {
        screen: DetailsSneakers,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
        }
    },
    SuccessSend : {
        screen: SuccessSend,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
        }
    },
    ResearchSneakers: {
        screen: ResearchSneakers,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
        }
    },
    Filters: {
        screen: Filters,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
            headerBackTitle: null,
        }
    },
    Genre: {
        screen: Genre,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
        }
    }
})

const WishListStack = createStackNavigator({
    WishList : {
        screen: WishList,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
            headerBackTitle: null,
        }
    }
})

const ChatStack = createStackNavigator({
    Chat : {
        screen: Chat,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
            headerBackTitle: null,
        }
    }
})

const UserStack = createStackNavigator({
    Connexion: {
        screen: Connexion,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
            headerBackTitle: null,
        }
    },
    Inscription: {
        screen: Inscription,
        navigationOptions: {
            headerTitle: <Logo></Logo>
        }
    },
    HomeUser: {
        screen: HomeUser,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
            headerBackTitle: null,
        }
    },
    Profil: {
        screen: Profil,
        navigationOptions: {
            headerTitle: <Logo></Logo>
        }
    },
    ChangePassword: {
        screen: ChangePassword,
        navigationOptions: {
            headerTitle: <Logo></Logo>
        }
    },
    MesCommandes: {
        screen: MesCommandes,
        navigationOptions: {
            headerTitle: <Logo></Logo>
        }
    },
    CarnetAdresses: {
        screen: CarnetAdresses,
        navigationOptions: {
            headerTitle: <Logo></Logo>,
            headerBackTitle: null,
        }
    },
    DetailsAdresse: {
        screen: DetailsAdresse,
        navigationOptions: {
            headerTitle: <Logo></Logo>
        }
    },
})

const TabBarNavigator = createBottomTabNavigator({
    Accueil: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><HomeActiveSvg></HomeActiveSvg><ActiveIcon></ActiveIcon></View>
                : <View style={ styles.wrapperSvg }><HomeInactiveSvg></HomeInactiveSvg></View>
            )
        }
    },
    Research: {
        screen: ResearchStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><ResearchActiveSvg></ResearchActiveSvg><ActiveIcon></ActiveIcon></View>
                : <View style={ styles.wrapperSvg }><ResearchInactiveSvg></ResearchInactiveSvg></View>
            )
        }
    },
    WishList: {
        screen: WishListStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><WishListActiveSvg></WishListActiveSvg><ActiveIcon></ActiveIcon></View>
                : <View style={ styles.wrapperSvg }><WishListInactiveSvg></WishListInactiveSvg></View>
            )
        }
    },
    Chat: {
        screen: ChatStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><ChatActiveSvg></ChatActiveSvg><ActiveIcon></ActiveIcon></View>
                : <View style={ styles.wrapperSvg }><ChatInactiveSvg></ChatInactiveSvg></View>
            )
        }
    },
    User: {
        screen: UserStack,
        navigationOptions: {
            tabBarIcon: ({ focused }) =>  (
                focused
                ? <View style={ styles.wrapperSvg }><UserActiveSvg></UserActiveSvg><ActiveIcon></ActiveIcon></View>
                : <View style={ styles.wrapperSvg }><UserInactiveSvg></UserInactiveSvg></View>
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
    activeIcon: {
    }
})

export default AppContainer;