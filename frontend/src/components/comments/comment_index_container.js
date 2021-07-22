import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchCommentsForPost } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return {
        comments: Object.values(state.entities.comments),
        postId: ownProps.postId
    }
}

const mDTP = dispatch => {
    return {
        fetchCommentsForPost: postId => dispatch(fetchCommentsForPost(postId))
    }
}

export default connect(mSTP, mDTP)(CommentIndex)