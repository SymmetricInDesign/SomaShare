import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT} from "../actions/comment_actions";

const commentsReducer = (state={}, action) => {
    Object.freeze(state)
    let newState
    switch (action.type){
        case RECEIVE_COMMENTS:
            newState = {}
            action.comments.forEach(comment=>{
                newState[comment._id] = comment
            })
            return newState
        case RECEIVE_COMMENT:
            newState = Object.assign({}, state)
            newState[action.comment._id] = action.comment
            return newState
        case REMOVE_COMMENT:
            newState = Object.assign({}, state)
            delete newState[action.commentId]
            return newState
        default:
            return state
    }
}

export default commentsReducer