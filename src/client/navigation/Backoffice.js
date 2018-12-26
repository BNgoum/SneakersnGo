import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Text, View, Icon, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home from '../screens/backoffice/Home';
import AddBrands from '../screens/backoffice/AddBrands';
import AddModels from '../screens/backoffice/AddModels';
import SomeScreen from '../screens/backoffice/SomeScreen';

const NavigatorStack = createStackNavigator({
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
    'Nouvelle marque': { screen: AddBrandsStack }
})

const AppContainer = createAppContainer(Drawer);


export default AppContainer;