const initialState = {
    accessToken: null,
    profile: null
}

// for authentication
function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'auth/USER_LOGGED_IN': {
            return action.payload
        }
        case 'auth/USER_LOGGED_OUT': {
            return initialState
        }
        default: {
            return state
        }
    }
}

export default authReducer