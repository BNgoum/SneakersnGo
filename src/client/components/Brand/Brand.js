import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import { deleteBrand, requestAllBrands } from '../../store/reducers/sneakers/action';


class Brand extends Component {

    handlePressBrand = () => {
        return new Promise ( (resolve, reject) => {
            const action = { type: "SET_CURRENT_BRAND", value: this.props.dataBrand._id }
            resolve(this.props.dispatch(action));
        })
        .then(() => this.props.navigation.navigate('AddModels'))
        .catch((error) => console.log('Erreur lors du passage vers l\'écran "Ajout modèle" : ', error))
    }

    handleDeleteBrand = () => {
        const token = this.props.state.AuthenticationReducer.isAdmin;
        const idBrand = this.props.dataBrand._id;

        return new Promise((resolve, reject) => {
            resolve(deleteBrand(token, idBrand))
        })
        .then(() => {
            return requestAllBrands(token);
        })
        .then((brands) => {
            const action = { type: "GET_ALL_BRANDS", value: brands }

            return this.props.dispatch(action);
        })
        .catch((error) => console.log('Erreur lors de la promise suppression d\'une marque : ', error))
    }

    render() {
        const pathToImage = '../../images/';

        return (
            <View style={styles.wrapperBrand}>
                <TouchableOpacity onPress={this.handlePressBrand} style={styles.wrapperBrandname}>
                    <Text style={styles.title}>{this.props.dataBrand.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleDeleteBrand} style={styles.wrapperButtonDelete}>
                    <Image source={require(pathToImage + 'cancel.png')} style={styles.buttonDelete} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperBrand: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
        marginRight: 4
    },
    wrapperBrandname: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 4,
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
    },
    wrapperButtonDelete: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 4,
        paddingRight: 12,
    },
    buttonDelete: {
        width: 12,
        height: 12
    }
})

const mapStateToProps = (state) => { 
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brand)