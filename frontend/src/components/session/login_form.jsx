import React from 'react';
import { withRouter} from 'react-router-dom'


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password:'',
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    
        let user = {
          username: this.state.username,
          password: this.state.password
        };
    
        this.props.login(user); 
    }

    loginDemoUser(e){
      let user={
        username: "DemoUser",
        password: "123456"
      }
      this.props.login(user)
    }

    renderErrors(){
        return (
            <ul>
            {Object.keys(this.props.errors).map((error, i) => (
              <li key={`error-${i}`}>
                {this.props.errors[error]}
              </li>
            ))}
          </ul>
        )
    }
    render(){
        return(
              
            <div className='login-form'>
            <form onSubmit={this.handleSubmit}>
            <div className='login-form-header'>Log In to SomaShare!</div>
              <div className='username'>
                <br/>Username:
                  <input className='username-input' type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="Username"
                  />
                  </div>
                <br/>
                
                <div className='password'>Password:
                  <input className='password-input' type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"

                  />
                  </div>
                <br/>
                <input className ='login-submit-btn' type="submit" value="Log In" />
                <div className ='login-submit-btn demo-user-btn' onClick={this.loginDemoUser}>Log in with demo user</div>

                <div className='signup-form-errors'>{this.renderErrors()}</div>

            </form>
          </div>
    

        )
    }
}

export default withRouter(LoginForm);