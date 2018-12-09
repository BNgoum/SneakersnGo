import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from "axios";

import Model from './Model';

class ListModels extends Component {

    componentDidMount() {
        this.getAllModels();
    }

    getAllModels = () => {
        // TODO: Export this function to action.js
        let config = {
            headers: {'Authorization': 'Bearer ' + this.props.state.AuthenticationReducer.isAdmin}
        }

        let currentBrand = this.props.state.SneakersReducer.currentBrand;

        return axios.get('https://sneakersngo-api.herokuapp.com/model/brand/' + currentBrand, config)
        .then((responseJson) => {
            const action = {
                type: "GET_ALL_MODELS", value: responseJson.data.data
            }

            return this.props.dispatch(action)
        })
        .catch(err => {
            console.log('Erreur lors de la tentative de récupération des modèles : ', err);
        });
    }

    render() {
        return (
            <View style={styles.wrapperListBrands}>
                <Text style={styles.title}>Les modèles :</Text>
                <FlatList 
                    data={this.props.state.SneakersReducer.models}
                    keyExtractor={(item) => item._id.toString()}
                    numColumns = {3}
                    renderItem={({item}) => <Model dataModel={item} navigation={this.props.navigation} /> }
                    style={styles.wrapperModels}
                />
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
    wrapperModels: {
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