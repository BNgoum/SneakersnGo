import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import { deleteModel, requestAllModelsByBrand } from '../../store/reducers/sneakers/action';

class Model extends Component {
    handleDeleteModel = () => {
        const token = this.props.state.AuthenticationReducer.isAdmin;
        const idModel = this.props.dataModel._id;
        const currentBrand = this.props.state.SneakersReducer.currentBrand;
        
        return new Promise((resolve, reject) => { resolve(deleteModel(token, idModel)) })
        .then(() => { return requestAllModelsByBrand(token, currentBrand) })
        .then((models) => {
            const action = { type: "GET_ALL_MODELS", value: models }
            return this.props.dispatch(action);
        })
        .catch((error) => console.log('Erreur lors de la promise suppression d\'un modèle : ', error))
    }

    handlePressModel = () => {
        return new Promise ( (resolve, reject) => {
            const action = { type: "SET_CURRENT_MODEL", value: this.props.dataModel._id }
            resolve(this.props.dispatch(action));
        })
        .then(() => this.props.navigation.navigate('AddSneakers'))
        .catch((error) => console.log('Erreur lors du passage vers l\'écran "Ajout modèle" : ', error))
    }

    render() {
        const pathToImage = '../../images/';

        return (
            <View style={styles.wrapperModel}>
                <TouchableOpacity onPress={this.handlePressModel} style={styles.wrapperModelname}>
                    <Text style={styles.title}>{this.props.dataModel.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleDeleteModel} style={styles.wrapperButtonDelete}>
                    <Image source={require(pathToImage + 'cancel.png')} style={styles.buttonDelete} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperModel: {
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
    wrapperModelname: {
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
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Model)