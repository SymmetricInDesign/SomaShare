import { connect} from 'react-redux';
import {logout, login} from '../../actions/session_actions';

import NavBar from './navbar';

const mSTP = (state, ownProps) => {
    return{
        loggedIn: state.session.isAuthenticated, 
        user: state.session.user,
        username: state.session.user ? state.session.user.username : undefined
    }
}

const mDTP = dispatch => {
    return {
        logout:() => dispatch(logout()),
        login: () => dispatch(login()),
    }
}

export default connect(mSTP, mDTP)(NavBar)