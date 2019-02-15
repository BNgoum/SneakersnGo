import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Badge extends Component {
    render() {
        return (
            <View style={ [styles.wrapperBadge, this.props.addedStyle] }>
                <Text style={ styles.badge }>+{this.props.numberBadge}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperBadge: {
        width: 24,
        height: 24,
        backgroundColor: '#070e37',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    badge: {
        color: "#fff",
        fontFamily: 'roboto-bold',
        fontSize: 15,
        letterSpacing: 1
    }
})