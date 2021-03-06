import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }
  componentWillUnmount(){
    this.props.clearErrors()
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
      password: this.state.password,
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={this.handleSubmit}>
          <div className='signup-form-header'>Sign Up for SomaShare!</div>
          <div className="username">
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
            <input className ='signup-submit-btn' type="submit" value="Sign Up" />
            <div className='signup-form-errors'>{this.renderErrors()}</div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);