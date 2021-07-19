import React from 'react'
import {AuthRoute, ProtectedRoute} from "../util/route_util"
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container"
import {Switch, Route, withRouter} from 'react-router-dom'
// import Header from './header'
// import Footer from './footer'


const App = (props) => (
  <div className="app">
    <p>Hello SomaShare</p>
    {/* <Switch>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route path="/" component={Header}></Route>
    </Switch> */}
    
  </div>
);

export default withRouter(App)