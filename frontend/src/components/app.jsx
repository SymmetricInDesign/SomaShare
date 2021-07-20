import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from '../components/session/login_form_container'
import SignupFormContainer from '../components/session/signup_form_container'
import NavBar from "../components/nav/navbar_container"
// import MainPage from './main/main_page';
import Splash from './splash/splash'
import { Switch, Route } from 'react-router-dom';



const App = () => (
    <>
        <Route path="/" component={NavBar} />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <Route exact path="/" component={Splash} />
        </Switch>
    </>
);

export default App;