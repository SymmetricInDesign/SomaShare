import {connect} from 'react-redux';
import Profile from './profile.jsx';
import { fetchPostsForUser } from '../../actions/post_actions';

const mSTP = (state, ownProps) => {
    return{
        posts: Object.values(state.entities.posts),
        currentUser: state.session.user.id, 
        username: state.session.user.username,
    }
}

const mDTP = dispatch => {
    return {
        fetchPostsForUser: userId => dispatch(fetchPostsForUser(userId))
    }
}

export default connect(mSTP, mDTP)(Profile)