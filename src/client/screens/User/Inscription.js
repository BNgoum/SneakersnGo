import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux';
import {requestRegister} from '../../store/reducers/user/action';

import Link from '../../components/Style/Text/Link';
import Title from '../../components/Style/Text/Title';
import TextLink from '../../components/Style/Text/TextLink';
import Background from '../../components/Style/Background';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import Circle from '../../components/Style/Circle';
import InputText from '../../components/Form/InputText';

import {Croix} from '../../images/icons';

class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            lastName: "",
            firstName: "",
            isFound: true,
            isEmailBlank: false,
            isPasswordBlank: false,
            isEmpty: false,
            isExist: false
        }
    }

    handleInputTextEmail = email => {
        this.setState({email});
    }

    handleInputTextFirstName = firstName => {
        this.setState({firstName});
    }

    handleInputTextLastName = lastName => {
        this.setState({lastName});
    }
    
    handleInputTextPassword = password => {
        this.setState({password});
    }

    checkInputNotBlank = () => {
        if ( this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" || this.state.password === "") {
            this.setState({ isEmpty: true })
        }
        else {
            this.setState({ isEmpty: false })
            
            return new Promise((resolve, reject) => {
                resolve(requestRegister(this.state.firstName, this.state.lastName, this.state.email, this.state.password))
            })
            .then((action) => {
                if (action.type === "AUTH_INSCRIPTION_NOT_VALIDATED") {
                    this.setState({
                        email: "",
                        password: "",
                        lastName: "",
                        firstName: ""
                    })
                }

                this.props.dispatch(action);
            })
            .catch((error) => { console.log('Erreur lors de l\‘inscription : ', error); });
        }
    }

    render() {
        console.log('porps : ', this.props.state.AuthenticationReducer)
        return (
            <View style={ styles.container }>
                <Background style={ styles.backgroundTop }/>
                <Link onPress={ () => this.props.navigation.navigate('Connexion')} style={ styles.wrapperLink }><Croix /></Link>

                <View style={ styles.wrapperTitle }>
                    <Title style={ styles.titleStyle }>{ "Inscription".toUpperCase() }</Title>
                    <Circle />
                </View>

                <View style={ styles.wrapperForm }>
                    <InputText placeholder="Prenom" style={ styles.inputTextStyle} sendPropsToParent={ this.handleInputTextFirstName } />
                    <InputText placeholder="Nom" style={ styles.inputTextStyle} sendPropsToParent={ this.handleInputTextLastName } />
                    <InputText placeholder="E-mail" style={ styles.inputTextStyle} sendPropsToParent={ this.handleInputTextEmail } />
                    <InputText placeholder="Mot de passe" style={ styles.inputTextStyle} isPassword={true} sendPropsToParent={ this.handleInputTextPassword } />
                    { this.state.isEmpty && <Text style={{ alignSelf: 'center' }}>Tous les champs doivent être remplis.</Text> }
                    { this.state.isExist && <Text style={{ alignSelf: 'center' }}>Cette adresse mail est déjà utilisée.</Text> }
                    { this.props.state.auth_inscription_not_validated !== "" && <Text style={{ alignSelf: 'center' }}>Votre inscription est prise en compte. Vous allez recevoir un mail de confirmation.</Text> }
                    <ButtonCTA onPress={ () => this.checkInputNotBlank() } style={ styles.wrapperBtn }><ButtonText>{ "Créer son compte".toUpperCase() }</ButtonText></ButtonCTA>
                </View>
                <Background style={ styles.backgroundBottom }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        flex: 1
    },
    backgroundTop: {
        top: -180,
        left: -20
    },
    wrapperTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40
    },
    titleStyle: {
        fontSize: 32,
        lineHeight: 40,
        marginBottom: 0
    },
    wrapperLink: {
        position: 'absolute',
        top: 0,
        right: 0,
        alignSelf: 'flex-end',
        padding: 20
    },
    linkStyle: {
        textTransform: 'none',
        fontFamily: "brawler-regular"
    },
    wrapperForm: {
        marginTop: 20,
    },
    inputTextStyle: {
        width: 'auto'
    },
    wrapperLinkBottom: {
        alignSelf: 'center'
    },
    wrapperBtn: {
        marginTop: 25,
        marginBottom: 13,
        alignSelf: 'center'
    },
    backgroundBottom: {
        bottom: -200,
        left: -50,
        zIndex: -1
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

export default connect(mapStateToProps, mapDispatchToProps)(Inscription)