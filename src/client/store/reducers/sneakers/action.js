import axios from "axios";

export const requestAddBrand = (token, brands) => {
    let config = {
        headers: {'Authorization': 'Bearer ' + token}
    }

      let bodyParameters = {
        names: JSON.stringify(brands)
    }

    return axios.post('https://sneakersngo-api.herokuapp.com/brand', bodyParameters, config)
    .then((responseJson) => {
        console.log('######## In requestAddBrand : ', responseJson.data)
    })
    .catch(err => {
        console.log('Erreur lors de la création de marque : ', err);
    });
}

// export const requestAllBrands = (token) => {
//     let config = {
//         headers: {'Authorization': 'Bearer ' + token}
//     }
//     return axios.get('https://sneakersngo-api.herokuapp.com/brand', config)
//     .then((responseJson) => {
//         //console.log(responseJson.data.data)
//         const action = {
//             type: "GET_ALL_BRANDS", value: responseJson.data.data
//         }
//         //console.log(action)
//         return action;
//     })
//     .catch(err => {
//         console.log('Erreur lors de la récupération des marques : ', err);
//     });
// }

export const requestAllBrands = (token) => {
    let config = {
        headers: {'Authorization': 'Bearer ' + token}
    }
    return axios.get('https://sneakersngo-api.herokuapp.com/brand', config)
    .then((responseJson) => {
        const action = {
            type: "GET_ALL_BRANDS", value: responseJson.data.data
        }
        return action;
    })
    .catch(err => {
        console.log('Erreur lors de la tentative de récupération des matchs de la semaine Premier League (get) : ', err);
    });
}