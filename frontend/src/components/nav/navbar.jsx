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
              <div className="session-btn-nav">
                    <Link className="login-nav-btn" to={'/login'}>Login</Link>
                    <Link className="login-nav-btn" to={'/signup'}>Signup</Link>
              </div>
          );
        }
    }

    render() {
        return (
          <div className="NavBar">
              <Link className="title-nav"to={'/'}>SomaShare</Link>
              <div>{ this.getLinks() }</div>
          </div>
        );
    }



}

export default NavBar;