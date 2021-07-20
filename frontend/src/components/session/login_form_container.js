import {connect} from 'react-redux';
import LoginForm from './login_form';
// import SessionForm from './session_form'
// import {createNewSession, receiveErrors } from "../../actions/session_actions"

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: "login"
    }
}

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(LoginForm)