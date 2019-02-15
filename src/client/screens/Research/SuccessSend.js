import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ContainerTitle from '../../components/Style/Text/ContainerTitle'
import Title from '../../components/Style/Text/Title'
import BorderTitle from '../../components/Style/Text/BorderBottomTitle'
import Paragraph from '../../components/Style/Text/Paragraph'
import ButtonCTA from '../../components/Style/Button/Button'
import ButtonText from '../../components/Style/Button/ButtonText'

export default class SuccessSend extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <ContainerTitle><Title>{ 'Demande envoyée'.toUpperCase() }</Title><BorderTitle /></ContainerTitle>
                <Paragraph style={ styles.textStyle }>L’équipe de Sneakers and go se met dès à présent à chercher les sneakers de tes rêves ! Tu recevras une réponse à ta requête sous 24 heures.
                </Paragraph>
                <ButtonCTA onPress={ () => this.props.navigation.navigate('Research')} style={ styles.buttonStyle }><ButtonText>{ 'Nouvelle recherche'.toUpperCase() }</ButtonText></ButtonCTA>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    textStyle: {
        marginTop: 20,
        marginBottom: 25
    },
    buttonStyle: {
      alignSelf: 'center'
    }
})
