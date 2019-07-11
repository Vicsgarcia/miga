import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({ email, id }) => {

    return (
        <div>
            <h1>{email}</h1>
            <h1>{id}</h1>
        </div>
    )

  
}

export default Profile