import React, { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import Avatar from '../assets/avatar.jpg'


const Navbar = ({ activeUser, activeUserProfile }) => {
  
  
  return (
    <div>
      {
        activeUser ? (
          <div className='bg-[#160e10] h-[3rem] w-[80vw] absolute left-28 top-8 rounded-full px-6 flex justify-between items-center text-white'>
            <h4>{activeUserProfile.username}</h4>
            <div className='flex gap-5'>
              <Link>Explore</Link>
              <Link to="/form">Create Case</Link>
              <Link to="/login">Logout</Link>
              <img src={Avatar} className='avatar-nav' />
            </div>
          </div>
        ) : (
          <div className='bg-[#160e10] h-[3rem] w-[80vw] absolute left-28 top-8 rounded-full px-6 flex justify-between items-center text-white'>
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