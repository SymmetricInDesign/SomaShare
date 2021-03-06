import {connect} from 'react-redux';
import LoginForm from './login_form';
import { clearErrors, login } from "../../actions/session_actions"

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: "login"
    }
}

const mDTP = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(LoginForm)