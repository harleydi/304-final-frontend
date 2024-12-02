import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { createCase, getAllUsers } from '../utils/apiHelper'
import { Button, Card, Input, Select, Text, Textarea } from '@rewind-ui/core'

const FormPage = () => {
  const [caseName, setCaseName] = useState()
  const [caseagainst, setCaseagainst] = useState()
  const [casesummary, setCasesummary] = useState()
  const [openingStatement, setOpeningStatement] = useState()
  const [evidence, setEvidence] = useState()

  const { activeUserProfile, users } = useOutletContext()

  const navigate = useNavigate()

  
  
  
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const data = {
        caseName,
        defendant: caseagainst,
        summary: casesummary,
        "plaintiffStatement.opening": openingStatement,
        plaintiffEvidence: evidence 
    }
    console.log(data)
    try {
        let result = await createCase(data)
        console.log(result)
        navigate('/')
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
    console.log('handle submit')
    console.log(caseagainst)
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <form onSubmit={(e) => handleOnSubmit(e)} className='flex flex-col items-center justify-center h-[30rem] w-[60rem] gap-2'>
            <div className='flex items-center gap-4'>
                <Text variant='h6' color='white' className='text-center whitespace-nowrap '>Case Name:</Text>
                <Input withRing={false} className='bg-[#374151] focus:bg-[#374151] w-[20rem] text-white font-bold' onChange={(e) => setCaseName(e.target.value)} />
            </div>
            <div className='flex items-center gap-4'>
                <Text variant='h6' color='white' className='text-center whitespace-nowrap' htmlFor="case-title">Case From:</Text>
                <Input withRing={false} className='bg-[#374151] focus:bg-[#374151] w-[20rem] text-white font-bold' placeholder={activeUserProfile ? activeUserProfile.username : ""}  />
            </div>
            <div className='flex items-center gap-4'>
                <Text variant='h6' color='white' className='text-center whitespace-nowrap' htmlFor="case-title">Case Againt:</Text>
                <Select className='bg-[#374151] focus:bg-[#374151] w-[20rem] text-white font-bold' onChange={(e) => setCaseagainst(e.target.value)}>
                    {users.map((user) => {
                        return <option key={user._id} value={user._id}>{user.username}</option>
                    })}
                </Select>
            </div> 
            <div className='flex items-center gap-4'>
                <Text variant='h6' color='white' className='text-center whitespace-nowrap' htmlFor="case-title">Case Summary:</Text>
                <Textarea onChange={(e) => setCasesummary(e.target.value)} className='bg-[#374151] focus:bg-[#374151] w-[20rem] text-white font-bold' />
            </div>
            <div className='flex items-center gap-4'>
                <Text variant='h6' color='white' className='text-center whitespace-nowrap' htmlFor="case-title">Opening Statement:</Text>
                <Textarea onChange={(e) => setOpeningStatement(e.target.value)} className='bg-[#374151] focus:bg-[#374151] w-[20rem] text-white font-bold' />
            </div>
            <div className='flex items-center gap-2'>
                <Text variant='h6' color='white' className='text-center whitespace-nowrap' htmlFor="case-title">File:</Text>
                <Input type='file' className='bg-[#374151] focus:bg-[#374151] w-[20rem] text-white font-bold' onChange={(e) => setEvidence(e.target.value)}  />
            </div>
            <Button type='submit'>Submit case</Button>
        </form>
    </div>
  )
}

export default FormPage