import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import BlockListBrands from '../Brand/BlockListBrands';
import BlockListSneakers from '../Sneaker/BlockListSneakers';
import ListModels from '../Model/ListModels';

class Block extends Component {
    displayContent = (content) => {
        if ( content === "sneakers") { return <BlockListSneakers /> }
        else { return <BlockListBrands /> } 
    }
    
    handleOnPress = (content) => {
        if ( content === "brands" ) { return this.props.navigation.navigate('AddBrands') }
        else { return this.props.navigation.navigate('AllSneakers') }
    }

    render() {
        return (
            <TouchableOpacity style={styles.wrapperBlock} onPress={ () => this.handleOnPress(this.props.content) }>
                <View style={styles.wrapperHeader}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.wrapperBody}>
                    { this.displayContent(this.props.content) }
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    wrapperBlock: {
        display: 'flex',
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 8,
        marginTop: 8
    },
    wrapperHeader: {
        backgroundColor: '#dedede',
        padding: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    wrapperBody: {
        height: 125
    },
    title: {
        fontSize: 24,
        marginLeft: 8
    }
})

export default Block;