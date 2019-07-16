import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import AuthService from '../../services/AuthService';
import { withAuthConsumer } from '../../contexts/AuthStore';
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
        const { id } = this.props.user.id;
        AuthService.getProfile(id)
            .then(
                user => {
                  
                  this.setState({ user })},
                error => {
                    console.error(error);
                    if (error.response && error.response.status === 404) {
                        this.setState({ shouldRedirect: true })
                    }
                }
            )
    }

    handleLogout = () => {
        AuthService.logout()
          .then(() => this.props.onUserLogin(null))
      }
    

  render() {
    const { email, id} = this.state.user;
    if (!this.props.isAuthenticated()) {
        return (<Redirect to={`/`}/>)
      }
    return (
        <div>
            <h1>{email}</h1>
            <h1>{id}</h1>
            <button className="" onClick={this.handleLogout}> logout</button>
        </div>
    )
        
      
  }
}

export default withAuthConsumer(UserDetail);