import React from 'react';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.logoutUser = this.logoutUser.bind(this);
    }
    logoutUser(e) {
        // console.log(this.props)
        // this.props.history.replace("/") 
        this.props.logout();
        this.props.history.push("/login")
    }

    getLinks() {
        if (this.props.loggedIn) {
          return (
            
              <div className="session-btn-nav">
                  
                  <Link className="user-profile-btn" to={`/users/${this.props.user.id}`}>Hello {this.props.username}!</Link>
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
              {/* <div className="nav-filler"> */}
                {/* <Search/> */}

              {/* </div> */}
              <div>{ this.getLinks() }</div>
          </div>
        );
    }



}

export default NavBar;