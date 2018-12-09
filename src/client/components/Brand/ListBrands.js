import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Brand from './Brand';
import axios from "axios";

class ListBrands extends Component {

    componentDidMount() {
        this.getAllBrands();
    }

    getAllBrands = () => {
        // TODO: Export this function to action.js
        let config = {
            headers: {'Authorization': 'Bearer ' + this.props.state.AuthenticationReducer.isAdmin}
        }
        
        return axios.get('https://sneakersngo-api.herokuapp.com/brand', config)
        .then((responseJson) => {
            const action = {
                type: "GET_ALL_BRANDS", value: responseJson.data.data
            }
            return action;
        })
        .then((action) => this.props.dispatch(action))
        .catch(err => {
            console.log('Erreur lors de la tentative de récupération des marques : ', err);
        });
    }


    render() {
        console.log('Props liste brands : ', this.props)
        return (
            <View style={styles.wrapperListBrands}>
                <Text style={styles.title}>Les marques :</Text>
                <FlatList 
                    data={this.props.state.SneakersReducer.brands}
                    keyExtractor={(item) => item._id.toString()}
                    numColumns = {3}
                    renderItem={({item}) => <Brand dataBrand={item} navigation={this.props.navigation} /> }
                    style={styles.wrapperBrands}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListBrands)