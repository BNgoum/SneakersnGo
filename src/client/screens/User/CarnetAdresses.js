import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import Title from '../../components/Style/Text/Title';
import BorderTitle from '../../components/Style/Text/BorderBottomTitle';
import { Add } from '../../images/icons';

import CarnetAdresse from '../../components/User/CarnetAdresse'

export default class CarnetAdresses extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <ScrollView>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "Carnet d'adresses".toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <View style={ styles.wrapperCarnetAdresses }>
                    <CarnetAdresse navigation={this.props.navigation} titleAddress="Domicile" infoAddress="1 rue Duguay Trouin" infoCodePostal="75 015 Paris" infoPays="France" />
                    <CarnetAdresse navigation={this.props.navigation} titleAddress="E-studios" infoAddress="79 boulevard Richard Lenoir" infoCodePostal="75 011 Paris" infoPays="France" />
                </View>

                <TouchableOpacity style={ styles.wrapperButton }><Add /></TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    containerTitle: {
        width: 115,
        marginBottom: 50,
        marginTop: 20,
        marginHorizontal: 20
    },
    titleStyle: {
        fontSize: 21,
        lineHeight: 25
    },
    wrapperButton: {
        alignSelf: 'center',
        marginTop: 35
    },
    wrapperCarnetAdresses: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    }
})
