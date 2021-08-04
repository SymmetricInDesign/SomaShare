import axios from 'axios'

export const fetchUser = (userId) => {
    return axios.get(`/api/users/${userId}`)
}

export const updateUserLikes = (userId, postId, modifier) => {
    // debugger
    return axios.patch(`/api/users/${userId}`, {postId: postId, modifier: modifier})
}