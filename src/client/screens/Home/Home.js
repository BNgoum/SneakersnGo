import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import {requestDisconnect} from '../../store/reducers/user/action';

import Container from '../../components/Style/Container';
import Nouveautes from './Nouveautes';
import Concept from './Concept';
import Instagram from './Instagram';
import Buy from './Buy';

class Home extends Component {

    disconnect = () => {
        return new Promise((resolve, reject) => { resolve(requestDisconnect()) })
        .then((action) => { this.props.dispatch(action) })
        .catch((error) => { console.log('Erreur lors de la déconnexion : ', error); })
    }

    render() {
        return (
            <Container>
                <Nouveautes></Nouveautes>
                <Concept></Concept>
                <Instagram></Instagram>
                <Buy></Buy>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 64,
    },
    title: {
        marginBottom: 13
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