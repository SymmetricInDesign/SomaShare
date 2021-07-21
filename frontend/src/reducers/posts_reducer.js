import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST} from "../actions/post_actions";

const postsReducer = (state={}, action) => {
    Object.freeze(state)
    let newState
    switch (action.type){
        case RECEIVE_POSTS:
            newState = {}
            action.posts.forEach(post=>{
                newState[post._id] = post
            })
            return newState
        case RECEIVE_POST:
            newState = Object.assign({}, state)
            newState[action.post._id] = action.post
            return newState
        case REMOVE_POST:
            newState = Object.assign({}, state)
            delete newState[action.postId]
            return newState
        default:
            return state
    }
}

export default postsReducer