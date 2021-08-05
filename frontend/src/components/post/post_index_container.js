import PostIndex from "./post_index"
import {connect} from "react-redux"
import { fetchPosts } from "../../actions/post_actions"

const mSTP = (state={}) => {
    let posts
    if (state.entities.posts) posts = Object.values(state.entities.posts)
    // console.log(posts)
    return {
        posts,
        currentUserId: state.session.user ? state.session.user._id : undefined,
    };
};

const mDTP = dispatch => ({
        fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mSTP, mDTP)(PostIndex)