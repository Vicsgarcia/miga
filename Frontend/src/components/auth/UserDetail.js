import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../services/AuthService';
//import User from './User'

class UserDetail extends Component {
    state = {
        user: {
          email: "",
          id:"",
        },
        errors: {},
        touch: {},
        isAuthenticated: true
      }

    componentWillMount() {
        const { user } = this.props.match.params;
        AuthService.authenticate(user)
            .then(
                user => {
                  console.log(user)
                  this.setState({ user })},
                error => {
                    console.error(error);
                    if (error.response && error.response.status === 404) {
                        this.setState({ shouldRedirect: true })
                    }
                }
            )
    }

  render() {
    const { email, id} = this.state.user;
    return (
        <div>
            <h1>{email}</h1>
            <h1>{id}</h1>
        </div>
    )
        
      
  }
}

export default UserDetail;