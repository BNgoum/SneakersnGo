import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux';

import ContainerTitle from '../../components/Style/Text/ContainerTitle';
import Title from '../../components/Style/Text/Title';
import BorderTitle from '../../components/Style/Text/BorderBottomTitle';
import { ArrowBottom } from '../../images/icons';

class HomeUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: "",
            marque: "",
            style: "",
            coloris: "",
            prix: "",
            prenom: ""
        }
    }

    componentWillMount() {
        this.setState({
            prenom: this.props.state.user.firstname
        })
    }

    render() {
        console.log('Props home user : ', this.props.state)
        const user = this.props.state.user;
        return (
            <ScrollView style={ styles.container }>
                <ContainerTitle style={ styles.containerTitle }>
                    <Title style={ styles.titleStyle }>{ "Hello ".toUpperCase() } { user.firstname.toUpperCase() }</Title>
                    <BorderTitle />
                </ContainerTitle>

                <View style={ styles.viewUser }>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('MesCommandes') } style={ styles.containerUser }>
                        <Text style={ styles.titleUser }>{ "Mes commandes".toUpperCase() }</Text>
                        { this.state.genre !== "" && <Text style={ styles.selectedUser }>{ this.state.genre.toUpperCase() }</Text> }
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewUser }>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Profil') } style={ styles.containerUser }>
                        <Text style={ styles.titleUser }>{ "Mon profil".toUpperCase() }</Text>
                        { this.state.marque !== "" && <Text style={ styles.selectedUser }>{ this.state.marque.toUpperCase() }</Text> }
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewUser }>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('CarnetAdresses') } style={ styles.containerUser }>
                        <Text style={ styles.titleUser }>{ "Carnet d'adresses".toUpperCase() }</Text>
                        { this.state.style !== "" && <Text style={ styles.selectedUser }>{ this.state.style.toUpperCase() }</Text> }
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewUser }>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('ChangePassword') } style={ styles.containerUser }>
                        <Text style={ styles.titleUser }>{ "Modifier mon mot de passe".toUpperCase() }</Text>
                        { this.state.coloris !== "" && <Text style={ styles.selectedUser }>{ this.state.coloris.toUpperCase() }</Text> }
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.viewUser }>
                    <TouchableOpacity style={ styles.containerUser }>
                        <Text style={ styles.titleUser }>{ "Notifications".toUpperCase() }</Text>
                        { this.state.prix !== "" && <Text style={ styles.selectedUser }>{ this.state.prix.toUpperCase() }</Text> }
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ [styles.viewUser, styles.lastViewUser] }>
                    <TouchableOpacity style={ styles.containerUser }>
                        <Text style={ styles.titleUser }>{ "Besoin d'informations".toUpperCase() }</Text>
                        { this.state.prix !== "" && <Text style={ styles.selectedUser }>{ this.state.prix.toUpperCase() }</Text> }
                        <ArrowBottom style={ styles.iconArrow }/>
                    </TouchableOpacity>
                </View>

                <View style={ styles.btnDeconnexion }>
                    <TouchableOpacity style={ styles.containerBtnDeconnexion }>
                        <Text style={ styles.titleUser }>{ "Deconnexion".toUpperCase() }</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    containerTitle: {
        width: 115,
        marginBottom: 50
    },
    titleStyle: {
        fontSize: 21,
        lineHeight: 25
    },
    texteResultats: {
        fontSize: 11,
        letterSpacing: 1,
        fontFamily: 'roboto-regular',
        color: '#9b9b9b',
        marginBottom: 22
    },
    viewUser: {
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4'
    },
    lastViewUser: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    btnDeconnexion: {
        borderTopWidth: 1,
        borderTopColor: '#c4c4c4',
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        marginTop: 32,
        marginBottom: 50,
    },
    containerBtnDeconnexion: {
        paddingVertical: 18,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerUser: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        paddingRight: 18,
    },
    titleUser: {
        fontSize: 15,
        color: '#070e37',
        fontFamily: 'roboto-regular',
        letterSpacing: 1,
    },
    selectedUser: {
        fontSize: 10,
        letterSpacing: 1,
        fontFamily: 'roboto-regular',
        color: '#9b9b9b',
    },
    iconArrow: {
        position: 'absolute',
        top: 24,
        right: 0,
        transform: [{ rotate: "-90deg" }]
    },
    containerButton: {
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 40
    }
})

const mapStateToProps = (state) => { 
    return {state: state.AuthenticationReducer};
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeUser)