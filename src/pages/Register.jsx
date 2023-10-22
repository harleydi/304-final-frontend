import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { register } from '../utils/apiHelper'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')

    
    const navigate = useNavigate()

    // const baseURL = process.env.BASE_URL
  
    const handleOnSubmit = async (e) => {
      e.preventDefault()
      const data = {
        email,
        password,
        firstname: firstName,
        lastname: lastName,
        username
      }
      await register(data)
      navigate('/login')
    }

  return (
    <div className='pt-32 h-screen text-[#CBD5E1] flex items-center justify-center text-center'>
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>First Name: </label>
                <input onChange={(e) => setFirstName(e.target.value)} className='bg-transparent input-main' />
            </div>
            <div>
                <label>Last Name: </label>
                <input onChange={(e) => setLastName(e.target.value)} className='bg-transparent input-main' />
            </div>
            <div>
                <label>Username: </label>
                <input onChange={(e) => setUsername(e.target.value)} className='bg-transparent input-main' />
            </div>
            <div>
                <label>Email: </label>
                <input onChange={(e) => setEmail(e.target.value)} className='bg-transparent input-main' />
            </div>
            <div>
                <label>Password: </label>
                <input onChange={(e) => setPassword(e.target.value)} className='bg-transparent input-main' />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Register