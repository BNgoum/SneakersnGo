import React, { Component } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';

import Tab from '../../components/Tab/TabDetailsCommande';
import TitrePointRouge from '../../components/Style/TitrePointRouge';
import SneakersRecap from '../../components/User/DetailsCommande/SneakersRecap';
import Paiement from '../../components/User/DetailsCommande/Paiement';
import TotalCommande from '../../components/User/DetailsCommande/TotalCommande';
import Total from '../../components/User/DetailsCommande/Total';
import Livraison from '../../components/User/DetailsCommande/Livraison';
import LienFacture from '../../components/User/DetailsCommande/LienFacture';
import CommandeAVenir from '../../components/User/DetailsCommande/CommandeAVenir';

import GroupeMessages from '../../components/User/Messages/GroupeMessages';
import InputText from '../../components/Form/InputText';
// import InputText from '../../components/User/Messages/InputText';

import { ArrowBottomLine, Camera } from '../../images/icons';

export default class DetailsCommande extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetails: true,
            message: ""
        }
    }

    handleDisplayTabContent = isDetails => {
        if ( isDetails ) { this.setState({ isDetails: true }) }
        else { this.setState({ isDetails: false }) }
    }

    handleOnChangeMessage = message => {
        this.setState({
            message
        })
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

                <View style={ styles.wrapperInputText }>
                    <Camera style={ styles.pictoStyleLeft } />
                    <InputText 
                    sendPropsToParent={ this.handleOnChangeMessage }
                    placeholder="Taper votre message"
                    style={ styles.wrapperInput } />
                    <ArrowBottomLine style={ styles.pictoStyleRight } />
                </View>
                
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
        flex: 1,
        position: 'relative',
        justifyContent: 'flex-end'
    },
    pictoStyleLeft: {
        position: 'absolute',
        top: 20,
        left: 20
    },
    pictoStyleRight: {
        position: 'absolute',
        top: 28,
        right: 20,
        transform: [{ rotate: "-90deg" }]
    },
    wrapperInputText: {
        position: 'relative',
        paddingLeft: 62,
        paddingRight: 45,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4',
        height: 60
    }
})