import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Footer extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.wrapperText }>
                    <Text style={ styles.keyStyle }>{ "Total : ".toUpperCase() }</Text>
                    <Text style={ styles.valueStyle }>{ this.props.prix }€</Text>
                </View>

                <View style={ styles.wrapperText }>
                    <TouchableOpacity><Text style={ styles.linkStyle }>Modifier</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },
    wrapperText: {
        display: 'flex',
        flexDirection: 'row', 
    },
    keyStyle: {
        fontFamily: 'roboto-regular',
        color: '#9b9b9b',
        fontSize: 12,
        letterSpacing: 1,
        width: 60
    },
    valueStyle: {
        fontFamily: 'roboto-bold',
        color: '#070e37',
        fontSize: 12,
        letterSpacing: 1
    },
    linkStyle: {
        fontFamily: 'brawler-regular',
        color: '#070e37',
        fontSize: 10,
        letterSpacing: 1,
        textDecorationLine: 'underline'
    }
})