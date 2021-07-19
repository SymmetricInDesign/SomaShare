/* eslint-disable import/no-anonymous-default-export */
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    default:
      return state;
  }
}




// import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

// const _nullSession = {
//     id: null
// }

// export default (state = _nullSession, action) => {
//     Object.freeze(state)
//     switch(action.type){
//         case RECEIVE_CURRENT_USER:
//             const newState =  Object.assign({}, {id: action.user.id})
//             return newState
//         case LOGOUT_CURRENT_USER:
//             return _nullSession
//         default:
//             return state
//     }
// }