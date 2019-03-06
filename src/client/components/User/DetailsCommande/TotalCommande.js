import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import TitrePointRouge from '../../Style/TitrePointRouge';

export default class TotalCommande extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <TitrePointRouge title="Total commande" />

                <View style={ styles.containerText }>
                    <View style={ styles.wrapperText }>
                        <Text style={ styles.textNormal }>{ "Sous-total".toUpperCase() }</Text>
                        <Text style={ [styles.textNormal, styles.textBlack] }>{ this.props.sousTotal.toUpperCase() }</Text>
                    </View>

                    <View style={ styles.wrapperText }>
                        <Text style={ styles.textNormal }>{ "Livraison".toUpperCase() }</Text>
                        <Text style={ [styles.textNormal, styles.textBlack] }>{ this.props.livraison.toUpperCase() }</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 29
    },
    containerText: {
        marginTop: 10
    },
    textNormal: {
        fontSize: 10,
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
        color: '#9b9b9b',
        lineHeight: 15
    },
    textBlack: {
        color: "#070e37"
    },
    wrapperText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})