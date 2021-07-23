import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchCommentsForPost, deleteComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return {
        comments: Object.values(state.entities.comments),
        postId: ownProps.postId,
        currentUserId: state.session.user ? state.session.user.id : null,
    }
}

const mDTP = dispatch => {
    return {
        fetchCommentsForPost: postId => dispatch(fetchCommentsForPost(postId)),
        deleteComment: commentId=> dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentIndex)