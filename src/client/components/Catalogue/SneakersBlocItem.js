import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { Loupe, FiltreBloc, FiltreLignes } from '../../images/icons';
import BackgroundSneakersBloc from '../../components/Style/BackgroundSneakersBloc';

export default class SneakersListeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={ styles.container }>
               <TouchableOpacity style={ styles.wrapperSneakersBloc }>
                    <View style={ styles.wrapperInformations }>
                        <Text style={ styles.marque }>{ 'Balenciaga'.toUpperCase() }</Text>
                        <Text style={ styles.modele }>{ 'Basket Triple S'.toUpperCase() }</Text>
                        <Text style={ styles.prix }>A partir de 50€ /jour</Text>
                    </View>
                    <View style={ styles.wrapperSneakers }>
                        <Image style={ styles.sneakersImage } source={require('../../images/balenciaga_liste.png')} />
                        <BackgroundSneakersBloc style={ styles.backgroundSneakers }></BackgroundSneakersBloc>
                    </View>
               </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapperSneakersBloc: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 0
    },
    wrapperSneakers: {
        position: 'relative',
        width: 253,
        height: 180,
    },
    backgroundSneakers: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -92}, { translateY: -163}, { rotate: '13deg' }],
        zIndex: 0
    },
    sneakersImage: {
        width: 253,
        height: 180,
        zIndex: 1
    },
    wrapperInformations: {
        display: 'flex',
        marginLeft: 120,
        zIndex: 1
    },
    marque: {
        color: '#070e37',
        fontSize: 28,
        fontFamily: 'roboto-bold',
        marginBottom: 2
    },
    modele: {
        fontSize: 15,
        color: '#9b9b9b',
        marginBottom: 7
    },
    prix: {
        fontSize: 11,
        fontFamily: 'brawler-regular',
        color: '#070e37',
    }
})
