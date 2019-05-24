import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, TouchableOpacity, Image } from 'react-native';

import { connect } from 'react-redux';
import {requestDisconnect} from '../../store/reducers/user/action';

import Block from '../../components/Dashboard/Block';

class Home extends Component {
    disconnect = () => {
        return new Promise((resolve, reject) => { resolve(requestDisconnect()) })
        .then((action) => { this.props.dispatch(action) })
        .catch((error) => { console.log('Erreur lors de la déconnexion : ', error); })
    }

    render() {
        const pathToImage = '../../images/';
        const user = this.props.state.AuthenticationReducer.user
        return (
            <ScrollView style={styles.wrapperScrollView}>
                <View style={styles.wrapperHeader}>
                    <View style={styles.wrapperTitle}>
                        <Text style={styles.user}>Hello {user === null ? "Admin" : user.firstname}</Text>
                    </View>
                </View>

                <View style={styles.wrapperBody}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddBrands')} style={styles.buttonAddSneaker}><Text>Ajouter une Sneaker</Text></TouchableOpacity>

                    <Block title="Les sneakers" content="sneakers" navigation={this.props.navigation} />

                    <Block title="Les marques" content="brands" navigation={this.props.navigation} />
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapperScrollView: {
        marginBottom: 16,
        paddingBottom: 64
    },
    wrapperHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 32
    },
    wrapperTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    user: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
    },
    buttonDisconnect: {
        alignSelf: 'center',
        backgroundColor: '#dedede',
        marginTop: 32,
        padding: 16
    },
    buttonBurgerMenu: {
        width: 32,
        height: 32,
        alignSelf: 'flex-start'
    },
    buttonAddSneaker: {
        alignSelf: 'center',
        backgroundColor: '#dedede',
        marginTop: 16,
        marginBottom: 16,
        padding: 16
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)