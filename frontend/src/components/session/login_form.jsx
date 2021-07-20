import React from 'react';
import { withRouter} from 'react-router-dom'
// import './form.css'


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password:'',
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    renderErrors(){
        return (
            <ul>
            {Object.keys(this.state.errors).map((error, i) => (
              <li key={`error-${i}`}>
                {this.state.errors[error]}
              </li>
            ))}
          </ul>
        )
    }
    render(){
        return(
              
            <div className='login-form'>
            <form onSubmit={this.handleSubmit}>
              <div className='username'>
                <br/>Username:
                  <input className='username-input' type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="Username"
                    className="input"
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
                <input className ='login-submit-btn' type="submit" value="Submit" />
                {this.renderErrors()}
            </form>
          </div>
    

        )
    }
}

export default withRouter(LoginForm);