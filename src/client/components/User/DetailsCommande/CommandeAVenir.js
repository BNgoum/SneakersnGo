import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class CommandeAVenir extends Component {
    render() {
        return (
            <View style={ styles.headerCommande }>
                <Text style={ [styles.title, styles.styleTitle] }>{"Commande à venir".toUpperCase()}</Text>
                <View style={ styles.wrapperDate }>
                    <Text style={ [styles.dateCommandeLibelle, styles.styleInfo] }>{"Date de la commande : ".toUpperCase()}</Text>
                    <Text style={ [styles.dateCommande, styles.styleText] }>{this.props.date.toUpperCase()}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerCommande: {
        marginHorizontal: 20,
        marginTop: 35,
        marginBottom: 26,
    },
    wrapperDate: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    title: {
        fontSize: 15,
    },
    styleTitle: {
        fontFamily: 'roboto-bold',
        letterSpacing: 1,
        color: '#070e37',
    },
    styleInfo: {
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
        color: '#9b9b9b'
    },
    dateCommandeLibelle: {
        fontSize: 11
    },
    dateCommande: {
        fontSize: 11
    },
    styleText: {
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
        color: '#070e37'
    }
})