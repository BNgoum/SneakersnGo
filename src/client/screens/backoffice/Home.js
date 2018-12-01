import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>Hello Admin !</Text>
                <Button onPress={() => this.props.navigation.navigate('AddSneakers')} title="Ajouter une paire"/>
            </View>
        )
    }
}