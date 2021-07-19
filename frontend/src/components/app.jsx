import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from '../components/login_form_container'
import SignupFormContainer from '../components/signup_form_container'
import { Switch, Route } from 'react-router-dom';


import MainPage from './main/main_page';

const App = () => (
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        <Route exact path="/" component={MainPage} />
    </Switch>
);

export default App;