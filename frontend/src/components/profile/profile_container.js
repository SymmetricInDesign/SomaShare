import {connect} from 'react-redux';
import Profile from './profile.jsx';
import { fetchPostsForUser, fetchPost, deletePost } from '../../actions/post_actions';
import{withRouter} from 'react-router'
import PostIndex from '../post/post_index.jsx';

const mSTP = (state, ownProps) => {
    return{
        posts: Object.values(state.entities.posts),
        currentUserId: state.session.user.id, 
        username: state.session.user.username,
    }
}

const mDTP = dispatch => {
    return {
        fetchPostsForUser: userId => dispatch(fetchPostsForUser(userId)),
        // fetchPost: (postId) => dispatch(fetchPost(postId)),
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}

export default withRouter(connect(mSTP, mDTP)(Profile))