import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Citation from '../Style/Text/Citation';
import BorderBottomTitle from '../Style/Text/BorderBottomTitle';
import Title from '../Style/Text/Title';
import ButtonCTA from '../Style/Button/Button';
import ButtonText from '../Style/Button/ButtonText';
import Background from '../Style/Background';

export default class CitationComponent extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.textApostropheBefore }>"</Text>
                <Citation style={ styles.citation }>
                {'Soyez libre d’utiliser la mode sans la posséder'.toUpperCase()}
                </Citation>
                <Text style={ styles.textApostropheAfter }>"</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20,
        marginTop: 48,
        width: 240,
    },
    textApostropheBefore: {
        position: 'absolute',
        top: -20,
        left: 0,
        fontSize: 44,
        fontFamily: 'roboto-bold',
        color: '#F00'
    },
    textApostropheAfter: {
        position: 'absolute',
        bottom: -20,
        right: 40,
        fontSize: 44,
        fontFamily: 'roboto-bold',
        color: '#F00'
    }
})
