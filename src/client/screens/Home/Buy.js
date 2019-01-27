import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import BorderBottomTitle from '../../components/Style/Text/BorderBottomTitle';
import Title from '../../components/Style/Text/Title';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import Container from '../../components/Style/Container';
import Background from '../../components/Style/Background';

export default class Buy extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.header }>
                    <ContainerTitle style={ styles.wrapperTitle }>
                        <Title style={ styles.title }>Acheter</Title>
                        <BorderBottomTitle></BorderBottomTitle>
                    </ContainerTitle>

                    <ButtonCTA><ButtonText>Découvrir</ButtonText></ButtonCTA>
                </View>
                <View style={ styles.content }>
                    <Background style={ styles.backgroundSneaker }></Background>
                    <Image style={ styles.imgSneaker } source={require('../../images/airmax.png')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        marginBottom: 54,
        display: 'flex',
        alignItems: 'flex-end',
        height: 270
    },
    wrapperTitle: {
        width: 100,
        marginBottom: 14
    },
    title: {
        fontSize: 24
    },
    header: {
        zIndex: 5
    },
    content: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: [{translateX: -92}, {translateY: -20}],
        width: 184,
        height: 155,
        zIndex: 1
    },
    backgroundSneaker: {
        width: 184,
        height: 155,
        transform: [{rotate: '-77deg'}],
        bottom: 0,
        left: 0
    },
    imgSneaker: {
        position: 'absolute',
        bottom: 0,
        left: -60,
        width: 230,
        height: 200
    }
})
