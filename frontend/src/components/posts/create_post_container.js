import { connect} from 'react-redux';
import PostForm from './post_form';
import {createPost} from '../../actions/post_actions'



const mSTP = (state, ownProps) => {
    return {
        post: {
            title: '',
            category: '', 
            description: '',
            link: '', 
        }, 
        formType: 'Add_post'
    }
}

const mDTP = (dispatch) => {
    return {
        createPost: post => dispatch(createPost(post))
    }
}

export default connect(mSTP, mDTP)(PostForm)