import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Address from './Address';
import TitrePointRouge from '../../Style/TitrePointRouge';

export default class Total extends Component {
    render() {
        return (
            <View style={ styles.livraisonContainer }>
                <TitrePointRouge title="Informations sur la livraison" />
                <Text style={ [styles.sousTitreLivraison, styles.sousTitre] }>{ "Remise en main propre à : ".toUpperCase() }</Text>
                
                <Address adresseNom="E-studios" adresseRue="79 boulevard Richard Lenoir" adresseCodePostal="75 011 Paris" adressePays="France" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    livraisonContainer: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    sousTitre: {
        fontSize: 10,
        fontFamily: 'roboto-regular',
        color: '#9b9b9b',
        letterSpacing: 1
    },
    sousTitreLivraison: {
        marginTop: 11,
        marginBottom: 18
    },
})