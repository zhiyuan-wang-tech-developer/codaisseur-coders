import api from '../../api'

// action creator
/* function saveAccessToken(accessToken) {
    return {
        type: 'auth/SAVE_ACCESS_TOKEN',
        payload: {
            accessToken: accessToken,
            profile: null
        }
    }
} */

// action creator
function userLoggedIn(accessToken, userProfile) {
    return {
        type: 'auth/USER_LOGGED_IN',
        payload: {
            accessToken: accessToken,
            profile: userProfile
        }
    }
}

export function userLoggedOut() {
    return {
        type: 'auth/USER_LOGGED_OUT'
    }
}

// thunk creator function
function login(email, password) {

    function thunk(dispatch, getState) {
        // make a POST API request to '/login' to get an access token
        api('/login',
            {
                method: 'POST',
                body: {
                    email: email,
                    password: password
                }
            }
        )
            .then(
                (accessToken) => {
                    console.log('@login access token:', accessToken)
                    // after getting the access token, dispatch the 'saveAccessToken' action
                    // dispatch(saveAccessToken(accessToken))
                    // using this access token to fetch the user's profile
                    // jwt: json web token
                    api('/me', { jwt: accessToken.jwt })
                        .then((userProfile) => {
                            console.log('@login user profile: ', userProfile)
                            // dispatch an action to save both access token and profile
                            dispatch(userLoggedIn(accessToken, userProfile))
                        })
                        .catch(error => console.log('@login error: ', error))
                }
            )
            .catch(error => console.log('@login error:', JSON.stringify(error)))
    }
    // Return the thunk function itself
    return thunk
}

export default login