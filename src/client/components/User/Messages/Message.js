import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Message extends Component {
    render() {
        return (
            <View style={ [styles.container, this.props.isRecipient ? styles.isRecipient : styles.isOwner] }>
                <Text style={ styles.pseudo }>{ this.props.pseudo.toUpperCase() }</Text>
                <Text style={ styles.textNormal }>{ this.props.message }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#9b9b9b',
        borderBottomWidth: 1,
        paddingBottom: 10,
        lineHeight: 14,
        marginTop: 36,
        maxWidth: '65%'
    },
    textNormal: {
        fontSize: 14,
        fontFamily: 'brawler-regular',
        letterSpacing: 1,
        color: '#333',
    },
    isRecipient: {
        paddingLeft: 20,
        alignSelf: 'flex-start'
    },
    isOwner: {
        paddingRight: 20,
        alignSelf: 'flex-end'
    },
    pseudo: {
        fontSize: 11,
        color: '#070e37',
        letterSpacing: 1,
        fontFamily: 'roboto-regular',
        marginBottom: 6
    }
})