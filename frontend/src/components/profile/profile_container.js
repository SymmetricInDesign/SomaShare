import {connect} from 'react-redux';
import Profile from './profile.jsx';
import { fetchPostsForUser } from '../../actions/post_actions';

const mSTP = (state, ownProps) => {
    // debugger
    return{
        posts: Object.values(state.entities.posts),
        // currentUser: state.session.user.id, 
        username: state.session.user.username,
        userId: ownProps.match.params.userId
    }
}

const mDTP = dispatch => {
    return {
        fetchPostsForUser: userId => dispatch(fetchPostsForUser(userId))
    }
}

export default connect(mSTP, mDTP)(Profile)