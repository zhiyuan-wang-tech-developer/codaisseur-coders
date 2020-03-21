import api from '../../api'

// action creator
function setPost(post) {
    return {
        type: 'posts/FETCHED',
        payload: post
    }
}

// thunk action creator
function fetchPost(id) {

    function thunk(dispatch, getState) {
        // fetch data
        api(`/posts/${id}`)
            .then((post) => {
                dispatch(setPost(post))
            })
    }

    return thunk
}

export default fetchPost