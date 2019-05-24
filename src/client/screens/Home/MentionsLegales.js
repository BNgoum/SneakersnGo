import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Container from '../../components/Style/Container';
import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import Title from '../../components/Style/Text/Title';
import BorderTitle from '../../components/Style/Text/BorderBottomTitle';
import Paragraph from '../../components/Style/Text/Paragraph';

export default class ProprieteIntellectuelle extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "Mentions Légales".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <Paragraph style={ styles.textStyle }>SNEAKERS AND GO est une EIRL au capital de 3000 Euros.{"\n"}RCS NANTERRE : 837 947 936 N° Siret : 83794793600014.</Paragraph>
                
                <Paragraph style={ [styles.textStyle, styles.lastText] }>Adresse du siège social : 5 rue buffon  92700 Colombes</Paragraph>
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

