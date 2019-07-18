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
        <div className="profile-card">
            <h1 className="profile-title">Bienvenido a tu perfil</h1>
            <h3 className="profile-subtitle"> Desde aquí podras:</h3>
            <ul className="profile-list">
              <li>Ver tus datos de contacto</li>
              <li>Salir de tu cuenta</li>
            </ul>
            <p className="email-text-title"> Tu email: </p>
            <p className="email-text">{email}</p>

            <p className="email-text-title">Tu numero de usuario:</p>
            <p className="email-text">{id}</p>

            <p className="email-text-title">¿Quieres salir de tu cuenta?</p>
            <button className="login-button" onClick={this.handleLogout}> Cerrar Sesión</button>
        
        </div>
    )
        
      
  }
}

export default withAuthConsumer(UserDetail);