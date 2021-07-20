import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css'

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.logoutUser = this.logoutUser.bind(this);
    }
    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
          return (
              <div>
                  {/* <Link to={'/tweets'}>All Tweets</Link>
                  <Link to={'/profile'}>Profile</Link>
                  <Link to={'/new_tweet'}>Write a Tweet</Link> /} */}
                  <button onClick={()=>this.props.logout()}>Logout</button>
                  
              </div>
          );
        } else {
          return (
              <div>
                  <Link to={'/signup'}>Signup</Link>
                  <Link className="login-nav-btn" to={'/login'}>Login</Link>
              </div>
          );
        }
    }

    render() {
        return (
          <div className="NavBar">
              <div><h1>SomaShare</h1></div>
              <div>{ this.getLinks() }</div>
          </div>
        );
    }



}

export default NavBar;