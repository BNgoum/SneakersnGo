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
        console.log('Erreur lors de la récupération des toutes les marques : ', err);
    });
}

export const requestAllModelsByBrand = (token, idBrand) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.get('https://sneakersngo-api.herokuapp.com/model/brand/' + idBrand, config)
    .then((responseJson) => {
        return responseJson.data.data;
    })
    .catch(err => {
        console.log('Erreur lors de la récupération de tous les modèles d\'une marque : ', err);
    });
}

export const deleteBrand = (token, idBrand) => {
    let config = { headers: { 'Authorization': 'Bearer ' + token } }

    return axios.delete('https://sneakersngo-api.herokuapp.com/brand/' + idBrand, config)
    .catch(err => {
        console.log('Erreur lors de la suppression d\'une marque : ', err);
    });
}

export const deleteModel = (token, idModel) => {
    let config = { headers: { 'Authorization': 'Bearer ' + token } }

    return axios.delete('https://sneakersngo-api.herokuapp.com/model/' + idModel, config)
    .catch(err => {
        console.log('Erreur lors de la suppression d\'un modèle : ', err);
    });
}

export const createSneaker = (token, model, size, color, originalPrice, rentPrice) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

      let bodyParameters = {
        model,
        size,
        color,
        originalPrice,
        rentPrice
    }

    return axios.post('https://sneakersngo-api.herokuapp.com/sneaker', bodyParameters, config)
    .catch(err => {
        console.log('Erreur lors de la création d\'une Sneaker : ', err);
    });
}

export const requestAllSneakerByModel = (token, idModel) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.get('https://sneakersngo-api.herokuapp.com/sneaker/model/' + idModel, config)
    .then((responseJson) => {
        return responseJson.data.data;
    })
    .catch(err => {
        console.log('Erreur lors de la récupération de tous les modèles d\'une marque : ', err);
    });
}

export const requestOneModel = (token, idModel) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.get('https://sneakersngo-api.herokuapp.com/model/' + idModel, config)
    .then((responseJson) => {
        return responseJson.data.data;
    })
    .catch(err => {
        console.log('Erreur lors de la récupération d\'un modèle : ', err);
    });
}

export const requestOneSneaker = (token, idSneaker) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.get('https://sneakersngo-api.herokuapp.com/sneaker/' + idSneaker, config)
    .then((responseJson) => {
        return responseJson.data.data;
    })
    .catch(err => {
        console.log('Erreur lors de la récupération d\'une Sneaker : ', err);
    });
}

export const requestOneBrand = (token, idBrand) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.get('https://sneakersngo-api.herokuapp.com/brand/' + idBrand, config)
    .then((responseJson) => {
        return responseJson.data.data;
    })
    .catch(err => {
        console.log('Erreur lors de la récupération d\'une marque : ', err);
    });
}

export const requestDeleteSneaker = (token, idSneaker) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.delete('https://sneakersngo-api.herokuapp.com/sneaker/' + idSneaker, config)
    .catch(err => {
        console.log('Erreur lors de la suppression d\'une Sneaker : ', err);
    });
}

export const requestAllSneakers = (token) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.get('https://sneakersngo-api.herokuapp.com/sneaker/', config)
    .then((responseJson) => {
        return responseJson.data.data;
    })
    .catch(err => {
        console.log('Erreur lors de la récupération de tous les modèles d\'une marque : ', err);
    });
}

export const requestAllModels = (token) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.get('https://sneakersngo-api.herokuapp.com/model/', config)
    .then((responseJson) => {
        return responseJson.data.data;
    })
    .catch(err => {
        console.log('Erreur lors de la récupération de tous les modèles : ', err);
    });
}

export const addToWishlist = (token, sneakerId) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    let bodyParameters = { sneakerId }

    return axios.post('https://sneakersngo-api.herokuapp.com/wishlist', bodyParameters, config)
    .catch(err => {
        console.log('Erreur lors de l\'ajout de sneakers dans la wishlist: ', err);
    });
}

export const deleteFromWishlist = (token, sneakerId) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.delete('https://sneakersngo-api.herokuapp.com/wishlist/' + sneakerId, config)
    .catch(err => {
        console.log('Erreur lors de la suppression d\'une sneakers de la wishlist: ', err);
    });
}

export const deleteFromCart = (token, sneakerId) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.delete('https://sneakersngo-api.herokuapp.com/cart/' + sneakerId, config)
    .then(responseJson => {
        return responseJson.data.data
    })
    .catch(err => {
        console.log('Erreur lors de la suppression d\'une sneakers du panier: ', err);
    });
}

export const addToCart = (token, sneakerId) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    let bodyParameters = { sneakerId }

    return axios.post('https://sneakersngo-api.herokuapp.com/cart', bodyParameters, config)
    .then(responseJson => {
        return responseJson.data.data
    })
    .catch(err => {
        console.log('Erreur lors de l\'ajout de sneakers dans le panier: ', err);
    });
}

export const isInCart = (token, sneakerId) => {
    let config = { headers: {'Authorization': 'Bearer ' + token} }

    return axios.get('https://sneakersngo-api.herokuapp.com/cart/' + sneakerId, config)
    .then((responseJson) => {
        return responseJson.data.data;
    })
    .catch(err => {
        console.log('Erreur lors de la vérification de la présence d\'une sneakers dans le panier : ', err);
    });
}