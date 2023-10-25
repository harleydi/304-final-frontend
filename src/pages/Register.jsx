import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { register } from '../utils/apiHelper'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [userImg, setUserImg] = useState(' ')

    
    const navigate = useNavigate()

    // const baseURL = process.env.BASE_URL
  
    const handleOnSubmit = async (e) => {
      e.preventDefault()
      const data = {
        email,
        password,
        firstname: firstName,
        lastname: lastName,
        username,
        // img: userImg
      }
      await register(data)
      console.log()
      navigate('/login')
    }

  return (
    <div className='pt-32 h-screen text-[#CBD5E1] flex items-center justify-center text-center'>
        <form onSubmit={handleOnSubmit} className='flex flex-col gap-4 '>
            <div>
                <label>First Name: </label>
                <input onChange={(e) => setFirstName(e.target.value)} className='bg-transparent outline outline-1 rounded-md' />
            </div>
            <div>
                <label>Last Name: </label>
                <input onChange={(e) => setLastName(e.target.value)} className='bg-transparent outline outline-1 rounded-md' />
            </div>
            <div>
                <label>Username: </label>
                <input onChange={(e) => setUsername(e.target.value)} className='bg-transparent outline outline-1 rounded-md' />
            </div>
            <div>
                <label>Email: </label>
                <input onChange={(e) => setEmail(e.target.value)} className='bg-transparent outline outline-1 rounded-md' />
            </div>
            <div>
                <label>Password: </label>
                <input onChange={(e) => setPassword(e.target.value)} className='bg-transparent outline outline-1 rounded-md' />
            </div>
            <div>
              <label htmlFor="">Profile image:</label>
              <input type='file' onChange={(e) => setUserImg(e.target.value)} />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Register