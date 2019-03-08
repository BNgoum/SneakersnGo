import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text} from 'react-native';

import Tab from '../../components/Tab/TabDetailsCommande';
import TitrePointRouge from '../../components/Style/TitrePointRouge';
import SneakersRecap from '../../components/Panier/SneakersRecap';
import Paiement from '../../components/User/DetailsCommande/Paiement';
import TotalCommande from '../../components/User/DetailsCommande/TotalCommande';
import Total from '../../components/User/DetailsCommande/Total';
import Livraison from '../../components/User/DetailsCommande/Livraison';
import LienFacture from '../../components/User/DetailsCommande/LienFacture';
import CommandeAVenir from '../../components/User/DetailsCommande/CommandeAVenir';

import GroupeMessages from '../../components/User/Messages/GroupeMessages';
import InputText from '../../components/User/Messages/InputText';

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
                <CommandeAVenir date="5 Févr. 2019" />

                <View style={ styles.locationContainer }>
                    <TitrePointRouge title="Location (1)" styleComponent={ styles.titleStyle } />
                    <SneakersRecap />
                </View>

                <Livraison />

                <Paiement typeCarte="Mastercard" numeroCarte={7654} dateExp="04/21" noms="John Doe" />

                <TotalCommande sousTotal="150 €" livraison="Gratuite" />

                <Total total="152,50 €" />

                <LienFacture />
            </ScrollView>
            
        } else {
            return <View style={ styles.wrapperViewMessage }>
                <ScrollView style={ styles.wrapperMessage }>
                    <GroupeMessages heure="11:35"/>
                </ScrollView>

                <InputText style={ styles.inputTextStyle } />
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
    container: {
        flex: 1
    },
    wrapperDetailsCommande: {
    },
    wrapperMessage: {
    },
    titleStyle: {
        marginLeft: 20,
        marginBottom: 10
    },
    locationContainer: {
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1
    },
    wrapperViewMessage: {
        position: 'relative'
    },
    inputTextStyle: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
})