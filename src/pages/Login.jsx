import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { login } from '../utils/apiHelper'
import { setUserToken } from '../Auth/authLocalStorage'
import { Button, Input, Text } from '@rewind-ui/core'



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
            <div className='flex gap-4 items-center'>
                <Text variant='h6' color='white'>Email: </Text>
                <Input size='sm' type='email' className='bg-[#374151] focus:bg-[#374151] rounded-md w-[20rem] text-white font-bold' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex gap-4 items-center'>
                <Text variant='h6' color='white'>Password: </Text>
                <Input size='sm' type='password' className='bg-[#374151] focus:bg-[#374151] rounded-md w-[20rem] text-white font-bold' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button onClick={(e) => handleOnSubmit(e)}>Submit</Button>
        </form>
    </div>
  )
}

export default Login