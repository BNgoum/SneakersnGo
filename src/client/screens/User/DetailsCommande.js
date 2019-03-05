import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text} from 'react-native';

import Tab from '../../components/Tab/TabDetailsCommande';
import TitrePointRouge from '../../components/Style/TitrePointRouge';
import SneakersRecap from '../../components/Panier/SneakersRecap';
import Address from '../../components/User/Address';
import Link from '../../components/Style/Text/Link';
import TextLink from '../../components/Style/Text/TextLink';
import Paiement from '../../components/User/Paiement';

import { ArrowBottomLine } from '../../images/icons';

export default class DetailsCommande extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetails: true,
        }
    }

    handleDisplayTabContent = isDetails => {
        if ( isDetails ) { this.setState({ isDetails: true }) }
        else { this.setState({ isDetails: false }) }
    }

    displayContent = () => {
        if( this.state.isDetails ) {
            return <ScrollView style={ styles.wrapperDetailsCommande }>
                <View style={ styles.headerCommande }>
                    <Text style={ [styles.title, styles.styleTitle] }>{"Commande à venir".toUpperCase()}</Text>
                    <View style={ styles.wrapperDate }>
                        <Text style={ [styles.dateCommandeLibelle, styles.styleInfo] }>{"Date de la commande : ".toUpperCase()}</Text>
                        <Text style={ [styles.dateCommande, styles.styleText] }>{"5 Févr. 2019".toUpperCase()}</Text>
                    </View>
                </View>

                <View style={ styles.locationContainer }>
                    <TitrePointRouge title="Location (1)" styleComponent={ styles.titleStyle } />
                    <SneakersRecap />
                </View>

                <View style={ styles.livraisonContainer }>
                    <TitrePointRouge title="Informations sur la livraison" />
                    <Text style={ [styles.sousTitreLivraison, styles.sousTitre] }>{ "Remise en main propre à : ".toUpperCase() }</Text>
                    
                    <Address adresseNom="E-studios" adresseRue="79 boulevard Richard Lenoir" adresseCodePostal="75 011 Paris" adressePays="France" />
                </View>

                <Paiement typeCarte="Mastercard" numeroCarte={7654} dateExp="04/21" noms="John Doe" />

                <View style={ styles.telechargerFacture }>
                    <Link style={ styles.linkTelechargerFacture }><ArrowBottomLine /><TextLink style={ styles.textLinkStyle }>Télécharger la facture</TextLink></Link>
                </View>
            </ScrollView>
            
        } else {
            return <View style={ styles.wrapperSneakersAsk }>
                <Text>Messages</Text>
            </View>
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <Tab displayTabContent={ this.handleDisplayTabContent }/>
                {  this.displayContent() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperDetailsCommande: {
        marginBottom: 90
    },
    headerCommande: {
        marginHorizontal: 20,
        marginTop: 35,
        marginBottom: 26,
    },
    wrapperDate: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    styleTitle: {
        fontFamily: 'roboto-bold',
        letterSpacing: 1,
        color: '#070e37',
    },
    styleText: {
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
        color: '#070e37'
    },
    styleInfo: {
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
        color: '#9b9b9b'
    },
    title: {
        fontSize: 15,
    },
    dateCommandeLibelle: {
        fontSize: 11
    },
    dateCommande: {
        fontSize: 11
    },
    livraisonContainer: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    titleStyle: {
        marginLeft: 20,
        marginBottom: 10
    },
    locationContainer: {
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1
    },
    sousTitre: {
        fontSize: 10,
        fontFamily: 'roboto-regular',
        color: '#9b9b9b',
        letterSpacing: 1
    },
    sousTitreLivraison: {
        marginTop: 11,
        marginBottom: 18
    },
    paiementContainer: {
        marginTop: 37,
        paddingHorizontal: 20
    },
    telechargerFacture: {
        marginTop: 35
    },
    linkTelechargerFacture: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLinkStyle: {
        fontFamily: 'roboto-regular',
        marginLeft: 12
    }
})