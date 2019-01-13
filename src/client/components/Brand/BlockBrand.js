import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { deleteBrand, requestAllBrands } from '../../store/reducers/sneakers/action';


class BlockBrand extends Component {
    render() {
        return (
            <View style={styles.wrapperBrand}>
                <Text style={styles.title}>{this.props.dataBrand.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperBrand: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 25,
        marginTop: 4,
        marginBottom: 12,
        marginLeft: 4,
        marginRight: 8
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    }
})

export default BlockBrand;