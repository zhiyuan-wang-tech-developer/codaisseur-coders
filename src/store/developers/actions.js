import api from '../../api'

// action creator
function developersFetched(data) {
    console.log('@developersFetched: create action object')
    return {
        type: 'developers/FETCHED',
        payload: data
    }
}

// thunk function
function fetchDevelopers(dispatch, getState) {
    console.log('@fetchDevelopers: fetch data')
    /**
     * After the api fetch runs and whenever this fetch succeeds, in the Promise resolve handler function 
     * the dispatch function is used to finally dispatch the normal action object, that is created 
     * by the action creator 'developersFetched()'
     */
    api('/developers')
        .then((data) => {
            dispatch(developersFetched(data))
        })
}

export default fetchDevelopers