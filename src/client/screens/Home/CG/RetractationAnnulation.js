import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Container from '../../../components/Style/Container';
import ContainerTitle from '../../../components/Style/Text/ContainerTitle';
import Title from '../../../components/Style/Text/Title';
import BorderTitle from '../../../components/Style/Text/BorderBottomTitle';
import Paragraph from '../../../components/Style/Text/Paragraph';

export default class RetractationAnnulation extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "6. Droit de rétractation / Annulation".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <Paragraph style={ styles.textStyle }>Conformément à l’Article L121-21-8 du Code de la consommation issu de la loi n°2014-344 du 17 mars 2014 :</Paragraph>
                
                <Paragraph style={ styles.textStyle }>« Le droit de rétractation ne peut être exercé pour les contrats :{"\n"}1° De fourniture de services pleinement exécutés avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation (…). »{"\n"}Sur le Site et au moment de la commande, l’Utilisateur renonce expressément à son droit de rétractation.</Paragraph>
                
                <Paragraph style={ [styles.textStyle, styles.lastText] }>En cas d’annulation :{"\n"}Aucune annulation ou remboursement ne pourra être exigé par le Client. Dans le cas d’une impossibilité par le Client de profiter de l’Article pour des raisons indépendantes de sa volonté la Société pourra accorder au Client un avoir valable 3 mois à compter de la date d’annulation.</Paragraph>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    containerTitle: {
        width: 160,
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

