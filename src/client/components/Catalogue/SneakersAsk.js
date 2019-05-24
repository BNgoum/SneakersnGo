import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import InputText from '../../components/Form/InputText';
import InputSelect from '../../components/Form/InputSelect';
import DatePickerCustom from '../../components/Form/DatePicker';
import Button from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';

export default class SneakersAsk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisable: true,
            isSend: false,
            text: ""
        }
    }

    handleOnPressValidate = () => {
        this.setState({ isSend: true })
    }

    handleInputText = (text) => {
        this.setState({ text })
    }

    render() {
        return (
            this.state.isSend ?
            <SuccessSend /> :
            <View style={ styles.container }>
                <InputText placeholder="Marque" sendPropsToParent={ this.handleInputText }></InputText>
                <InputText placeholder="Modèle" sendPropsToParent={ this.handleInputText }></InputText>
                <InputSelect style={ styles.inputSelectStyle } placeholder="Coloris" data={["BLEU", "ROUGE", "VERT", "NOIR", "VIOLET"]} />
                <InputSelect style={ styles.inputSelectStyle } placeholder="Taille" data={["39", "40", "41", "42"]} />
                <DatePickerCustom placeholder="Début de location" />
                <DatePickerCustom placeholder="Fin de location" />
                <Button onPress={ () => this.props.navigation.navigate('SuccessSend') } style={ [styles.buttonStyle, this.state.isDisable && styles.buttonDisable] }><ButtonText>{ "Envoyer ma demande".toUpperCase() }</ButtonText></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        paddingTop: 24,
        paddingHorizontal: 20,
    },
    buttonStyle: {
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 48
    },
    buttonDisable: {
       backgroundColor: '#9b9b9b' 
    },
    inputSelectStyle: {
        marginTop: 64,
        marginBottom: 64,
        paddingTop: 32
    }
})
