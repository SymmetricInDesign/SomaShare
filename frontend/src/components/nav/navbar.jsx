import React from 'react';
import {Link} from 'react-router-dom';
import Search from "./search"

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
            
              <div className="session-btn-nav">
                  
                  <Link className="user-profile-btn" to={`/users/${this.props.user.id}`}>Hello {this.props.username}!</Link>
                  <div className="login-nav-btn" onClick={()=>this.props.logout()}>Logout</div>
                 
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
              {/* <div className="nav-filler"> */}
                <Search/>

              {/* </div> */}
              <div>{ this.getLinks() }</div>
          </div>
        );
    }



}

export default NavBar;