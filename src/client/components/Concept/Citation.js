import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import Citation from '../Style/Text/Citation';

export default class CitationComponent extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Image style={ styles.textApostropheBefore } source={require('../../images/apostrophes.png')} />
                <Citation style={ styles.citation }>
                {'Soyez libre d’utiliser la mode sans la posséder'.toUpperCase()}
                </Citation>
                <Image style={ styles.textApostropheAfter } source={require('../../images/apostrophes.png')} />
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
        flex: 1,
    },
    textApostropheAfter: {
        position: 'absolute',
        bottom: -20,
        right: 40,
        flex:1,
    }
})
