import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Address extends Component {
    render() {
        return (
            <View>
                <Text style={ styles.adresseNom }>{this.props.adresseNom.toUpperCase()}</Text>
                <Text style={ styles.adresseText }>{this.props.adresseRue}</Text>
                <Text style={ styles.adresseText }>{this.props.adresseCodePostal}</Text>
                <Text style={ styles.adresseText }>{this.props.adressePays}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    adresseNom: {
        fontSize: 10,
        fontFamily: 'roboto-bold',
        color: '#070e37',
        letterSpacing: 1,
        marginBottom: 5
    },
    adresseText: {
        color: '#4a4949',
        fontSize: 10,
        fontFamily: 'brawler-regular',
        letterSpacing: 1
    }
})