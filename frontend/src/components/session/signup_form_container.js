// import {connect} from 'react-redux'
// import { createNewUser, receiveErrors } from '../../actions/session_actions'
// import { withRouter } from "react-router"
// import SessionForm from './session_form'

// const mSTP = (state, ownProps) => {
//     return {
//         errors: state.errors.session,
//         formType: "signup"
//     }
// }

// const mDTP = (dispatch, ownProps) => ({
//     processForm: (formData) => dispatch(createNewUser(formData)),
//     receiveErrors: (errors) => dispatch(receiveErrors(errors))   
// })

// export default withRouter(connect(mSTP, mDTP)(SessionForm))