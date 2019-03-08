import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Circle from '../Style/Circle';
import Paragraph from '../Style/Text/Paragraph';

export default class Step2 extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.wrapperHeader }>
                    <Text style={ styles.textStyle }>2</Text>
                    <Circle></Circle>
                    <Text style={ styles.textStyle }>{'Profite'.toUpperCase()}</Text>
                </View>
                <Paragraph>Soyez à la pointe de la mode à tous vos évènements.</Paragraph>
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
        color: '#070e37',
        marginRight: 8
    }
})
