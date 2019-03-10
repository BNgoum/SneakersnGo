import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import ContainerTitle from '../../../components/Style/Text/ContainerTitle';
import Title from '../../../components/Style/Text/Title';
import BorderTitle from '../../../components/Style/Text/BorderBottomTitle';
import { ArrowBottom } from '../../../images/icons';

export default class ConditionsGenerales extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <ScrollView style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "Conditions Générales".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <View style={ styles.viewUser }>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Objet') } style={ styles.containerCG }>
                        <Text style={ styles.titleUser }>{ "Objet".toUpperCase() }</Text>
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewUser }>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Articles') } style={ styles.containerCG }>
                        <Text style={ styles.titleUser }>{ "Les articles".toUpperCase() }</Text>
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewUser }>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Commande') } style={ styles.containerCG }>
                        <Text style={ styles.titleUser }>{ "La commande".toUpperCase() }</Text>
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewUser }>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Usage') } style={ styles.containerCG }>
                        <Text style={ styles.titleUser }>{ "Usage".toUpperCase() }</Text>
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewUser }>
                    <TouchableOpacity style={ styles.containerCG } onPress={ () => this.props.navigation.navigate('DonneesPersonnelles') } >
                        <Text style={ styles.titleUser }>{ "Données personnelles".toUpperCase() }</Text>
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewUser }>
                    <TouchableOpacity style={ styles.containerCG } onPress={ () => this.props.navigation.navigate('RetractationAnnulation') } >
                        <Text style={ styles.titleUser }>{ "Droit de rétractation".toUpperCase() }</Text>
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>
                
                <View style={ [styles.viewUser, styles.lastViewUser] }>
                    <TouchableOpacity style={ styles.containerCG } onPress={ () => this.props.navigation.navigate('ProprieteIntellectuelle') } >
                        <Text style={ styles.titleUser }>{ "Propriété Intellectuelle".toUpperCase() }</Text>
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>
                
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    containerTitle: {
        width: 125,
        marginBottom: 50
    },
    titleStyle: {
        fontSize: 21,
        lineHeight: 25
    },
    viewUser: {
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4'
    },
    lastViewUser: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        marginBottom: 60
    },
    containerCG: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        paddingRight: 18,
    },
    titleUser: {
        fontSize: 15,
        color: '#070e37',
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
    },
    iconArrow: {
        position: 'absolute',
        top: 24,
        right: 0,
        transform: [{ rotate: "-90deg" }]
    }
})