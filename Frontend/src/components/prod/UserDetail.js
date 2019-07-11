
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../services/AuthService';
import Profile from '../../auth/Profile'

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
        const { id } = this.props.match.params;
        AuthService.getProfile(id)
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