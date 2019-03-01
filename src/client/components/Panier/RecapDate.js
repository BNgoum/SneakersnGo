import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class RecapDate extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.wrapperDateStyle }>
                    <Text style={ styles.texteStyle }>Du </Text>
                    <Text style={ styles.dateLocation }>{ this.props.dateDebut.toUpperCase() }</Text>
                    <Text style={ styles.texteStyle }> au </Text>
                    <Text style={ styles.dateLocation }>{ this.props.dateFin.toUpperCase() }</Text>
                </View>

                <View style={ styles.wrapperDateStyle }>
                    <Text style={ styles.texteStyle }>Total jours : </Text>
                    <Text style={ styles.dateTotaleLocation }>{ this.props.totalDate }</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperDateStyle: {
        display: 'flex',
        flexDirection: 'row'
    },
    texteStyle: {
        color: '#9b9b9b',
        fontSize: 10,
        letterSpacing: 1,
        fontFamily: 'brawler-regular'
    },
    dateLocation: {
        color: '#070e37',
        fontSize: 10,
        fontFamily: 'roboto-regular',
        letterSpacing: 1
    },
    dateTotaleLocation: {
        color: '#333',
        fontSize: 10,
        fontFamily: 'roboto-regular',
        letterSpacing: 1
    }
})