import { connect} from 'react-redux';
import { withRouter } from 'react-router';
import {logout, login} from '../../actions/session_actions';

import NavBar from './navbar';

const mSTP = (state, ownProps) => {
    return{
        loggedIn: state.session.isAuthenticated, 
        user: state.session.user,
    }
}

const mDTP = dispatch => {
    return {
        logout:() => dispatch(logout()),
        login: () => dispatch(login()),
    }
}

export default connect(mSTP, mDTP)(NavBar)