import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import LoginFormContainer from '../components/login_form_container'
import SignupFormContainer from '../components/session/signup_form_container'
// import MainPage from './main/main_page';
import Splash from './splash/splash'
import { Switch, Route } from 'react-router-dom';



const App = () => (
    <Switch>
        {/* // <AuthRoute exact path="/login" component={LoginFormContainer}/> */}
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>
       <Route exact path="/" component={Splash} />
    </Switch>
    // <h1>hello world</h1>
);

export default App;