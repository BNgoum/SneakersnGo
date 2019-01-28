import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import {requestDisconnect} from '../../store/reducers/user/action';

import Container from '../../components/Style/Container';
import Nouveautes from './Nouveautes';
import Concept from './Concept';
import Instagram from './Instagram';
import Buy from './Buy';
import Link from '../../components/Style/Text/Link';
import Background from '../../components/Style/Background';

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
                <Link style={ styles.linkText }>{'Besoin d\'assistance ?'.toUpperCase()}</Link>
                <Background style={ styles.backgroundFooter }></Background>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 13
    },
    linkText: {
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 60,
        zIndex: 5,
        textTransform: 'uppercase'
    },
    backgroundFooter: {
        bottom: -180,
        top: 'auto',
        left: -60
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