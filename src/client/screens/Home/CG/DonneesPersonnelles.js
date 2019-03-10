import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Container from '../../../components/Style/Container';
import ContainerTitle from '../../../components/Style/Text/ContainerTitle';
import Title from '../../../components/Style/Text/Title';
import BorderTitle from '../../../components/Style/Text/BorderBottomTitle';
import Paragraph from '../../../components/Style/Text/Paragraph';

export default class DonneesPersonnelles extends Component {
    render() {
        return (
            <Container style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "5. Données Personnelles".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <Paragraph style={ styles.textStyle }>SNEAKERS AND GO est susceptible de collecter les données personnelles du Client, notamment lors de l’inscription sur le Site.</Paragraph>
                
                <Paragraph style={ styles.textStyle }>Les « données personnelles » font référence aux informations concernant le Client en tant que personne physique communiquées volontairement en remplissant le formulaire figurant sur le Site , ou que SNEAKERS AND GO collecte dans le cadre de la navigation et qui, quelle qu'en soit la nature, permettent d’identifier le Client.</Paragraph>
                
                <Paragraph style={ [styles.textStyle, styles.lastText] }>Les données personnelles regroupent des données nominatives (telles que noms, coordonnées, communiqués par le Client et des données d'identification électronique disponibles sur ou à partir de son ordinateur (telles que les « cookies » ou « les adresses IP »).</Paragraph>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    containerTitle: {
        width: 150,
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

