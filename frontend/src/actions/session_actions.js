// src/actions/session_actions.js

// Although there's only one function here so far, let's import the whole file since we will be adding more later
import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

// This pattern should be familiar to you from the full stack project

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false)
    // Dispatch a logout action
    dispatch(logoutUser())
};























// import {signup, login, logout} from "../util/session_api_util"
// export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
// export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
// export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

// export const receiveCurrentUser = user => ({
//     type: RECEIVE_CURRENT_USER,
//     user
// })

// export const logoutCurrentUser = () => ({
//     type: LOGOUT_CURRENT_USER
// })

// export const receiveErrors = (errors) => {
//     return {type: RECEIVE_SESSION_ERRORS,
//     errors: errors}
// }

// export const createNewUser = formUser => dispatch => signup(formUser)
//     .then(user => (
//         dispatch(receiveCurrentUser(user))
//       ), err => (
//         dispatch(receiveErrors(err.responseJSON))
//       ))

// export const createNewSession = formUser => dispatch => login(formUser)
//     .then(user => (
//         dispatch(receiveCurrentUser(user))
//     ), err => (
//         dispatch(receiveErrors(err.responseJSON))
//     ))

// export const deleteSession = () => dispatch => logout()
//     .then(() => dispatch(logoutCurrentUser()))