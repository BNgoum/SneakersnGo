import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Container from '../../../components/Style/Container';
import ContainerTitle from '../../../components/Style/Text/ContainerTitle';
import Title from '../../../components/Style/Text/Title';
import BorderTitle from '../../../components/Style/Text/BorderBottomTitle';
import Paragraph from '../../../components/Style/Text/Paragraph';

export default class Objet extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "1. Objet".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <Paragraph style={ styles.textStyle }>1.2 Les Conditions Générales de Location de la société SNEAKERS AND GO (désignées ci-après « les CGV ») régissent les relations entre un client (désigné ci-après « le Client ») et la société SNEAKERS AND GO (ci-après « la Société »). Elles ont une valeur contractuelle et portent sur l’utilisation des services proposés par la société SNEAKERS AND GO (ci-après « les Services »). Ce service permet au Client de louer des baskets de créateurs et de grandes enseignes. (ci-après « les Articles »).</Paragraph>
                
                <Paragraph style={ styles.textStyle }>1.2 La société SNEAKERS AND GO édite un Site internet accessible à l’adresse www.sneakersngo.fr (désigné ci-après par « le Site »), qui permet la location de baskets de créateurs et de grandes enseignes. Les Services et le Site internet sont exploités par la société SNEAKERS AND GO, EIRL au capital de 3000 Euros, immatriculée au RCS de Paris sous le n° 837 947 936 dont le siège social est situé au 5 rue buffon 92700 Colombes</Paragraph>
                
                <Paragraph style={ [styles.textStyle, styles.lastText] }>1.3 Toute commande sur le Site internet par le Client implique l’acceptation sans réserves des présentes CGV. Ces CGV pourront faire l’objet de modifications à tout moment, les CGV applicables étant celles que le Client accepte lors de la passation de la commande. Sauf dispositions contraires expresses, les CGV prévalent sur tout autre document.</Paragraph>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    containerTitle: {
        width: 90,
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

