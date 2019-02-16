import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';

import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import InputText from '../../components/Form/InputText';
import InputSelect from '../../components/Form/InputSelect';

export default class DetailsAdresse extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <InputText placeholder="Nom de l'adresse" style={ styles.inputTextStyle} />
                <InputSelect placeholder="Pays" data={["France", "Belgique", "Italie", "Espagne"]} style={ styles.inputTextStyle} />
                <InputText placeholder="Adresse" style={ styles.inputTextStyle} />
                <InputText placeholder="Adresse suite" style={ styles.inputTextStyle} />
                <InputText placeholder="Code postal" typeContent="postalCode" style={ styles.inputTextStyle} />
                <InputText placeholder="Ville" style={ styles.inputTextStyle} />

                <ButtonCTA style={ styles.wrapperBtn }><ButtonText>{ "Enregistrer".toUpperCase() }</ButtonText></ButtonCTA>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20,
        display: 'flex',
        marginTop: 10,
        flex: 1
    },
    inputTextStyle: {
        width: 'auto'
    },
    wrapperBtn: {
        marginTop: 10,
        marginBottom: 13,
        alignSelf: 'center'
    }
})