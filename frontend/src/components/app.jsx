import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from '../components/session/login_form_container'
import SignupFormContainer from '../components/session/signup_form_container'
import CreatePostContainer from "../components/posts/create_post_container";
import UpdatePostContainer from "../components/posts/update_post_container";
import NavBar from "../components/nav/navbar_container";
import PostIndexContainer from '../components/post/post_index_container';
import PostShowContainer from '../components/post/post_show_container';
import PostSearchContainer from '../components/search/post_search_container';
import ProfileContainer from '../components/profile/profile_container'
import { Switch, Route } from 'react-router-dom';
import "../styles/styles.scss"

const App = () => (
    <>
        <Route path="/" component={NavBar} />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <Route path="/posts/search" component={PostSearchContainer} />
            <ProtectedRoute exact path='/posts/new' component={CreatePostContainer}/>
            <ProtectedRoute exact path='/posts/:postId/edit' component={UpdatePostContainer}/>
            <ProtectedRoute exact path='/users/:userId' component={ProfileContainer}/>
            <Route exact path="/posts/:postId" component={PostShowContainer}/>
            <Route exact path="/" component={PostIndexContainer} />
        </Switch>
    </>
);

export default App;