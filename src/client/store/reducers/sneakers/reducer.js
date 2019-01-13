const initialState = { 
    brands: [],
    brandsToAdd: "",
    currentBrand: "",
    currentModel: "",
    models: [],
    sneakersByModel: [],
    sneakers: [],
}

function addSneakers(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'GET_ALL_BRANDS':
            nextState = {
                ...state, brands: action.value
            }
            return nextState;
        case 'STORE_BRANDS':
            nextState = {
                ...state, brandsToAdd: action.value
            }
            return nextState;
        case 'GET_ALL_MODELS':
            nextState = {
                ...state, models: action.value
            }
            return nextState;
        case 'SET_CURRENT_BRAND':
            nextState = {
                ...state, currentBrand: action.value
            }
            return nextState;
        case 'SET_CURRENT_MODEL':
            nextState = {
                ...state, currentModel: action.value
            }
            return nextState;
        case 'GET_ALL_SNEAKERS_BY_MODEL':
            nextState = {
                ...state, sneakersByModel: action.value
            }
            return nextState;
        case 'GET_ALL_SNEAKERS':
            nextState = {
                ...state, sneakers: action.value
            }
            return nextState;
        default:
            return state
    }
}

export default addSneakers;