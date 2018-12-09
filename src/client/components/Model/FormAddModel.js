import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class FormAddModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: ""
        }
    }

    render() {
        return (
            <View style={styles.wrapperFormModel}>
                <Text style={styles.title}>Ajouter une nouveau modèle</Text>
                <TextInput
                    placeholder="Saisir un modèle..."
                    onChangeText={ (model) => this.setState({model})}
                    style={styles.textinput}
                />
                <TouchableOpacity style={styles.button}><Text>Valider</Text></TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(FormAddModel)