import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Loupe, FiltreBlocActive, FiltreBlocInactive, FiltreLignesActive, FiltreLignesInactive } from '../../images/icons';

export default class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lignes: true,
            bloc: false
        }
    }

    handleOnPressFilters = type => {
        if (type === "Lignes") {
            this.setState({
                lignes: true,
                bloc: false
            })
        } else {
            this.setState({
                lignes: false,
                bloc: true
            })
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <TouchableOpacity style={ styles.buttonStyle }><Loupe></Loupe></TouchableOpacity>
                <TouchableOpacity>
                    <Text style={ styles.textStyle }>{ 'Filtrer'.toUpperCase() }</Text>
                </TouchableOpacity>
                <View style={ styles.wrapperFiltres }>
                    <TouchableOpacity onPress={ () => this.handleOnPressFilters("Lignes") }>
                        {
                            this.state.lignes ? 
                            <FiltreLignesActive style={ styles.icon }></FiltreLignesActive> :
                            <FiltreLignesInactive style={ styles.icon }></FiltreLignesInactive>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => this.handleOnPressFilters("Bloc") }>
                        {
                            this.state.bloc ?
                            <FiltreBlocActive style={ styles.icon }></FiltreBlocActive> :
                            <FiltreBlocInactive style={ styles.icon }></FiltreBlocInactive>
                        }
                    </TouchableOpacity>
                </View>
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
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    buttonStyle: {
        padding: 20
    },
    icon: {
        marginHorizontal: 4
    },
    wrapperFiltres: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20
    }
})
