import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Circle extends Component {

    render() {
        return (
            <View style={ styles.circle }></View>
        )
    }
}

const styles = StyleSheet.create({
    circle: {
        width: 6,
        height: 6,
        borderRadius: 50,
        backgroundColor: '#ea2300',
        marginRight: 8,
        marginLeft: 8,
    }
})
