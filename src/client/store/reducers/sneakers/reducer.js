const initialState = { 
    marque: "",
    modele: ""
}

function addSneakers(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case 'ADD_BRAND':
            nextState = {
                ...state, marque: action.value
            }
            return nextState;
        case 'TO_DISCONNECT':
            nextState = {
                ...state, isLogin: action.value
            }
            return nextState;
        case 'AUTH_MESSAGE_ERROR':
            nextState = {
                ...state, auth_message_error: action.value
            }
            return nextState;
        case 'AUTH_INSCRIPTION_NOT_VALIDATED':
            nextState = {
                ...state, auth_inscription_not_validated: action.value
            }
            return nextState;
        default:
            return state
    }
}

export default addSneakers;