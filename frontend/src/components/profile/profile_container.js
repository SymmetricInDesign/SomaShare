import {connect} from 'react-redux';
import Profile from './profile.jsx';
import { fetchPostsForUser, fetchPost, deletePost } from '../../actions/post_actions';
import{withRouter} from 'react-router'
import PostIndex from '../post/post_index.jsx';

const mSTP = (state, ownProps) => {
    // debugger
    return{
        posts: Object.values(state.entities.posts),
        // currentUser: state.session.user.id, 
        userId: ownProps.match.params.userId
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