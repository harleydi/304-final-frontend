import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { createCase, getAllUsers } from '../utils/apiHelper'

const FormPage = () => {
  const [caseName, setCaseName] = useState()
  const [caseagainst, setCaseagainst] = useState()
  const [casesummary, setCasesummary] = useState()

  const { activeUserProfile, users } = useOutletContext()

  const navigate = useNavigate()

  
  
  
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const data = {
        caseName,
        defendant: caseagainst,
        summary: casesummary
    }
    console.log(data)
    try {
        let result = await createCase(data)
        console.log(result)
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
    console.log('handle submit')
    console.log(caseagainst)
  }

  return (
    <div className='h-screen flex justify-center items-center pt-32 text-[#CBD5E1]'>
        <form onSubmit={handleOnSubmit} className='flex flex-col items-center justify-center h-[30rem] w-[60rem] gap-2'>
            <div className='flex '>
                <label htmlFor="case-title">Case Name:</label>
                <input type='text' onChange={(e) => setCaseName(e.target.value)} className='input-main bg-transparent outline-[#CBD5E1] text-center' />
            </div>
            <div className='flex'>
                <label htmlFor="case-title">Case From:</label>
                <input type='text' placeholder={activeUserProfile ? activeUserProfile.username : ""}  className='input-main bg-transparent outline-[#CBD5E1]' />
            </div>
            <div className='flex '>
                <label htmlFor="case-title">Case Againt:</label>
                {/* <input type='text' onChange={(e) => setCaseagainst(e.target.value)} className='input-main bg-transparent outline-[#CBD5E1]' /> */}
                <select onChange={(e) => setCaseagainst(e.target.value)} className='bg-transparent'>
                    {users.map((user) => {
                        return <option key={user._id} value={user._id}>{user.username}</option>
                    })}
                </select>
            </div>
           
            <div className='flex flex-col'>
                <label htmlFor="case-title">Case Summary:</label>
                <textarea onChange={(e) => setCasesummary(e.target.value)} className='input-main bg-transparent outline-[#CBD5E1]' />
            </div>
            <button>Submit case</button>
        </form>
    </div>
  )
}

export default FormPage