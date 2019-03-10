import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Container from '../../../components/Style/Container';
import ContainerTitle from '../../../components/Style/Text/ContainerTitle';
import Title from '../../../components/Style/Text/Title';
import BorderTitle from '../../../components/Style/Text/BorderBottomTitle';
import Paragraph from '../../../components/Style/Text/Paragraph';

export default class ProprieteIntellectuelle extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "7. Propriété Intellectuelle".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <Paragraph style={ [styles.textStyle, styles.lastText] }>A l’exception des contenus mis en ligne par les utilisateurs, les marques , logos, slogans, graphismes, photographies, vidéos présents sur le Site sont la propriété intellectuelle de SNEAKERS AND GO et ne peuvent être reproduits, utilisés ou représentés sans l’autorisation préalable et expresse de la société SNEAKERS AND GO sous peine de poursuites judicaires.</Paragraph>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    containerTitle: {
        width: 170,
        marginBottom: 36
    },
    titleStyle: {
        fontSize: 21,
        lineHeight: 25
    },
    textStyle: {
        marginBottom: 20
    },
    lastText: {
        marginBottom: 50
    }
})

