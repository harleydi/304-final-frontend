import React, { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import Avatar from '../assets/avatar.jpg'
import { removeUserToken } from '../Auth/authLocalStorage'


const Navbar = ({ activeUser, activeUserProfile, setActiveUser, setActiveUserProfile }) => {
  
  const handleLogout = () => {
    const logout = removeUserToken()
    if (logout) {
      setActiveUser("")
      setActiveUserProfile("")
      console.log('logged out user')
    }
  }
  
  return (
    <div>
      {
        activeUser ? (
          <div className='navbar'>
            <h4>{activeUserProfile.username}</h4>
            <div className='flex gap-5'>
              <Link>Explore</Link>
              <Link to="/form">Create Case</Link>
              <Link to="/login" onClick={handleLogout}>Logout</Link>
              <img src={Avatar} className='avatar-nav' />
            </div>
          </div>
        ) : (
          <div className='navbar'>
            <h4>ECourt</h4>
            <div className='flex gap-5'>
              <Link>Explore</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Navbar