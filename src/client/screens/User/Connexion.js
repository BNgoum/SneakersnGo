import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Link from '../../components/Style/Text/Link';
import Title from '../../components/Style/Text/Title';
import TextLink from '../../components/Style/Text/TextLink';
import Background from '../../components/Style/Background';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import Circle from '../../components/Style/Circle';
import InputText from '../../components/Form/InputText';

export default class Connexion extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Background style={ styles.backgroundTop }/>
                <Link style={ styles.wrapperLink } onPress={() => this.props.navigation.navigate('Inscription')}>
                    <TextLink style={ styles.linkStyle }>Je n'ai pas de compte</TextLink>
                </Link>

                <View style={ styles.wrapperTitle }>
                    <Title style={ styles.titleStyle }>{ "Mon compte".toUpperCase() }</Title>
                    <Circle />
                </View>

                <View style={ styles.wrapperForm }>
                    <InputText placeholder="E-mail" style={ styles.inputTextStyle} />
                    <InputText typeContent="password" isPassword={true} placeholder="Mot de passe" style={ styles.inputTextStyle} />
                    <ButtonCTA onPress={ () => this.props.navigation.navigate('HomeUser') } style={ styles.wrapperBtn }><ButtonText>{ "Se connecter".toUpperCase() }</ButtonText></ButtonCTA>
                    <Link style={ styles.wrapperLinkBottom }><TextLink style={ styles.linkStyle }>Mot de passe oublié ?</TextLink></Link>
                </View>

                <Background style={ styles.backgroundBottom }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        flex: 1
    },
    backgroundTop: {
        top: -160,
        left: -50
    },
    wrapperTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60
    },
    titleStyle: {
        fontSize: 32,
        lineHeight: 40,
        marginBottom: 0
    },
    wrapperLink: {
        position: 'absolute',
        top: 20,
        right: 20,
        alignSelf: 'flex-end'
    },
    linkStyle: {
        textTransform: 'none',
        fontFamily: "brawler-regular"
    },
    wrapperForm: {
        marginTop: 30,
    },
    inputTextStyle: {
        width: 'auto'
    },
    wrapperLinkBottom: {
        alignSelf: 'center'
    },
    wrapperBtn: {
        marginTop: 25,
        marginBottom: 20,
        alignSelf: 'center'
    },
    backgroundBottom: {
        bottom: -200,
        left: -50,
        zIndex: -1
    }
})