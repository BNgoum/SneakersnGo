import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Container from '../../../components/Style/Container';
import ContainerTitle from '../../../components/Style/Text/ContainerTitle';
import Title from '../../../components/Style/Text/Title';
import BorderTitle from '../../../components/Style/Text/BorderBottomTitle';
import Paragraph from '../../../components/Style/Text/Paragraph';

export default class Articles extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "2. Les articles".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <Paragraph style={ styles.textStyle }>SNEAKERS AND GO s’engage à ne mettre en location que des baskets originaux et authentiques. Chaque article est muni d’un système permettant d’assurer sa traçabilité. Le client s’interdit de dégrader le système de traçabilité, de substituer l’article loué par toute autre pièce et/ou de le remplacer par une contrefaçon. Tout article retournée qui se n’avèrerait ne pas être l’article loué sera traité par SNEAKERS AND GO comme un cas de perte ou de vol. Si, l’article se révèle être une contrefaçon, SNEAKERS AND GO se réserve tout recours contre le client. 
                </Paragraph>
                
                <Paragraph style={ styles.textStyle }>2.1 Les Articles proposés à la location sur le Site sont des baskets de marques dont le nettoyage, l’entretien et la rénovation sont assurés par SNEAKERS AND GO. Les caractéristiques de chaque Article sont décrites sur chaque fiche produit. Ces informations sont données à titre indicatif et il appartient au Client de vérifier l’adéquation des Articles à sa taille et ses besoins.</Paragraph>
                
                <Paragraph style={ styles.textStyle }>2.2 SNEAKERS AND GO se réserve le droit de retirer du Site, à tout moment, toutes baskets et remplacer ou modifier toute information associée à ces Articles.</Paragraph>
                
                <Paragraph style={ [styles.textStyle, styles.lastText] }>2.3 Les tarifs affichés sur le Site sont en euros TTC et prennent en compte les coûts de nettoyage. Tout changement du taux de la Taxe sur la Valeur Ajoutée (TVA) sera automatiquement répercuté sur le tarif des Articles. Ces tarifs relèvent de la politique commerciale de la Société et peuvent varier à discrétion de la Société.</Paragraph>
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

