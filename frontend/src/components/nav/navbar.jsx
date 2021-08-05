import React from 'react';
import {Link} from 'react-router-dom';
import Search from './search'


class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.logoutUser = this.logoutUser.bind(this);
    }
    logoutUser(e) {
        this.props.logout();
        this.props.history.push("/login")
    }

    getLinks() {
        if (this.props.loggedIn) {
          return (
            
              <div className="session-btn-nav">
                  
                  <Link className="user-profile-btn" to={`/users/${this.props.user._id}`}>Hello {this.props.username}!</Link>
                  <div className="login-nav-btn" onClick={this.logoutUser}>Logout</div>
                 
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
              <Search/> 
              <div>{ this.getLinks() }</div>
          </div>
        );
    }



}

export default NavBar;