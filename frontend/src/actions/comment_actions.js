import * as ApiUtil from "../util/comments_api_util"

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

export const receiveComments = (comments)=>({
    type: RECEIVE_COMMENTS,
    comments
})
export const receiveComment = (comment)=>({
    type: RECEIVE_COMMENT,
    comment
})
export const removeComment = (commentId)=>({
    type: REMOVE_COMMENT,
    commentId
})

export const fetchCommentsForUser = (userId) => dispatch => (
    ApiUtil.fetchCommentsForUser(userId).then(res=>dispatch(receiveComments(Object.values(res.data))))
)

export const fetchCommentsForPost = (postId) => dispatch => (
    ApiUtil.fetchCommentsForPost(postId).then(res=>dispatch(receiveComments(Object.values(res.data))))
)

export const fetchComment = (commentId) => dispatch=>(
    ApiUtil.fetchComment(commentId).then(res=>dispatch(receiveComment(res.data)))
)

export const createComment = (comment)=>dispatch=>(
    ApiUtil.createComment(comment).then(res=>dispatch(receiveComment(res.data)))
)

export const updateComment = comment => dispatch => (
    ApiUtil.updateComment(comment).then(res=>dispatch(receiveComment(res.data)))
)

export const deleteComment = (commentId) => dispatch=>(
    ApiUtil.deleteComment(commentId).then(res=>dispatch(removeComment(res.data._id)))
)