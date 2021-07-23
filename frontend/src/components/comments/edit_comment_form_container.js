import { connect} from 'react-redux';


const mSTP = (state, ownProps) => {
    return{
        comment: ownProps.comment,
        postId: ownProps.postId,
        stopEditing: ownProps.stopEditing
    }
}

const mDTP = dispatch => {
    return {
        updateComment: comment=>dispatch(updateComment(comment))
    }
}

export default connect(mSTP, mDTP)(EditCommentForm);