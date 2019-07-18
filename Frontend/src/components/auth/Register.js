import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import authService from '../../services/AuthService'
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
    },
}

export default class Register extends Component {
  state = {
    user: {
          email: '',
          password: '',
    },
    errors: {},
    touch: {},
    isRegistered: false
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

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      authService.authenticate(this.state.user)
        .then(
          (user) => this.setState({ isRegistered: true }),
          (error) => {
            const { message, errors } = error.response.data;
            this.setState({
              errors: {
                ...this.state.errors,
                ...errors,
                email: !errors && message
              }
            })
          }
        )
    }
  }

  isValid = () => {
    return !Object.keys(this.state.user)
      .some(attr => this.state.errors[attr])
  }

  render() {
    const { isRegistered, errors, user, touch } =  this.state;
    if (isRegistered) {
      return (<Redirect to="/login" />)
    }

   
    return (
      <div className="login-card">
            <h3 className="login-title">Regístrate</h3>
            <form id="register-form" className="login-input" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="login-email-text">¿Cúal es tu email?</label>
                <input type="email" name="email" className="login-email-input" onChange={this.handleChange} onBlur={this.handleBlur} value={user.email} />
                <div className="invalid-feedback">{ errors.email }</div>
              </div>
              <div className="form-group">
                <label className="login-password-text">Elige una contraseña</label>
                <input type="password" name="password" className="login-password-input" onChange={this.handleChange} onBlur={this.handleBlur} value={user.password} />
                <div className="invalid-feedback">{ errors.password }</div>
              </div>
              <div className="login-register-button">
              <button className="register-button" form="register-form" type="submit" disabled={!this.isValid()}> Regístrate!</button>
              </div>
            </form>
          </div>
          
     
    );
  }
}
