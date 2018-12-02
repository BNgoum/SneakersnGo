import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import {requestDisconnect} from '../../store/reducers/user/action';

class Home extends Component {
    disconnect = () => {
        return new Promise((resolve, reject) => { resolve(requestDisconnect()) })
        .then((action) => { this.props.dispatch(action) })
        .catch((error) => { console.log('Erreur lors de la déconnexion : ', error); })
    }

    render() {
        return (
            <View>
                <Text>Hello Admin !</Text>
                <Button onPress={() => this.props.navigation.navigate('AddSneakers')} title="Ajouter une paire"/>
                <TouchableOpacity onPress={this.disconnect} title="Se déconnecter"><Text>Se déconnecter</Text></TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)