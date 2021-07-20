import { connect} from 'react-redux';
import { withRouter } from 'react-router';
import {logout} from '../../actions/sessions_actions';

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
