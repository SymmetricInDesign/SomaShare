import { connect} from 'react-redux';
import PostForm from './post_form'
import {updatePost, fetchPost} from '../../actions/post_actions'
import {withRouter} from "react-router";


const mSTP = (state, ownProps) => {
    console.log(ownProps)
    return {
        post: state.entities.posts[ownProps.match.params.postId],
        formType: 'Update Post',
    }
}

const mDTP = (dispatch) => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId)),
        action: post => dispatch(updatePost(post))
    }
}

export default withRouter(connect(mSTP, mDTP)(PostForm))