import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import { AuthStore, AuthContext, withAuthConsumer } from '../../contexts/AuthStore';
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validations = {
  email: (value) => {
    let message;
    if (!value) {
      message = 'Email is required';
    } else if (!EMAIL_PATTERN.test(value)) {
      message = 'Invalid email pattern';
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = 'Password is required';
    }
    return message;
  }
}

class Login extends Component {
  state = {
    user: {
      email: '',
      password: '',
      id:''
     
    },
    errors: {},
    touch: {},
    
    
  }




  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validations[name] && validations[name](value)
      }
    })
  }

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { user } = this.state
    AuthService.authenticate(user)
      .then(
        response => {
          this.props.onUserLogin(response)
        },
        error => {
          this.setState({
            ...this.state,
            errors: {
              ...this.state.errors,
              name: true,
              password: true
            },
          })
      }
      )
  }



  isValid = () => {
    return !Object.keys(this.state.user)
      .some(attr => this.state.errors[attr])
     
  }

  render() {
    console.log(this.props)
    const { errors, user, touch, id } =  this.state;
    const isAuthenticated = this.props.isAuthenticated()
    if (isAuthenticated) {
      return (<Redirect to={`/profile/${this.props.user.id}`}/>)
    }

    return (
      <div className="login-card">
        <h3 className="login-title">Entra en tu cuenta</h3>
        <form id="login-form" className="login-input" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="login-email-text">Aquí tu email</label>
            <input type="email" name="email" className="login-email-input" onChange={this.handleChange} onBlur={this.handleBlur} value={user.email} />
            <div className="invalid-feedback">{errors.email}</div>
          </div>
          <div className="form-group">
            <label className="login-password-text">Y aquí la contraseña</label>
            <input type="password" name="password" className="login-password-input" onChange={this.handleChange} onBlur={this.handleBlur} value={user.password} />
            <div className="invalid-feedback">{errors.password}</div>
          </div>

          <div className="login-register-button">
          <button className="login-button" form="login-form" type="submit" disabled={!this.isValid()}> Login</button>
          </div>
        </form>
        < hr className="line"/>
        <p className="login-to-register">¿No tienes cuenta? </p>
        <div className="login-register-button">
        <Link to="/register" ><button className="login-register-button">Regístrate</button></Link>
        </div>
      </div>
    );
  }
}


export default withAuthConsumer(Login)