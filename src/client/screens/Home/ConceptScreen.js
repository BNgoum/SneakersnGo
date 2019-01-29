import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Container from '../../components/Style/Container';
import Background from '../../components/Style/Background';
import Paragraph from '../../components/Style/Text/Paragraph';
import Citation from '../../components/Concept/Citation';
import Steps from '../../components/Concept/Steps';
import Button from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';

export default class ConceptScreen extends Component {
    render() {
        return (
            <Container>
                <Background style={ styles.backgroundHeader }></Background>
                <Citation style={ styles.citation }></Citation>
                <Paragraph style={ styles.paragraph }>Maîtrisez votre budget en optant pour notre service de location pour vos shootings photos, clips vidéos & évènements.</Paragraph>
                <Steps></Steps>
                <Button style={ styles.btnSneakers }>
                    <ButtonText>{'Parcourir les sneakers'.toUpperCase()}</ButtonText>
                </Button>
                <Background style={ styles.backgroundFooter }></Background>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    citation: {
        width: 230
    },
    backgroundHeader: {
        height: 130,
        top: -60,
        left: -60
    },
    paragraph: {
        padding: 20,
        marginTop: 48,
        marginBottom: 70
    },
    btnSneakers: {
        width: 220,
        alignSelf: 'center',
        marginBottom: 32
    },
    backgroundFooter: {
        height: 280,
        bottom: -60,
        left: -60,
        zIndex: -1
    },
})
