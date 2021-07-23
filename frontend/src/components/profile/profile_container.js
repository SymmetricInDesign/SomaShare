import {connect} from 'react-redux';
import Profile from './profile.jsx';
import { fetchPostsForUser, fetchPost, deletePost } from '../../actions/post_actions';
import{withRouter} from 'react-router'
import PostIndex from '../post/post_index.jsx';

const mSTP = (state, ownProps) => {
    return{
        posts: Object.values(state.entities.posts),
        userId: ownProps.match.params.userId
    }
}

const mDTP = dispatch => {
    return {
        fetchPostsForUser: userId => dispatch(fetchPostsForUser(userId)),
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}

export default withRouter(connect(mSTP, mDTP)(Profile))