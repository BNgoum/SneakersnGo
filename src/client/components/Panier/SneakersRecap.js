import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import BackgroundSneakers from '../Style/BackgroundSneakersListe';
import CaracteristiquesSneakers from './CaracteristiquesSneakers';
import RecapDate from './RecapDate';
import Footer from './Footer';

export default class SneakersRecap extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.containerSneakers }> 
                    <View style={ styles.wrapperSneakers }>
                        <Image style={ styles.sneakersImage } source={require('../../images/balenciaga_liste.png')} resizeMode={"cover"} />
                        <BackgroundSneakers style={ styles.backgroundSneakers }></BackgroundSneakers>
                    </View>
                    <View style={ styles.wrapperInformations }>
                        <Text style={ styles.marque }>{ 'Balenciaga'.toUpperCase() }</Text>
                        <Text style={ styles.modele }>{ 'Basket Triple S'.toUpperCase() }</Text>
                        <Text style={ styles.prix }>50€ /jour</Text>

                        <CaracteristiquesSneakers caracteristiqueKey="Couleur : " value="Noir" />
                        <CaracteristiquesSneakers caracteristiqueKey="Taille : " value="41" />
                        <CaracteristiquesSneakers caracteristiqueKey="Qté : " value="1" />
                    </View>
                </View>

                <RecapDate dateDebut="Jeudi 18 Févr." dateFin="Samedi 20 Févr. 2019" totalDate={3} />

                <Footer prix={150} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4',
        width: '100%'
    },
    containerSneakers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 24
    },
    wrapperSneakers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sneakersImage: {
        width: '100%',
        height: '100%',
        zIndex: 1
    },

    wrapperSneakers: {
        position: 'relative',
        width: 132,
        height: 110,
    },
    backgroundSneakers: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -34}, { translateY: -52}, { rotate: '13deg' }],
        zIndex: 0
    },
    marque: {
        fontSize: 11,
        color: '#070e37',
        fontFamily: 'roboto-bold',
        letterSpacing: 1
    },
    modele: {
        fontSize: 11,
        color: '#070e37',
        fontFamily: 'roboto-bold',
        letterSpacing: 1
    },
    prix: {
        fontSize: 10,
        letterSpacing: 1,
        fontFamily: 'brawler-regular',
        color: "#333",
        marginTop: 6,
        marginBottom: 16
    }
})