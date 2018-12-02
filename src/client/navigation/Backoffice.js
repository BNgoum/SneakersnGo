import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from '../screens/backoffice/Home';
import AddSneakers from '../screens/backoffice/AddSneakers';
// import Connexion from '../screens/authentication/Connexion';

const NavigatorStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Accueil'
        }
    },
    AddSneakers: {
        screen: AddSneakers,
        navigationOptions: {
            title: 'Ajouter des sneakers'
        }
    },
    
})

const AppContainer = createAppContainer(NavigatorStack);

export default AppContainer;

const styles = StyleSheet.create({
    wrapperAuth: {
        display: 'flex',
        flex: 1,
    },
    
})