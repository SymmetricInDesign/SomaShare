import { connect} from 'react-redux';
import { updateComment } from '../../actions/comment_actions';
import EditCommentForm from './edit_comment_form'


const mSTP = (state, ownProps) => {
    return{
        comment: ownProps.comment,
        postId: ownProps.postId,
        stopEditing: ownProps.stopEditing,
    }
}

const mDTP = dispatch => {
    return {
        updateComment: comment=>dispatch(updateComment(comment))
    }
}

export default connect(mSTP, mDTP)(EditCommentForm);