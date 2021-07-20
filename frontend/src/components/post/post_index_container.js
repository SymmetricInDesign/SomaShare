import PostIndex from "./post_index"
import {connect} from "react-redux"
import { fetchPosts } from "../../actions/post_actions"
// import {withRouter} from "react-router-dom"

const mSTP = state => ({

posts: Object.values(state.entities.posts)
    
})

const mDTP = dispatch => ({
        fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mSTP, mDTP)(PostIndex)