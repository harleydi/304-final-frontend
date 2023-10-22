import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { createCase } from '../utils/apiHelper'

const FormPage = () => {
  const [caseName, setCaseName] = useState()
  const [casefrom, setCasefrom] = useState()
  const [caseagainst, setCaseagainst] = useState()
  const [casesummary, setCasesummary] = useState()

  const { activeUserProfile } = useOutletContext()

  const navigate = useNavigate()
  
  
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const data = {
        caseName,
        defendant: caseagainst,
        summary: casesummary
    }
    try {
        const result = await createCase(data)
        if (result) {
            navigate('/')
        }
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
    
  }

  return (
    <div className='h-screen flex justify-center items-center pt-32 text-[#CBD5E1]'>
        <form onSubmit={handleOnSubmit} className='flex flex-col items-center justify-center h-[30rem] w-[60rem] border border-[#CBD5E1]'>
            <div className='flex '>
                <label htmlFor="case-title">Case Name:</label>
                <input type='text' onChange={(e) => setCaseName(e.target.value)} className='input-main bg-transparent outline-[#CBD5E1]' />
            </div>
            <div className='flex'>
                <label htmlFor="case-title">Case From:</label>
                <input type='text' placeholder={activeUserProfile ? activeUserProfile.username : ""}  className='input-main bg-transparent outline-[#CBD5E1]' />
            </div>
            <div className='flex '>
                <label htmlFor="case-title">Case Againt:</label>
                <input type='text' onChange={(e) => setCaseagainst(e.target.value)} className='input-main bg-transparent outline-[#CBD5E1]' />
            </div>
           
            <div className='flex flex-col'>
                <label htmlFor="case-title">Case Summary:</label>
                <textarea onChange={(e) => setCasesummary(e.target.value)} className='input-main bg-transparent outline-[#CBD5E1]' />
            </div>
            <button type='submit'>Submit case</button>
        </form>
    </div>
  )
}

export default FormPage