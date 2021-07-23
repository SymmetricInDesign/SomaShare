import { connect} from 'react-redux';
import PostForm from './post_form';
import {createPost, fetchPost} from '../../actions/post_actions'



const mSTP = (state, ownProps) => {
    return {
        post: {
            title: '',
            category: '', 
            description: '',
            link: '', 
        }, 
        errors: Object.values(state.errors.posts),
        username: state.session.user.username,
        formType: 'Create Post'
    }
}

const mDTP = (dispatch) => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId)),
        action: post => dispatch(createPost(post))
    }
}

export default connect(mSTP, mDTP)(PostForm)