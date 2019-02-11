import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';

import { Loupe, Croix } from '../../images/icons';

export default class ResearchSneakers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.containerSearch }>
                    <TouchableOpacity style={ styles.buttonStyle }><Loupe /></TouchableOpacity>
                    <TextInput autoCapitalize="characters" onChangeText={text => this.setState({text})} value={this.state.text} placeholder={ "Rechercher".toUpperCase()} style={ styles.textInputStyle } />
                    <TouchableOpacity onPress={ () => this.setState({text: ""}) } style={ [styles.buttonStyle, styles.croixStyle] }><Croix /></TouchableOpacity>
                </View>
                <View style={ styles.containerContent }>
                    <View style={ styles.headerContent }>
                        <Text style={ styles.textHeaderContent }>{ "Recherches récentes".toUpperCase() }</Text>
                        <TouchableOpacity><Text style={ styles.textHeaderContent }>{ "Effacer".toUpperCase() }</Text></TouchableOpacity>
                    </View>
                    <View style={ styles.content }>
                        <TouchableOpacity>
                            <Text style={ styles.textContent }>{ "Balenciaga".toUpperCase() }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={ styles.textContent }>{ "Air Jordan".toUpperCase() }</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerSearch: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        width: '100%'
    },
    buttonStyle: {
        padding: 20,
        width: '15%'
    },
    croixStyle: {
        alignSelf: 'flex-end',
        width: '20%'
    },
    textInputStyle: {
        width: '70%',
        fontSize: 13,
        letterSpacing: 1,
        color: "#070e37",
        textTransform: 'uppercase',
        fontFamily: 'roboto-regular'
    },
    containerContent: {
        padding: 20
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40
    },
    textHeaderContent: {
        fontSize: 10,
        color: "#4a4a4a",
        letterSpacing: 1,
        fontFamily: 'roboto-regular'
    },
    textContent: {
        textTransform: 'uppercase',
        color: '#070e37',
        fontSize: 12,
        marginBottom: 16,
        fontFamily: 'roboto-regular'
    }
})
