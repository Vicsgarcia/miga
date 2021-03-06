import React, { Component } from 'react'

const CURRENT_USER_KEY = 'current-user';
const AuthContext = React.createContext();

class AuthStore extends Component {
  state = {
    user: JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || '{}')
  }

  handleUserLogin = (user) => {
    this.setState({ user })
    if (user) localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
    else localStorage.removeItem(CURRENT_USER_KEY)
  }

  isAuthenticated = () => {
    return this.state.user && this.state.user.id 
  }

  render() {
    return (
      <AuthContext.Provider value={{ 
        user: this.state.user,
        onUserLogin: this.handleUserLogin,
        isAuthenticated: this.isAuthenticated
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const withAuthConsumer = (WrappedComponent) => {
  
  return () => (
    <AuthContext.Consumer>
      {(props) => (<WrappedComponent {...props} />)}
    </AuthContext.Consumer>
  );
}

export { AuthStore, AuthContext, withAuthConsumer }

