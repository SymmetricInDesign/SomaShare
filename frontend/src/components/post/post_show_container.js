import {connect} from 'react-redux';
import PostShow from './post_show';
import{withRouter} from 'react-router'
import { deletePost, fetchPost, updatePostLikes } from '../../actions/post_actions';

const mSTP = (state, ownProps) => {

    return{
        post: state.entities.posts[ownProps.match.params.postId],
        currentUserId: state.session.user ? state.session.user.id : undefined,
        currentUser: state.session.user ? state.session.user : undefined
    }
    

}

const mDTP = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePostLikes: (postId, modifier) => dispatch(updatePostLikes(postId, modifier))
})

export default withRouter(connect(mSTP, mDTP)(PostShow))