import { receiveCurrentUser } from "./session_actions"
import * as ApiUtil from "../util/user_api_util"

export const updateUserLikes = (userId, postId, modifier) => dispatch => (
    ApiUtil.updateUserLikes(userId, postId, modifier).then(res=>dispatch(receiveCurrentUser(res.data)))
) 

export const fetchUser = (userId) => dispatch => (
    ApiUtil.fetchUser(userId).then(res=>dispatch(receiveCurrentUser(res.data)))
)