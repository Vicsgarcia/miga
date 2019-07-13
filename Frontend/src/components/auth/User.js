import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ email, id }) => {

  return (
      <div>
          <h1>{email}</h1>
          <h1>{id}</h1>
          <button className="" onClick={this.handleLogout}> logout</button>
      </div>

  )
}

export default User