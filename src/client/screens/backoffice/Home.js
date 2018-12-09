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
                <Text style={styles.title}>Hello Admin !</Text>
                <Button onPress={() => this.props.navigation.navigate('AddBrands')} title="Ajouter une paire"/>
                <TouchableOpacity onPress={this.disconnect} style={styles.button} title="Se déconnecter"><Text>Se déconnecter</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 16,
        marginBottom: 32
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#dedede',
        marginTop: 32,
        padding: 16
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)