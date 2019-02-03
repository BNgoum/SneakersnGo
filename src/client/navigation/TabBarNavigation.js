import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { StyleSheet, View } from 'react-native'

import { HomeActiveSvg, HomeInactiveSvg, ResearchActiveSvg, ResearchInactiveSvg, WishListActiveSvg, WishListInactiveSvg, ChatActiveSvg, ChatInactiveSvg, UserActiveSvg, UserInactiveSvg, ActiveIcon } from '../images/tabbar/icons';

import Home from '../screens/Home/Home';
import Concept from '../screens/Home/ConceptScreen';
import Research from '../screens/Research/Research';
import DetailsSneakers from '../screens/Research/DetailsSneakers';
import WishList from '../screens/WishList/WishList';
import Chat from '../screens/Chat/Chat';
import User from '../screens/User/User';


const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'SNEAKERS AND GO'
        }
    },
    Concept: {
        screen: Concept,
        navigationOptions: {
            title: 'SNEAKERS AND GO'
        }
    },
    
})

const ResearchStack = createStackNavigator({
    Research : {
        screen: Research,
        navigationOptions: {
            title: 'SNEAKERS AND GO'
        }
    },
    DetailsSneakers : {
        screen: DetailsSneakers,
        navigationOptions: {
            title: 'SNEAKERS AND GO'
        }
    }
})

const WishListStack = createStackNavigator({
    WishList : {
        screen: WishList,
        navigationOptions: {
            title: 'SNEAKERS AND GO'
        }
    }
})

const ChatStack = createStackNavigator({
    Chat : {
        screen: Chat,
        navigationOptions: {
            title: 'SNEAKERS AND GO'
        }
    }
})

const UserStack = createStackNavigator({
    User : {
        screen: User,
        navigationOptions: {
            title: 'SNEAKERS AND GO'
        }
    }
})

const TabBarNavigator = createBottomTabNavigator({
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