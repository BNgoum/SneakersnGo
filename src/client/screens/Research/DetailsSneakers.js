import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import SneakersDetails from '../../components/Catalogue/SneakersDetails';

export default class DetailsSneakers extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <SneakersDetails></SneakersDetails>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})