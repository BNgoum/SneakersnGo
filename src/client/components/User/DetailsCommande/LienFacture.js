import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Link from '../../Style/Text/Link';
import TextLink from '../../Style/Text/TextLink';
import { ArrowBottomLine } from '../../../images/icons'

export default class LienFacture extends Component {
    render() {
        return (
            <View style={ styles.telechargerFacture }>
                <Link style={ styles.linkTelechargerFacture }><ArrowBottomLine /><TextLink style={ styles.textLinkStyle }>{"Télécharger la facture".toUpperCase()}</TextLink></Link>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    telechargerFacture: {
        marginTop: 40,
        paddingBottom: 35
    },
    linkTelechargerFacture: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLinkStyle: {
        fontFamily: 'roboto-regular',
        marginLeft: 12
    }
})