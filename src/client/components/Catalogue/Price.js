import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Price extends Component {
    render() {
        console.log('Receive props : ', this.props.price)
        return (
            <View style={ styles.wrapperPrice }>
                <Text style={ styles.price }>{this.props.price[0].rentPrice} €</Text>
                <Text style={ styles.textPrice }>{ ' par jour'.toUpperCase() }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperPrice: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        marginBottom: 38,
        marginTop: 16
    },
    price: {
        color: '#070e37',
        fontSize: 15,
        fontFamily: 'roboto-bold',
        letterSpacing: 1,
    },
    textPrice: {
        color: '#9b9b9b',
        fontSize: 12,
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
    }
})
