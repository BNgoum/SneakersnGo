import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Link from '../Style/Text/Link';
import TextLink from '../Style/Text/TextLink';
import Paragraph from '../Style/Text/Paragraph';

export default class Concept extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Paragraph>La plateforme de location de sneakers authentiques pour les professionnels de la mode.</Paragraph>
                <Link style={ styles.linkStyle } onPress={ () => this.props.navigation.navigate('Concept') }>
                    <TextLink>{'Découvrir le concept'.toUpperCase()}</TextLink>
                </Link>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        paddingRight: 20,
        paddingLeft: 20,
    },
    linkStyle: {
        paddingTop: 16,
        paddingBottom: 8
    }
})
