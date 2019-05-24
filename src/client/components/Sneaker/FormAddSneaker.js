import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Picker } from 'react-native';
import { connect } from 'react-redux';

import { createSneaker, requestAllSneakerByModel } from '../../store/reducers/sneakers/action';

class FormAddSneaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 39,
            color: "",
            originalPrice: 0,
            rentPrice: 0,
        }
    }
    
    handleValidateSneaker = () => {
        const token = this.props.state.AuthenticationReducer.isAdmin;
        const model = this.props.state.SneakersReducer.currentModel;

        return new Promise((resolve, reject) => {
            resolve(createSneaker(token, model, this.state.size, this.state.color, this.state.originalPrice, this.state.rentPrice));
        })
        .then(() => {
            return requestAllSneakerByModel(token, model)
        })
        .then((sneakers) => {
            const action = { type: "GET_ALL_SNEAKERS_BY_MODEL", value: sneakers }
            return this.props.dispatch(action)
        })
        .then(() => console.log('Its okay'))
        .catch((error) => console.log('Erreur lors de la création d\'une Sneaker : ', error))
    }

    render() {
        const pathToImage = '../../images/';

        return (
            <View style={styles.wrapperFormSneaker}>
                <Text style={styles.title}>Ajouter une nouvelle Sneaker</Text>

                <Picker
                    selectedValue={this.state.size}
                    style={ styles.picker }
                    onValueChange={(itemValue, itemIndex) => this.setState({size: itemValue})}>
                    <Picker.Item label="39" value="39" />
                    <Picker.Item label="40" value="40" />
                    <Picker.Item label="41" value="41" />
                    <Picker.Item label="42" value="42" />
                    <Picker.Item label="43" value="43" />
                </Picker>

                <TextInput
                    placeholder="Saisir les couleurs..."
                    onChangeText={ (color) => this.setState({color})}
                    style={styles.textinput}
                />

                <TextInput
                    placeholder="Saisir le prix original..."
                    keyboardType='numeric'
                    onChangeText={ (originalPrice) => this.setState({originalPrice})}
                    style={styles.textinput}
                />

                <TextInput
                    placeholder="Saisir le prix de location..."
                    keyboardType='numeric'
                    onChangeText={ (rentPrice) => this.setState({rentPrice})}
                    style={styles.textinput}
                />

                <TouchableOpacity onPress={this.handleValidateSneaker} style={styles.button}><Text>Valider</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperFormSneaker: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
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
        borderBottomWidth: 1,
        padding: 8,
        marginBottom: 16,
        width: 250
    },
    wrapperBurgerMenu: {
        width: 32,
        height: 32,
        marginTop: 8,
        marginLeft: 8,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    buttonBurgerMenu: {
        width: 32,
        height: 32,
    },
    picker: {
        width: 100
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

export default connect(mapStateToProps, mapDispatchToProps)(FormAddSneaker)