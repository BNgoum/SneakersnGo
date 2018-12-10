import axios from "axios";

export const requestAddBrand = (token, brands) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    let bodyParameters = { names: JSON.stringify(brands) }

    return axios.post('https://sneakersngo-api.herokuapp.com/brand', bodyParameters, config)
    .catch(err => {
        console.log('Erreur lors de la création de marque : ', err);
    });
}

export const requestAddModel = (token, models, idBrand) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

      let bodyParameters = {
        names: JSON.stringify(models),
        brand: idBrand
    }

    return axios.post('https://sneakersngo-api.herokuapp.com/model', bodyParameters, config)
    .catch(err => {
        console.log('Erreur lors de la création du model : ', err);
    });
}

export const requestAllBrands = (token) => {
    let config = { headers: { 'Authorization': 'Bearer ' + token } }

    return axios.get('https://sneakersngo-api.herokuapp.com/brand', config)
    .then((responseJson) => {
        return responseJson.data.data;
    })
    .catch(err => {
        console.log('Erreur lors de la tentative de récupération des matchs de la semaine Premier League (get) : ', err);
    });
}

export const requestAllModelsByBrand = (token, idBrand) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.get('https://sneakersngo-api.herokuapp.com/model/brand/' + idBrand, config)
    .then((responseJson) => {
        return responseJson.data.data;
    })
    .catch(err => {
        console.log('Erreur lors de la tentative de récupération des matchs de la semaine Premier League (get) : ', err);
    });
}