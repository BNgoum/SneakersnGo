import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import BlockListBrands from '../Brand/BlockListBrands';
import ListModels from '../Model/ListModels';

displayContent = (content) => {
    if ( content === "sneakers") { return <Text>Sneakers ...</Text> }
    else if ( content === "brands" ) { return <BlockListBrands /> } 
    else { return <ListModels /> }
}

handleOnPress = (content) => {
    if ( content === "brands" ) { return () => this.props.navigation.navigate('AddBrands') } 
    else { return () =>  this.props.navigation.navigate('AddModels') }
}

class Block extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.wrapperBlock} onPress={() => this.props.navigation.navigate('AddBrands')}>
                <View style={styles.wrapperHeader}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.wrapperBody}>
                    { displayContent(this.props.content) }
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