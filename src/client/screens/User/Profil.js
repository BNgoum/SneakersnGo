import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import Title from '../../components/Style/Text/Title';
import BorderTitle from '../../components/Style/Text/BorderBottomTitle';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import InputText from '../../components/Form/InputText';
import DatePicker from '../../components/Form/DatePicker';

export default class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: "",
            marque: "",
            style: "",
            coloris: "",
            prix: ""
        }
    }

    render() {
        return (
            <ScrollView style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "Mon profil".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <InputText placeholder="Prénom" />
                <InputText placeholder="Nom" />
                <InputText typeContent="emailAddress" placeholder="E-mail" />
                <DatePicker placeholder="Date de naissance" />
                <InputText typeContent="telephoneNumber" placeholder="Numéro de mobile" />
                <InputText placeholder="Entreprise" />
                
                <ButtonCTA style={ styles.containerButton }><ButtonText>{ "Enregistrer".toUpperCase() }</ButtonText></ButtonCTA>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    containerTitle: {
        width: 115,
        marginBottom: 50
    },
    titleStyle: {
        fontSize: 21,
        lineHeight: 25
    },
    texteResultats: {
        fontSize: 11,
        letterSpacing: 1,
        fontFamily: 'roboto-regular',
        color: '#9b9b9b',
        marginBottom: 22
    },
    viewUser: {
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4'
    },
    lastViewUser: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    containerUser: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        paddingRight: 18,
    },
    titleUser: {
        fontSize: 15,
        color: '#070e37',
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
    },
    selectedUser: {
        fontSize: 10,
        letterSpacing: 1,
        fontFamily: 'roboto-regular',
        color: '#9b9b9b',
    },
    iconArrow: {
        position: 'absolute',
        top: 24,
        right: 0,
        transform: [{ rotate: "-90deg" }]
    },
    containerButton: {
        alignSelf: 'center',
        marginBottom: 40
    }
})
