import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

import InputText from '../../components/Form/InputText';
import InputSelect from '../../components/Form/InputSelect';
import Button from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';

export default class SneakersAsk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisable: true
        }
    }

    render() {
        return (
            <ScrollView style={ styles.container }>
                <InputText placeholder="Marque"></InputText>
                <InputText placeholder="Modèle"></InputText>
                <InputText placeholder="Coloris"></InputText>
                <InputSelect placeholder="Taille"></InputSelect>
                <InputSelect placeholder="Jour(s) de location"></InputSelect>
                <Button style={ [styles.buttonStyle, this.state.isDisable && styles.buttonDisable] }><ButtonText>{ "Envoyer ma demande".toUpperCase() }</ButtonText></Button>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        paddingHorizontal: 20,
    },
    buttonStyle: {
        alignSelf: 'center'
    },
    buttonDisable: {
       backgroundColor: '#9b9b9b' 
    }
})
