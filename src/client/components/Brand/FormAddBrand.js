import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class FormAddBrand extends Component {
    render() {
        return (
            <View>
                <Text>Ajouter une marque</Text>
                <TextInput 
                    placeholder="Saisir une marque..."
                    // onChangeText={ (marque) => this }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => { 
    return { state: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddBrand)