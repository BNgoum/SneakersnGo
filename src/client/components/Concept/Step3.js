import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Circle from '../Style/Circle';
import Paragraph from '../Style/Text/Paragraph';

export default class Step3 extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.wrapperHeader }>
                    <Text style={ styles.textStyle }>3</Text>
                    <Circle></Circle>
                    <Text style={ styles.textStyle }>{'Et recommence'.toUpperCase()}</Text>
                </View>
                <Paragraph>Ayez la liberté de changer quand bon vous semble. </Paragraph>
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
