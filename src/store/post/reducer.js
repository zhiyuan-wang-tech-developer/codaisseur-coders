const initialState = {
    post_data: null,
    comments: []
}

// subreducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'posts/FETCHED': {
            return {
                ...state,
                post_data: action.payload,
            }
        }

        default: {
            return state
        }
    }
}

export default reducer