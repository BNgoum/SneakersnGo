import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import ContainerTitle from '../Style/Text/ContainerTitle';
import BorderBottomTitle from '../Style/Text/BorderBottomTitle';
import Title from '../Style/Text/Title';
import ButtonCTA from '../Style/Button/Button';
import ButtonText from '../Style/Button/ButtonText';
import Background from '../Style/Background';

export default class Buy extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.header }>
                    <ContainerTitle style={ styles.wrapperTitle }>
                        <Title style={ styles.title }>{'Acheter'.toUpperCase()}</Title>
                        <BorderBottomTitle></BorderBottomTitle>
                    </ContainerTitle>

                    <ButtonCTA onPress={ () => this.props.navigation.navigate('Research') } style={ styles.ButtonCTA }><ButtonText>{'Découvrir'.toUpperCase()}</ButtonText></ButtonCTA>
                </View>
                <View style={ styles.content }>
                    <Background style={ styles.backgroundSneaker }></Background>
                    <Image style={ styles.imgSneaker } source={require('../../images/background_acheter.png')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 64,
        paddingTop: 30,
        paddingRight: 20,
        paddingLeft: 20,
        display: 'flex',
        alignItems: 'flex-end',
        height: 270
    },
    wrapperTitle: {
        width: 105,
        marginBottom: 14
    },
    title: {
        fontSize: 24
    },
    header: {
        zIndex: 5
    },
    content: {
        alignSelf: 'center',
        width: 184,
        height: 155,
        zIndex: 1
    },
    backgroundSneaker: {
        width: 184,
        height: 155,
        transform: [{rotate: '-77deg'}],
        bottom: 20,
        left: 0
    },
    imgSneaker: {
        position: 'absolute',
        bottom: -10,
        left: -10,
        width: 162,
        height: 168
    },
    ButtonCTA: {
        width: 137
    }
})
