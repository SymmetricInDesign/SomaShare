import {connect} from 'react-redux';
import Profile from './profile.jsx';
import { fetchPostsForUser, deletePost } from '../../actions/post_actions';
import { fetchCommentsForUser } from '../../actions/comment_actions';
import{withRouter} from 'react-router'

const mSTP = (state, ownProps) => {
    console.log(ownProps)
    return{
        posts: Object.values(state.entities.posts),
        comments: Object.values(state.entities.comments),
        userId: ownProps.match.params.userId,
    }
}

const mDTP = dispatch => {
    return {
        fetchPostsForUser: userId => dispatch(fetchPostsForUser(userId)),
        fetchCommentsForUser: userId => dispatch(fetchCommentsForUser(userId)),
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}

export default withRouter(connect(mSTP, mDTP)(Profile))