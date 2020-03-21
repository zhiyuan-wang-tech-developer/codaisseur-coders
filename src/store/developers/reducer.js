// subreducer
const initialState = null

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'developers/FETCHED': {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default reducer