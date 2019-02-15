import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

import BackgroundSneakers from '../../components/Style/BackgroundSneakersListe';
import Badge from '../../components/Style/Badge';
import { ArrowBottom } from '../../images/icons';

export default class BlockSneakers extends Component {
    render() {
        return (
            <TouchableOpacity style={ styles.wrapperSneakersListe }>
                <View style={ styles.wrapperSneakers }>
                    <Image style={ styles.sneakersImage } source={require('../../images/balenciaga_liste.png')} />
                    <Badge numberBadge="2" addedStyle={ styles.badgeStyle }/>
                    <BackgroundSneakers style={ styles.backgroundSneakers }></BackgroundSneakers>
                </View>
                <View style={ styles.wrapperInformations }>
                    <Text style={ styles.statut }>{ 'A venir'.toUpperCase() }</Text>
                    <Text style={ styles.date }>{ 'Fev.2019'.toUpperCase() }</Text>
                    <Text style={ styles.nbArticles }>1 article</Text>
                    <Text style={ styles.total }>Total: 150 €</Text>
                    <ArrowBottom style={ styles.arrowStyle } />
                </View>
            </TouchableOpacity>
        )
    }
    
}

const styles = StyleSheet.create({
    wrapperSneakersListe: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        height: 130,
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4',
        marginBottom: 18
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
        position: 'relative'
    },
    statut: {
        color: '#070e37',
        fontSize: 15,
        fontFamily: 'roboto-bold',
        marginBottom: 2,
        letterSpacing: 1
    },
    date: {
        fontSize: 11,
        color: '#9b9b9b',
        marginBottom: 7,
        letterSpacing: 1
    },
    total: {
        fontSize: 9,
        fontFamily: 'brawler-regular',
        color: '#070e37',
        letterSpacing: 1
    },
    nbArticles: {
        fontSize: 9,
        fontFamily: 'brawler-regular',
        color: '#070e37',
        letterSpacing: 1
    },
    arrowStyle: {
        position: 'absolute',
        right: -30,
        top: '50%',
        transform: [{ translateY: -30}, { rotate: '-90deg' }]
    },
    badgeStyle: {
        position: 'absolute',
        top: 20,
        right: 10,
        zIndex: 50
    }
})