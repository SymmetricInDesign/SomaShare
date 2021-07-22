import { connect } from 'react-redux'
import CommentForm from './comment_form'
import { createComment, fetchComment } from '../../actions/comment_actions'


const mSTP = (state, ownProps) => {
    return {
        post_id: ownProps.postId,
        username: state.session.user.username,
        user_id: state.session.user.id,
        comment: {
            body: '',

        }
    }
}

const mDTP = dispatch => {
    return  {
        createComment: comment => dispatch(createComment(comment)),
        fetchComment: commentId => dispatch(fetchComment(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentForm)