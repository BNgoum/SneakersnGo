import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import { requestAddModel, requestAllModelsByBrand } from '../../store/reducers/sneakers/action';

class FormAddModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: ""
        }
    }
    
    handleValidateModel = () => {
        const token = this.props.state.AuthenticationReducer.isAdmin;
        const idBrand = this.props.state.SneakersReducer.currentBrand;

        return new Promise((resolve, reject) => {
            let models = [];
            models.push(this.state.model);
            
            resolve(requestAddModel(token, models, idBrand));
        })
        .then(() => {
            return requestAllModelsByBrand(token, idBrand)
        })
        .then((models) => {
            this.textInput.clear();

            const action = { type: "GET_ALL_MODELS", value: models }

            return this.props.dispatch(action)
        })
        .catch((error) => console.log('Erreur lors de l\'ajout du modèle : ', error))
    }

    render() {
        const pathToImage = '../../images/';

        return (
            <View style={styles.wrapperFormModel}>
                <TouchableOpacity onPress={ () => this.props.navigation.toggleDrawer() } style={styles.wrapperBurgerMenu}>
                    <Image source={require(pathToImage + 'menu.png')} style={styles.buttonBurgerMenu} />
                </TouchableOpacity>

                <Text style={styles.title}>Ajouter un nouveau modèle</Text>

                <TextInput
                    placeholder="Saisir un modèle..."
                    onChangeText={ (model) => this.setState({model})}
                    ref={input => { this.textInput = input }}
                    style={styles.textinput}
                />
                <TouchableOpacity onPress={this.handleValidateModel} style={styles.button}><Text>Valider</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperFormModel: {
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
        fontSize: 18,
        borderBottomWidth: 1
    },
    wrapperBurgerMenu: {
        width: 32,
        height: 32,
        marginTop: 8,
        marginLeft: 8,
    },
    buttonBurgerMenu: {
        width: 32,
        height: 32,
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

export default connect(mapStateToProps, mapDispatchToProps)(FormAddModel)