import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import ReduxThunk from 'redux-thunk'

// for use of Redux DevTools only
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (x => x)

const enhancer = compose(
    applyMiddleware(ReduxThunk),
    devTools
)

// create global redux create
const global_redux_store = createStore(rootReducer, enhancer)

export default global_redux_store