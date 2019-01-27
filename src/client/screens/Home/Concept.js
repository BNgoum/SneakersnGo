import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Link from '../../components/Style/Text/Link';
import Paragraph from '../../components/Style/Text/Paragraph';

export default class Concept extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Paragraph>La plateforme de location de sneakers authentiques pour les professionnels de la mode.</Paragraph>
                <Link style={ styles.linkStyle }>Découvrir le concept</Link>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
    },
    linkStyle: {
        paddingTop: 16
    }
})
