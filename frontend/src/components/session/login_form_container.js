// import {connect} from 'react-redux'
// import SessionForm from './session_form'
// import {createNewSession, receiveErrors } from "../../actions/session_actions"

// const mSTP = (state, ownProps) => {
//     return {
//         errors: state.errors.session,
//         formType: "login"
//     }
// }

// const mDTP = (dispatch, ownProps) => ({
//     processForm: (formData) => dispatch(createNewSession(formData)),
//     receiveErrors: (errors) => dispatch(receiveErrors(errors))   
// })

// export default connect(mSTP, mDTP)(SessionForm)