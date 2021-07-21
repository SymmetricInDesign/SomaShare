import {connect} from 'react-redux';
import {fetchPost} from '../../actions/post_actions';
import PostShow from './post_show';
import{withRouter} from 'react-router'

const mSTP = (state, ownProps) => {
    console.log(ownProps)
    return{
        post: state.entities.posts[ownProps.match.params.postId]
    }
    

}

const mDTP = dispatch => ({
    fetchPost: (postId) => dispatch(fetchPost(postId))

})

export default withRouter(connect(mSTP, mDTP)(PostShow))