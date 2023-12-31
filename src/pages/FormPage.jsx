import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { createCase, getAllUsers } from '../utils/apiHelper'

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
            <div id='basic' className='border border-[#334154] w-11/12 h-[40vh] flex flex-col items-center justify-center gap-8'>
                <div className='flex gap-2'>
                    <label htmlFor="case-title">Case Name:</label>
                    <input type='text' onChange={(e) => setCaseName(e.target.value)} className='border-b-2 outline-none  bg-transparent text-center' />
                </div>
                <div className='w-full flex justify-evenly'>
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
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="case-title">Case Summary:</label>
                    <textarea onChange={(e) => setCasesummary(e.target.value)} className='input-main bg-transparent outline-[#CBD5E1]' />
                </div>
            </div>
            <div id="timeline" className='border border-[#334154] w-11/12 h-[40vh]'>
                <div className='flex flex-col'>
                    <label htmlFor="case-title">Opening Statement:</label>
                    <textarea onChange={(e) => setOpeningStatement(e.target.value)} className='input-main bg-transparent outline-[#CBD5E1]' />
                </div>
            </div>
            <div id="supporting" className='border border-[#334154] w-11/12 h-[40vh]'>
                <div className='flex gap-2'>
                    <label htmlFor="case-title">Case Name:</label>
                    <input type='file' onChange={(e) => setEvidence(e.target.value)}  />
                </div>
            </div>
            <button>Submit case</button>
        </form>
    </div>
  )
}

export default FormPage