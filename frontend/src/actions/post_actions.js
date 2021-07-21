import { STATES } from "mongoose"
import * as ApiUtil from "../util/posts_api_util"

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_POST = "RECEIVE_POST"
export const REMOVE_POST = "REMOVE_POST"

export const receivePosts = (posts)=>({
    type: RECEIVE_POSTS,
    posts
})
export const receivePost = (post)=>({
    type: RECEIVE_POST,
    post
})
export const removePost = (postId)=>({
    type: REMOVE_POST,
    postId
})

export const fetchPosts = (category="All", searchText="-1") => dispatch => (
    ApiUtil.fetchPosts(category, searchText).then(res=>dispatch(receivePosts(Object.values(res.data))))
)

export const fetchPostsForUser = (userId) => dispatch => (
    ApiUtil.fetchPostsForUser(userId).then(res=>dispatch(receivePosts(Object.values(res.data))))
)

export const fetchPost = (postId) => dispatch=>(
    ApiUtil.fetchPost(postId).then(res=>dispatch(receivePost(res.data)))
)

export const createPost = (post)=>dispatch=>(
    ApiUtil.createPost(post).then(res=>dispatch(receivePost(res.data)))
)

export const updatePost = post => dispatch => (
    ApiUtil.updatePost(post).then(res=>dispatch(receivePost(res.data)))
)

export const deletePost = (postId) => dispatch=>(
    ApiUtil.deletePost(postId).then(res=>dispatch(removePost(res.data._id)))
)