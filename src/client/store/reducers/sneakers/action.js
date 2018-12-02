import Axios from "axios";

export const requestAddBrand = (brand) => {
    return Axios.post('https://sneakersngo-api.herokuapp.com/brand', {
        brand: brand,
    })
    .then((responseJson) => {
        // if (responseJson.data.err === true && responseJson.data.data === null) {
        //     const action = {
        //         type: "AUTH_MESSAGE_ERROR", value: "Un compte associé à cette adresse mail existe déjà."
        //     }
        //     return action;
        // } else {
        //     const action = {
        //         type: "AUTH_INSCRIPTION_NOT_VALIDATED", value: "Votre inscription est prise en compte. Vous allez recevoir un mail afin de valider votre inscription."
        //     }
        //     return action;
        // }
    })
    .catch(err => {
        console.log('Erreur lors de la création de marque : ', err);
    });
}