import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Circle from './Circle';

export default class TitrePointRouge extends Component {

    render() {
        return (
            <View style={ [styles.container, this.props.styleComponent ]}>
                <Circle />
                <Text>{ this.props.title.toUpperCase() }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    texteStyle: {
        color: '#070e37',
        fontSize: 12,
        letterSpacing: 1,
        fontFamily: 'roboto-regular'
    }
})