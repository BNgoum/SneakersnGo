const initialState = { 
    brands: [],
    brandsToAdd: "",
    models: ""
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
        default:
            return state
    }
}

export default addSneakers;