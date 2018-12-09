import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import axios from "axios";

class ListModels extends Component {

    render() {
        return (
            <View style={styles.wrapperListBrands}>
                <Text style={styles.title}>Les modèles :</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperListBrands: {
        backgroundColor: "#dedede"
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 16
    },
    wrapperBrands: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

const mapStateToProps = (state) => { 
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListModels)