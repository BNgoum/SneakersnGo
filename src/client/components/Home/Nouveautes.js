import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import ContainerTitle from '../Style/Text/ContainerTitle';
import BorderBottomTitle from '../Style/Text/BorderBottomTitle';
import Title from '../Style/Text/Title';
import ButtonCTA from '../Style/Button/Button';
import ButtonText from '../Style/Button/ButtonText';
import Background from '../Style/Background';

export default class Nouveautes extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Background style={ styles.backgroundSquare }></Background>
                <Image style={ styles.backgroundSneaker } source={require('../../images/background_nouveautes.png')}  />
                
                <ContainerTitle style={ styles.title }>
                    <Title>{'Toutes les nouveautés'.toUpperCase()}</Title>
                    <BorderBottomTitle></BorderBottomTitle>
                </ContainerTitle>

                <ButtonCTA onPress={ () => this.props.navigation.navigate('Research') } style={ styles.ButtonCTA }><ButtonText>{'Découvrir'.toUpperCase()}</ButtonText></ButtonCTA>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingTop: 34,
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 54,
    },
    backgroundSquare: {
        top: -60,
        left: -60
    },
    title: {
        marginBottom: 13,
        width: 170
    },
    wrapperBackground: {
        position: 'relative'
    },
    backgroundSneaker: {
        position: 'absolute',
        bottom: -140,
        right: -10,
        width: 205,
        height: 198
    },
    ButtonCTA: {
        width: 137
    }
})
