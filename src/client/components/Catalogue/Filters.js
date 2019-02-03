import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Loupe, FiltreBlocActive, FiltreBlocInactive, FiltreLignesActive, FiltreLignesInactive } from '../../images/icons';

export default class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlock: false,
        }
    }

    handleOnPressFilters = type => {
        if (type === "Lignes") {
            this.setState({ isBlock: false });
            this.props.displaySneakers(false);
        } else {
            this.setState({ isBlock: true });
            this.props.displaySneakers(true);
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
                    <TouchableOpacity onPress={ 
                        () => {this.handleOnPressFilters("Lignes")} }>
                        {
                            this.state.isBlock ? 
                            <FiltreLignesInactive style={ styles.icon }></FiltreLignesInactive> :
                            <FiltreLignesActive style={ styles.icon }></FiltreLignesActive>
                            
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ 
                        () => {this.handleOnPressFilters("Bloc")} }>
                        {
                            this.state.isBlock ?
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
