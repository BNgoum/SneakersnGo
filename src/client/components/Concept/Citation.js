import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import Citation from '../Style/Text/Citation';
import { Apostrophes } from '../../images/icons';

export default class CitationComponent extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Apostrophes style={ styles.textApostropheBefore }></Apostrophes>
                <Citation style={ styles.citation }>
                {'Soyez libre d’utiliser la mode sans la posséder'.toUpperCase()}
                </Citation>
                <Apostrophes style={ styles.textApostropheAfter }></Apostrophes>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20,
        marginTop: 40,
        width: 255,
    },
    textApostropheBefore: {
        position: 'absolute',
        top: -20,
        left: -5,
        transform: [{ rotate: '180deg'}]
    },
    textApostropheAfter: {
        position: 'absolute',
        bottom: 5,
        right: 20,
    }
})
