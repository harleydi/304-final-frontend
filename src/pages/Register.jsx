import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { register } from '../utils/apiHelper'
import { Button, Input, Text } from '@rewind-ui/core'

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
      {/* DONT FORGRT TO PUT BACK THE FUNCTIONS TO SET DATAE FOR THE FOR SUBMISSION */}
        <form onSubmit={handleOnSubmit} className='flex flex-col gap-4 '>
            <div className='flex gap-4 items-center'>
              <Text variant='h6' color='white'>First Name: </Text>
              <Input size='sm' className='bg-[#374151] focus:bg-[#374151] rounded-md w-[20rem] text-white font-bold' onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className='flex gap-4 items-center'>
              <Text variant='h6' color='white'>Last Name: </Text>
              <Input size='sm' className='bg-[#374151] focus:bg-[#374151] rounded-md w-[20rem] text-white font-bold' onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='flex gap-4 items-center'>
              <Text variant='h6' color='white'>Username: </Text>
              <Input size='sm' className='bg-[#374151] focus:bg-[#374151] rounded-md w-[20rem] text-white font-bold' onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='flex gap-4 items-center'>
              <Text variant='h6' color='white'>Email: </Text>
              <Input size='sm' className='bg-[#374151] focus:bg-[#374151] rounded-md w-[20rem] text-white font-bold' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex gap-4 items-center'>
              <Text variant='h6' color='white'>Password: </Text>
              <Input size='sm' type='password' className='bg-[#374151] focus:bg-[#374151] rounded-md w-[20rem] text-white font-bold' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='flex gap-4 items-center'>
              <Text variant='h6' color='white'>Profile picture: </Text>
              <Input size='sm' type='file' className='bg-[#374151] focus:bg-[#374151] rounded-md w-[20rem] text-white font-bold' onChange={(e) => setUserImg(e.target.value)} />
            </div>
            <Button>Submit</Button>
        </form>
    </div>
  )
}

export default Register