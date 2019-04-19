import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Container from '../../components/Style/Container';
import Nouveautes from '../../components/Home/Nouveautes';
import Concept from '../../components/Home/Concept';
import Instagram from '../../components/Home/Instagram';
import Buy from '../../components/Home/Buy';
import Link from '../../components/Style/Text/Link';
import TextLink from '../../components/Style/Text/TextLink';
import Background from '../../components/Style/Background';

export default class Home extends Component {

    render() {
        return (
            <Container>
                <Nouveautes navigation={ this.props.navigation } />
                <Concept navigation={ this.props.navigation } />
                <Instagram />
                <Buy navigation={ this.props.navigation }></Buy>
                <Link style={ styles.linkText } onPress={ () => this.props.navigation.navigate('ConditionGenerales') }>
                    <TextLink>{'Conditions générales'.toUpperCase()}</TextLink>
                </Link>
                <Link style={ styles.linkTextLast } onPress={ () => this.props.navigation.navigate('MentionsLegales') }>
                    <TextLink>{'Mentions Légales'.toUpperCase()}</TextLink>
                </Link>
                <Background style={ styles.backgroundFooter } />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 13
    },
    linkText: {
        alignSelf: 'center',
        marginTop: 20,
        zIndex: 5,
        textTransform: 'uppercase'
    },
    linkTextLast: {
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 30,
        zIndex: 5,
        textTransform: 'uppercase'
    },
    backgroundFooter: {
        bottom: -180,
        top: 'auto',
        left: -60
    }
})