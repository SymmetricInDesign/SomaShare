import PostIndex from "./post_index"
import {connect} from "react-redux"
import { fetchPosts } from "../../actions/posts_actions"
// import {withRouter} from "react-router-dom"

const mSTP = (state={}) => {
    return {
    posts: Object.values(state.posts)
    };
};

const mDTP = dispatch => ({
        fetchPostsP: () => dispatch(fetchPosts())
})

export default connect(mSTP, mDTP)(PostIndex)