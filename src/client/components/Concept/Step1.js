import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Circle from '../Style/Circle';
import Paragraph from '../Style/Text/Paragraph';

export default class Step1 extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.wrapperHeader }>
                    <Text style={ styles.textStyle }>1</Text>
                    <Circle></Circle>
                    <Text style={ styles.textStyle }>{'Loue'.toUpperCase()}</Text>
                </View>
                <Paragraph>Osez la location pour une mode plus responsable.</Paragraph>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 44
    },
    wrapperHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        fontFamily: 'roboto-bold',
        color: '#070e37'
    }
})
