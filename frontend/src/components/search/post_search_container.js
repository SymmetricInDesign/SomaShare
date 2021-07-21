import PostSearch from "./post_search_results"
import {connect} from "react-redux"
import { fetchPosts } from "../../actions/post_actions"
import { withRouter } from "react-router"
import { updateBounds } from "../../actions/filter_actions"
const queryString = require('query-string')


const mSTP = (state={}, ownProps) => {
    const bounds = queryString.parse(ownProps.location.search)
    let searchText = bounds.searchText ? bounds.searchText : "-1"
    let category = bounds.category ? bounds.category : 'All Departments'
    return {
        bounds: state.ui.filters.bounds,
        posts: Object.values(state.entities.posts),
        searchText: searchText,
        category: category
    }
}

const mDTP = dispatch => ({
        requestPosts: (category, searchText) => dispatch(fetchPosts(category, searchText)),
        updateBounds: (bounds)=> dispatch(updateBounds(bounds))
})

export default withRouter(connect(mSTP, mDTP)(PostSearch))


