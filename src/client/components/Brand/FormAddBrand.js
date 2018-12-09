import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { requestStoreBrand, requestAddBrand } from '../../store/reducers/sneakers/action';
import axios from "axios";

class FormAddBrand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marque: ""
        }
    }

    handleStoreBrand = () => {
        let arrayBrands = [];
        arrayBrands.push(this.state.marque);

        const action = { type: "STORE_BRANDS", value: arrayBrands }

        return new Promise ((resolve, reject) => {resolve(this.props.dispatch(action))})
        .then(() => {requestAddBrand(this.props.state.AuthenticationReducer.isAdmin, this.props.state.SneakersReducer.brandsToAdd)})
        .then(() => {
            const action = { type: "STORE_BRANDS", value: "" }

            this.props.dispatch(action)
        })
        .then(() => {
            // TODO: export this function to action.js
            let config = {
                headers: {'Authorization': 'Bearer ' + this.props.state.AuthenticationReducer.isAdmin}
            }
            
            return axios.get('https://sneakersngo-api.herokuapp.com/brand', config)})
        .then((responseJson) => {
            const action = {
                type: "GET_ALL_BRANDS", value: responseJson.data.data
            }
            this.props.dispatch(action);
        })
        .catch((error) => console.log("Erreur lors de requestAddBrand de la Promise : ", error))
    }

    render() {
        return (
            <View style={styles.wrapperFormBrand}>
                <Text style={styles.title}>Ajouter une nouvelle marque</Text>
                <TextInput 
                    placeholder="Saisir une marque..."
                    onChangeText={ (marque) => this.setState({marque})}
                    style={styles.textinput}
                />
                <TouchableOpacity onPress={this.handleStoreBrand} style={styles.button}><Text>Valider</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperFormBrand: {
        marginBottom: 64,
        backgroundColor: "#dedede"
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 16
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        padding: 8,
        marginTop: 16,
        marginBottom: 8
    },
    textinput: {
        alignSelf: 'center',
        fontSize: 18
    }
})

const mapStateToProps = (state) => { 
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddBrand)