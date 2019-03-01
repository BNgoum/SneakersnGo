import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class CaracteristiquesSneakers extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.keyStyle }>{ this.props.caracteristiqueKey }</Text>
                <Text style={ styles.valueStyle }>{ this.props.value.toUpperCase() }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    keyStyle: {
        color: '#9b9b9b',
        fontSize: 10,
        letterSpacing: 1,
        fontFamily: 'brawler-regular',
        width: 75
    },
    valueStyle: {
        color: '#070e37',
        fontSize: 10,
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
    }
})