import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import Title from '../../components/Style/Text/Title';
import BorderTitle from '../../components/Style/Text/BorderBottomTitle';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import InputText from '../../components/Form/InputText';

export default class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <ScrollView style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "Modifier mon mot de passe".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <InputText typeContent="password" isPassword={true} placeholder="Mot de passe actuel" />
                <InputText typeContent="password" isPassword={true} placeholder="Nouveau mot de passe" />
                <InputText typeContent="password" isPassword={true} placeholder="Confirmer ce mot de passe" />
                
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
        width: 150,
        marginBottom: 50
    },
    titleStyle: {
        fontSize: 21,
        lineHeight: 25
    },
    containerButton: {
        alignSelf: 'center',
        marginBottom: 40
    }
})
