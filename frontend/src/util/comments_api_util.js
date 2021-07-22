import axios from 'axios'

export const fetchCommentsForPost = (postId) => {
    return axios.get(`/api/posts/${postId}/comments`);
};
export const fetchCommentsForUser = (userId) => {
    return axios.get(`/api/users/${userId}/comments`)
}
  
export const fetchComment = (commentId) => {
    return axios.get(`/api/comments/${commentId}`)
}

export const createComment = (comment) => {
    return axios.post("/api/comments", comment)
}

export const updateComment = (comment) => {
    return axios.patch(`/api/comments/${comment._id}`, comment)
}

export const deleteComment = (commentId) => {
    return axios.delete(`/api/comments/${commentId}`)
}