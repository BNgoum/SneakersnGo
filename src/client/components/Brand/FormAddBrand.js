import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { requestAllBrands, requestAddBrand } from '../../store/reducers/sneakers/action';

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

        const token = this.props.state.AuthenticationReducer.isAdmin;

        return new Promise ((resolve, reject) => {resolve(this.props.dispatch(action))})
        .then(() => {
            const brandsToAdd = this.props.state.SneakersReducer.brandsToAdd;
            return requestAddBrand(token, brandsToAdd)
        })
        .then(() => {
            this.textInput.clear();
            const action = { type: "STORE_BRANDS", value: "" }
            return this.props.dispatch(action)
        })
        .then(() => {
            return requestAllBrands(token);
        })
        .then((brands) => {
            const action = { type: "GET_ALL_BRANDS", value: brands }
            return this.props.dispatch(action);
        })
        .catch((error) => console.log("Erreur lors de requestAddBrand de la Promise : ", error))
    }

    render() {
        const pathToImage = '../../images/';

        return (
            <View style={styles.wrapperFormBrand}>
                <TouchableOpacity onPress={ () => this.props.navigation.toggleDrawer() } style={styles.wrapperBurgerMenu}>
                    <Image source={require(pathToImage + 'menu.png')} style={styles.buttonBurgerMenu} />
                </TouchableOpacity>
                <Text style={styles.title}>Ajouter une nouvelle marque</Text>
                <TextInput 
                    placeholder="Saisir une marque..."
                    onChangeText={ (marque) => this.setState({marque})}
                    ref={input => { this.textInput = input }}
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
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddBrand)