import {connect} from 'react-redux';
import PostShow from './post_show';
import{withRouter} from 'react-router'
import { deletePost, fetchPost, updatePostLikes } from '../../actions/post_actions';
import {updateUserLikes, fetchUser} from '../../actions/user_actions'

const mSTP = (state, ownProps) => {

    return{
        post: state.entities.posts[ownProps.match.params.postId],
        currentUserId: state.session.user._id ? state.session.user._id : undefined,
        currentUser: state.session.user._id ? state.session.user : undefined
    }
    

}

const mDTP = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    requestUser: (userId) => dispatch(fetchUser(userId)),
    updatePostLikes: (postId, modifier) => dispatch(updatePostLikes(postId, modifier)),
    updateUserLikes: (userId, postId, modifier) => dispatch(updateUserLikes(userId, postId, modifier)),
})

export default withRouter(connect(mSTP, mDTP)(PostShow))