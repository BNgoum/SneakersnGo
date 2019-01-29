import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import ButtonSecondary from '../Style/Button/ButtonSecondary';
import ButtonTextBold from '../Style/Button/ButtonTextBold';

export default class Instagram extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Image style={ styles.instaImage1 } source={require('../../images/instagram.jpg')} />
                <Image style={ styles.instaImage2 } source={require('../../images/instagram.jpg')} />
                <Image style={ styles.instaImage3 } source={require('../../images/instagram.jpg')} />
                <ButtonSecondary style={ styles.instaBtn }>
                    <ButtonTextBold>{'Instagram'.toUpperCase()}</ButtonTextBold>
                </ButtonSecondary>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: 50,
        backgroundColor: '#dedede',
        height: 150,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    instaImage1: {
        // position: 'absolute',
        width: 150,
        height: 150,
        left: -50
    },
    instaImage2: {
        // position: 'absolute',
        width: 150,
        height: 150,
        left: '50%',
        transform: [{ translateX: -75 }],
        paddingRight: 10,
        paddingLeft: 10,
    },
    instaImage3: {
        // position: 'absolute',
        width: 150,
        height: 150,
        right: -50
    },
    instaBtn: {
        position: 'absolute',
        width: 218,
        height: 34,
        top: '50%',
        left: '50%',
        transform: [{ translateX: -90 }, { translateY: -17 }]
    }
})
