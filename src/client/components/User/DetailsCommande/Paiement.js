import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import TitrePointRouge from '../../Style/TitrePointRouge';

export default class Paiement extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <TitrePointRouge title="Informations de paiement" />

                <View style={ styles.containerCarte }>
                    <Image source={require('../../../images/mastercard.png')} style={ styles.carteImage } />

                    <View>
                        <View style={ styles.containerCarteInfo }>
                            <Text style={ styles.textNormal }>{this.props.typeCarte.toUpperCase()} { "N°XXXX XXXX XXXX 7654".toUpperCase() }</Text>
                            <Text style={ [styles.textNormal, styles.textBlack] }>{ this.props.numeroCarte }</Text>
                        </View>
                        
                        <View style={ styles.containerExpDate }>
                            <Text style={ styles.textNormal }> { "Exp. ".toUpperCase() }</Text>
                            <Text style={ [styles.textNormal, styles.textBlack] }>{ this.props.dateExp }</Text>
                        </View>

                        <View style={ styles.containerNoms }>
                            <Text style={ [styles.textNormal, styles.nomsStyle] }> { this.props.noms }</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 37
    },
    textNormal: {
        fontSize: 10,
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
        color: '#9b9b9b',
        lineHeight: 15
    },
    containerCarte: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    containerCarteInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerExpDate: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerNoms: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nomsStyle: {
        fontFamily: 'brawler-regular',
        color: '#333'
    },
    textBlack: {
        color: "#333"
    },
    carteImage: {
        marginRight: 10
    }
})