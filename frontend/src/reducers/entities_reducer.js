import { combineReducers } from 'redux';
import postsReducer from './posts_reducer'
import commentsReducer from "./comments_reducer"

export default combineReducers({
    posts: postsReducer,
    comments: commentsReducer
});

