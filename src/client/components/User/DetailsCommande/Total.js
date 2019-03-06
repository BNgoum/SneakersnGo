import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Total extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.textNormal }>{ "Total".toUpperCase() }</Text>
                <Text style={ styles.textNormal }>{ this.props.total.toUpperCase() }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textNormal: {
        fontSize: 18,
        fontFamily: 'roboto-bold',
        letterSpacing: 1,
        color: '#070e37',
    },
})