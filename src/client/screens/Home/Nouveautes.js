import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import BorderBottomTitle from '../../components/Style/Text/BorderBottomTitle';
import Title from '../../components/Style/Text/Title';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import Background from '../../components/Style/Background';

export default class Nouveautes extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Background></Background>
                <Image style={ styles.backgroundSneaker } source={require('../../images/balenciaga.png')} />
                
                
                <ContainerTitle style={ styles.title }>
                    <Title>Toutes les nouveautés</Title>
                    <BorderBottomTitle></BorderBottomTitle>
                </ContainerTitle>

                <ButtonCTA><ButtonText>Découvrir</ButtonText></ButtonCTA>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 64,
        marginBottom: 54,
    },
    title: {
        marginBottom: 13
    },
    wrapperBackground: {
        position: 'relative'
    },
    backgroundSneaker: {
        position: 'absolute',
        bottom: -80,
        left: 70,
        width: 247,
        height: 133
    }
})
