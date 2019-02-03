import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import { CoeurInactive, Croix } from '../../images/icons';
import SwiperSneakers from '../../components/Catalogue/SwiperSneakers';
import Price from '../../components/Catalogue/Price';
import TextLink from '../Style/Text/TextLink'
import ButtonText from '../Style/Button/ButtonText'
import Button from '../Style/Button/Button';
import Select from '../Form/Select';

export default class SneakersDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenDetails: false
        }
    }

    handleOnPressDetails = () => {
        this.setState({
            isOpenDetails: !this.state.isOpenDetails
        })
    }

    render() {
        return (
            <ScrollView style={ styles.container }>
                <TouchableOpacity>
                    <CoeurInactive style={ styles.wishlistPicto }></CoeurInactive>
                </TouchableOpacity>
                
                <SwiperSneakers></SwiperSneakers>

                <Text style={ styles.description }>Petit texte court pour expliquer ou décrire la paire de sneakers dans la fiche produit.</Text>

                {
                    this.state.isOpenDetails ? 
                    <View style={ styles.wrapperDetailsDeplie }>
                        <TouchableOpacity onPress={ () => this.handleOnPressDetails() }  style={ styles.wrapperLinkDetail }>
                            <Text style={ styles.linkDetailsDeplie }>{ 'Plus de détails'.toUpperCase() }</Text>
                            <Croix></Croix>
                        </TouchableOpacity>
                        <View style={ styles.wrapperDetailsText }>
                            <Text style={ styles.titleDetails }>Composition extérieure</Text>
                            <Text style={ styles.textDetails }>Coton 100%</Text>
                            <Text style={ styles.textDetails }>Cuir 100%</Text>
                        </View>
                        <View style={ styles.wrapperDetailsText }>
                            <Text style={ styles.titleDetails }>Composition de la semelle</Text>
                            <Text style={ styles.textDetails }>Caoutchouc 100%</Text>
                        </View>
                    </View> :
                    <TouchableOpacity style={ styles.linkDetails } onPress={ () => this.handleOnPressDetails() }>
                        <TextLink>{ 'Plus de détails'.toUpperCase() }</TextLink>
                    </TouchableOpacity>
                }

                <View style={ styles.wrapperSelect }>
                    <Select ></Select>
                    <Select ></Select>
                </View>
                
                <Price price={50}></Price>

                <Button style={ styles.buttonValidate }>
                    <ButtonText>{ 'Je les veux'.toUpperCase() }</ButtonText>
                </Button>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingBottom: 40
    },
    wishlistPicto: {
        alignSelf: 'flex-end',
        marginBottom: 32
    },
    description: {
        fontSize: 13,
        color: '#4a4949',
        fontFamily: 'brawler-regular',
        lineHeight: 20,
        letterSpacing: 1,
        marginVertical: 16
    },
    linkDetails: {
        marginBottom: 24
    },
    wrapperLinkDetail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    wrapperDetailsDeplie: {
        borderBottomWidth: 1,
        borderBottomColor: '#070e37',
        marginBottom: 24
    },
    linkDetailsDeplie: {
        color: '#070e37',
        fontSize: 13,
        letterSpacing: 1,
        fontFamily: 'roboto-bold'
    },
    wrapperDetailsText: {
        marginBottom: 16
    },
    titleDetails: {
        fontFamily: 'brawler-regular',
        fontSize: 12,
        color: '#4a4a4a',
        lineHeight: 26,
        letterSpacing: 1
    },
    textDetails: {
        fontFamily: 'brawler-regular',
        fontSize: 12,
        color: '#9b9b9b',
        lineHeight: 20,
        letterSpacing: 1
    },
    buttonValidate: {
        alignSelf: 'center',
        marginBottom: 40
    },
    wrapperSelect: {
        marginBottom: 28
    }
})
