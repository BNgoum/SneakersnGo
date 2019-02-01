import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { Loupe, FiltreBloc, FiltreLignes } from '../../images/icons';
import BackgroundSneakers from '../../components/Style/BackgroundSneakersListe';

export default class SneakersListeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={ styles.container }>
               <TouchableOpacity style={ styles.wrapperSneakersListe }>
                <View style={ styles.wrapperSneakers }>
                    <Image style={ styles.sneakersImage } source={require('../../images/balenciaga_liste.png')} />
                    <BackgroundSneakers style={ styles.backgroundSneakers }></BackgroundSneakers>
                </View>
                <View style={ styles.wrapperInformations }>
                    <Text style={ styles.marque }>{ 'Balenciaga'.toUpperCase() }</Text>
                    <Text style={ styles.modele }>{ 'Basket Triple S'.toUpperCase() }</Text>
                    <Text style={ styles.prix }>A partir de 50€ /jour</Text>
                </View>
               </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 130,
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    wrapperSneakersListe: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20
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
    sneakersImage: {
        width: 132,
        height: 110,
        zIndex: 1
    },
    wrapperInformations: {
        display: 'flex',
    },
    marque: {
        color: '#070e37',
        fontSize: 15,
        fontFamily: 'roboto-bold',
        marginBottom: 2
    },
    modele: {
        fontSize: 11,
        color: '#9b9b9b',
        marginBottom: 7
    },
    prix: {
        fontSize: 11,
        fontFamily: 'brawler-regular',
        color: '#070e37',
    }
})
