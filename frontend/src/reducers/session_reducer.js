/* eslint-disable import/no-anonymous-default-export */
import { RECEIVE_CURRENT_USER, 
    RECEIVE_USER_LOGOUT, 
    RECEIVE_USER_SIGN_IN } from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newState = Object.assign({}, state)
            return {
              ...newState,
              isAuthenticated: !!action.currentUser,
              user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return initialState
        case RECEIVE_USER_SIGN_IN:
            return {
              ...state,
              isLoggedIn: true
            }
        default:
            return state;
    }
}




