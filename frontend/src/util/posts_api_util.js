import axios from 'axios'

export const fetchPosts = (category="All", searchText="-1") => {
    const search = {category, searchText}
    return axios.get('/api/posts', {params: search});
};
export const fetchPostsForUser = (userId) => {
    return axios.get(`/api/users/${userId}/posts`)
}
  
export const fetchPost = (postId) => {
    return axios.get(`/api/posts/${postId}`)
}

export const createPost = (post) => {
    return axios.post("/api/posts", post)
}

export const updatePost = (post) => {
    return axios.patch(`/api/posts/${post._id}`, post)
}

export const deletePost = (postId) => {
    return axios.delete(`/api/posts/${postId}`)
}

export const updatePostLikes = (postId, modifier) => {
    return axios.patch(`/api/posts/${postId}`, modifier)
}