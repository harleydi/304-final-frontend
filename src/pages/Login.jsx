import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { login } from '../utils/apiHelper'
import { setUserToken } from '../Auth/authLocalStorage'



const Login = () => {
  const { setActiveUser, setActiveUserProfile, setRefreshToken } = useOutletContext()
  const navigavte = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setRefreshToken(true)
    const data = {
      email,
      password
    }

    try {
      const loginAttempt = await login(data)
      if (loginAttempt.success) {
        setUserToken(loginAttempt.token)
        setRefreshToken(false)
        navigavte('/')
      }
      console.log(loginAttempt)
      
    } catch (error) {
      console.error(error.message)
    }


  }

  return (
    <div className='h-screen pt-32 text-[#CBD5E1] flex justify-center items-center  text-center'>
        <form onSubmit={handleOnSubmit} className='flex justify-center items-center gap-6' >
            <div>
                <label>Email: </label>
                <input className='bg-transparent outline outline-1 rounded-md' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input className='bg-transparent outline outline-1 rounded-md' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login