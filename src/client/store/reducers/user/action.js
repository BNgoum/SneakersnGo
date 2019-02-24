import axios from 'axios';
const jwtDecode = require('jwt-decode');

export const requestLogin = (email, password) => {

    return axios.post('https://sneakersngo-api.herokuapp.com/auth/login', {
        email: email,
        password: password
    })
    .then((responseJson) => {
        if ( responseJson.data.data === null && responseJson.data.err === true) {
            if ( responseJson.data.message === "Unknown user" ) {
                const action = {
                    type: "AUTH_MESSAGE_ERROR", value: "Les identifiants entrés n'existent pas."
                }
                return action;
            } else {
                const action = {
                    type: "AUTH_MESSAGE_ERROR", value: "Vous n'avez pas validé votre inscription."
                }
                return action;
            }
        } else { return responseJson.data.data; }
    })
    .catch(err => {
        console.log('Erreur lors de la connexion du user : ', err);
    });
}

export const requestRegister = (firstname, lastname, email, password) => {
    return axios.post('https://sneakersngo-api.herokuapp.com/auth/register', {
        firstname,
        lastname,
        email,
        password
    })
    .then((responseJson) => {
        if (responseJson.data.err === true && responseJson.data.data === null) {
            const action = {
                type: "AUTH_MESSAGE_ERROR", value: "Un compte associé à cette adresse mail existe déjà."
            }
            return action;
        } else {
            const action = {
                type: "AUTH_INSCRIPTION_NOT_VALIDATED", value: "Votre inscription est prise en compte. Vous allez recevoir un mail afin de valider votre inscription."
            }
            return action;
        }
    })
    .catch(err => {
        console.log('Erreur lors de la connexion du user : ', err);
    });
}

export const requestDisconnect = () => {
    const action = {
        type: "TO_DISCONNECT", value: null
    }

    return action;
}