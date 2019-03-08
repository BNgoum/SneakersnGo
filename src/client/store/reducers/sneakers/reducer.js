const initialState = { 
    brands: [],
    brandsToAdd: "",
    currentBrand: "",
    currentModel: "",
    models: [],
    sneakersByModel: [],
    sneakers: [],
    currentSneakers: "",
    pathImage: {},
    wishlist: [],
    cart: []
    
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
        case 'SET_CURRENT_SNEAKERS':
            nextState = {
                ...state, currentSneakers: action.value
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
        case 'SET_CURRENT_PATH_IMAGE':
            nextState = {
                ...state, pathImage: action.value
            }
            return nextState;
        case 'ADD_WISHLIST':
            nextState = {
                ...state, wishlist: [...state.wishlist, action.value]
            }
            return nextState;
        case 'SET_WISHLIST':
            nextState = {
                ...state, wishlist: action.value
            }
            return nextState;
        case 'ADD_CART':
            nextState = {
                ...state, cart: [...state.cart, action.value]
            }
            return nextState;
        case 'SET_CART':
            nextState = {
                ...state, cart: action.value
            }
            return nextState;
        default:
            return state
    }
}

export default addSneakers;