import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

import {requestLogin} from '../../store/reducers/user/action';

const jwtDecode = require('jwt-decode');
const emailAdmin = "aze";

import Link from '../../components/Style/Text/Link';
import Title from '../../components/Style/Text/Title';
import TextLink from '../../components/Style/Text/TextLink';
import Background from '../../components/Style/Background';
import ButtonCTA from '../../components/Style/Button/Button';
import ButtonText from '../../components/Style/Button/ButtonText';
import Circle from '../../components/Style/Circle';
import InputText from '../../components/Form/InputText';

class Connexion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isFound: true,
            isEmailBlank: false,
            isPasswordBlank: false,
            resetText: false
        }
    }

    handleInputTextEmail = email => {
        this.setState({email});
    }
    
    handleInputTextPassword = password => {
        this.setState({password});
    }

    checkInputNotBlank = () => {
        if ( this.state.email === "" && this.state.password === "" ) {
            this.setState({ isEmailBlank: true, isPasswordBlank: true })
        }
        else if ( this.state.email === "" ) { this.setState({ isEmailBlank: true }) }
        else if ( this.state.password === "" ) { this.setState({ isPasswordBlank: true }) }
        else {
            return new Promise((resolve, reject) => { resolve(requestLogin(this.state.email, this.state.password)) })
            .then((user) => {
                if ( user.type === "AUTH_MESSAGE_ERROR") {
                    this.props.dispatch(user);
                } else {
                    const token = user.token;
                    const decoded = jwtDecode(token);

                    if(decoded.email === emailAdmin) {
                        const action = {
                            type: "IS_ADMIN", value: user.token
                        }
                        this.props.dispatch(action);

                        const action_user = {
                            type: "INFO_USER", value: user.user
                        }
                        this.props.dispatch(action_user);

                        this.setState({resetText: true, email: "", password: "", isEmailBlank: false, isPasswordBlank: false });

                        return this.props.navigation.navigate('HomeUser');
                    } else {
                        const action = {
                            type: "IS_LOGIN", value: user.token
                        }
                        this.props.dispatch(action);

                        const action_user = {
                            type: "INFO_USER", value: user.user
                        }
                        this.props.dispatch(action_user);

                        this.setState({resetText: true, email: "", password: "", isEmailBlank: false, isPasswordBlank: false });

                        return this.props.navigation.navigate('HomeUser');
                    }
                }
            })
            .catch((error) => { console.log('Erreur lors de la connexion : ', error); });
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <Background style={ styles.backgroundTop }/>
                <Link style={ styles.wrapperLink } onPress={() => this.props.navigation.navigate('Inscription')}>
                    <TextLink style={ styles.linkStyle }>Je n'ai pas de compte</TextLink>
                </Link>

                <View style={ styles.wrapperTitle }>
                    <Title style={ styles.titleStyle }>{ "Mon compte".toUpperCase() }</Title>
                    <Circle />
                </View>

                <View style={ styles.wrapperForm }>
                    <InputText placeholder="E-mail" sendPropsToParent={ this.handleInputTextEmail } resetText={this.state.resetText}/>
                    <InputText placeholder="Mot de passe" sendPropsToParent={ this.handleInputTextPassword } isPassword={true} resetText={this.state.resetText} />

                    { this.props.state.AuthenticationReducer.auth_message_error !== "" && <Text style={styles.textError}>{this.props.state.AuthenticationReducer.auth_message_error}</Text> }
                    { this.state.isPasswordBlank && <Text style={styles.textError}>Vous devez saisir votre mot de passe.</Text> }
                    { this.state.isEmailBlank && <Text style={styles.textError}>Vous devez saisir votre adresse mail.</Text> }

                    <ButtonCTA onPress={ () => this.checkInputNotBlank() } style={ styles.wrapperBtn }><ButtonText>{ "Se connecter".toUpperCase() }</ButtonText></ButtonCTA>
                    <Link style={ styles.wrapperLinkBottom }><TextLink style={ styles.linkStyle }>Mot de passe oublié ?</TextLink></Link>
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
        top: -160,
        left: -50
    },
    wrapperTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60
    },
    titleStyle: {
        fontSize: 32,
        lineHeight: 40,
        marginBottom: 0,
        marginRight: 8
    },
    wrapperLink: {
        position: 'absolute',
        top: 20,
        right: 20,
        alignSelf: 'flex-end'
    },
    linkStyle: {
        textTransform: 'none',
        fontFamily: "brawler-regular"
    },
    wrapperForm: {
        marginTop: 30,
    },
    inputTextStyle: {
        width: 'auto'
    },
    wrapperLinkBottom: {
        alignSelf: 'center'
    },
    wrapperBtn: {
        marginTop: 25,
        marginBottom: 20,
        alignSelf: 'center'
    },
    backgroundBottom: {
        bottom: -200,
        left: -50,
        zIndex: -1
    },
    textError: {
        alignSelf: 'center'
    }
})

const mapStateToProps = (state) => { 
    return {state: state};
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connexion)