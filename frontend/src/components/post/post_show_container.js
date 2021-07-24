import {connect} from 'react-redux';
import {fetchPost} from '../../actions/post_actions';
import PostShow from './post_show';
import{withRouter} from 'react-router'
import { deletePost } from '../../actions/post_actions';

const mSTP = (state, ownProps) => {

    return{
        post: state.entities.posts[ownProps.match.params.postId],
        currentUserId: state.session.user ? state.session.user.id : undefined
    }
    

}

const mDTP = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    deletePost: (postId) => dispatch(deletePost(postId))
    
})

export default withRouter(connect(mSTP, mDTP)(PostShow))