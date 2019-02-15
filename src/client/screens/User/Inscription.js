import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import Link from '../../components/Style/Text/Link';
import Title from '../../components/Style/Text/Title';
import TextLink from '../../components/Style/Text/TextLink';
import Background from '../../components/Style/Background';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import Circle from '../../components/Style/Circle';
import InputText from '../../components/Form/InputText';

import {Croix} from '../../images/icons';

export default class Inscription extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Background style={ styles.backgroundTop }/>
                <Link onPress={ () => this.props.navigation.navigate('Connexion')} style={ styles.wrapperLink }><Croix /></Link>

                <View style={ styles.wrapperTitle }>
                    <Title style={ styles.titleStyle }>{ "Inscription".toUpperCase() }</Title>
                    <Circle />
                </View>

                <View style={ styles.wrapperForm }>
                    <InputText placeholder="Prenom" style={ styles.inputTextStyle} />
                    <InputText placeholder="Nom" style={ styles.inputTextStyle} />
                    <InputText placeholder="E-mail" style={ styles.inputTextStyle} />
                    <InputText placeholder="Mot de passe" style={ styles.inputTextStyle} />
                    <ButtonCTA style={ styles.wrapperBtn }><ButtonText>{ "Créer son compte".toUpperCase() }</ButtonText></ButtonCTA>
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
        top: -180,
        left: -20
    },
    wrapperTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40
    },
    titleStyle: {
        fontSize: 32,
        lineHeight: 40,
        marginBottom: 0
    },
    wrapperLink: {
        position: 'absolute',
        top: 0,
        right: 0,
        alignSelf: 'flex-end',
        padding: 20
    },
    linkStyle: {
        textTransform: 'none',
        fontFamily: "brawler-regular"
    },
    wrapperForm: {
        marginTop: 20,
    },
    inputTextStyle: {
        width: 'auto'
    },
    wrapperLinkBottom: {
        alignSelf: 'center'
    },
    wrapperBtn: {
        marginTop: 25,
        marginBottom: 13,
        alignSelf: 'center'
    },
    backgroundBottom: {
        bottom: -200,
        left: -50,
        zIndex: -1
    }
})