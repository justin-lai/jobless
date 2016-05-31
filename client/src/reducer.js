import { GET_USER, RECEIVE_USER, INVALIDATE_USER, POST_USER } from './actions.js';

export const user = function(state, action) {
  switch(action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case POST_USER:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_USER:
      return Object.assign({}, state, {
        user: action.userJson,
        isInvalidated: false,
        isFetching: false
      });
    case INVALIDATE_USER: //not important yet
      return Object.assign({}, state, {
        isInvalidated: true
      })
    default:
      return state
  }
}