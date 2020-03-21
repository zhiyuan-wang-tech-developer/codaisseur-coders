import { combineReducers } from "redux"
import developersReducer from './developers/reducer'
import postReducer from './post/reducer'
import authReducer from './auth/reducer'

// The root reducer is a combination of subreducers.
const rootReducer = combineReducers({
  // add subreducer here
  developers: developersReducer,
  auth: authReducer,
  post: postReducer,
  havingFun: havingFunReducer
});

function havingFunReducer(state = "yes", action) {
  switch (action.type) {
    case "SET_HAVING_FUN": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;
