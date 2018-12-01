export const requestLogin = (email, password) => {
    return fetch('https://sneakersngo-api.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((responseJson) => {
        if ( responseJson.data === null && responseJson.err === true) {
            if ( responseJson.message === "Unknown user" ) {
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
        } else {
            const action = {
                type: "IS_LOGIN", value: responseJson.data.token
            }
            return action;
        }
    })
    .catch(err => {
        console.log('Erreur lors de la connexion du user : ', err);
    });
}

export const requestRegister = (firstname, lastname, email, password) => {
    return fetch('https://sneakersngo-api.herokuapp.com/auth/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        })
    })
    .then((response) => {
        return response.json();
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