import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import BackgroundSneakers from '../../components/Style/BackgroundSneakersListe';
import InputText from '../../components/Form/InputText';

export default class SneakersAsk extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <InputText></InputText>
                <InputText></InputText>
                <InputText></InputText>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
    }
})
