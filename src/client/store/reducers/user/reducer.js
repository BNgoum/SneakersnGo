const initialState = { 
    isLogin: null,
    isAdmin: null,
    auth_message_error: "",
    auth_inscription_not_validated: ""
}

function authentication(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case 'IS_LOGIN':
            nextState = {
                ...state, isLogin: action.value
            }
            return nextState;
        case 'IS_ADMIN':
            nextState = {
                ...state, isAdmin: action.value
            }
            return nextState;
        case 'TO_DISCONNECT':
            nextState = {
                ...state, isLogin: action.value, isAdmin: action.value
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

export default authentication;