import React, { useState } from 'react'
import avatar from '../assets/avatar.jpg'
import DashCaseCard from '../components/DashCaseCard'
import { useOutletContext } from 'react-router-dom'
import { updateCase } from '../utils/apiHelper'

const CasePage = () => {
  const [statement, setStatement] = useState('opening')
  const [team, setTeam] = useState('A')
  const [userStatus, setUserStatus] = useState()
  const [addEvidenceForm, setAddEvidenceForm] = useState([])
  const [evidenceInput, setEvidenceInput] = useState()

  const { selectedCase, activeUserProfile, activeUser } = useOutletContext()

  // console.log(selectedCase.plaintiffStatements[statement])

  const plaintiffEvidence = selectedCase.plaintiffEvidence.map((item) => <li className='border border-[#334154] rounded-md py-8 px-20'>{item.name}</li>)
  const defendantEvidence = selectedCase.defendantEvidence.map((item) => <li className='border border-[#334154] rounded-md py-8 px-20'>{item.name}</li>)
  // console.log(selectedCase.plaintiffEvidence)

  


  const checkIfUserIsParticipant = () => {
    if (activeUser) {
      let resultA = activeUserProfile._id === selectedCase.plaintiff
      let resultB = activeUserProfile._id === selectedCase.defendant
      let resultC
      if (resultA) {
        resultA = 'plaintiff'
        // setUserStatus(resultA)
      } else if (resultB) {
        resultB = 'defendant'
        // setUserStatus(resultB)
      } else {
        resultC = 'other'
      }
      return resultA || resultB || resultC
    } else {
      return 'other'
    }
  }
  // console.log(checkIfUserIsParticipant())
  const participant = checkIfUserIsParticipant()
 
  
  
  const addEvidence = () => {
    setAddEvidenceForm(
      <form onSubmit={handleEvidenceSubmit}>
        <label htmlFor="">Evidence name</label>
        <input type="file" onChange={(e) => setEvidenceInput(e.target.files[0]) }  />
        <button>submit</button>
      </form>
    )
  }

  const unclick = (e) => {
    e.preventDefault()
    e.target.style.color = white
    
  }
  
  

  return (
    <div className='pt-[8rem] h-screen text-[#CBD5E1] flex justify-between'>
        <div className='border-r w-full h-full flex flex-col gap-6 justify-evenly items-center'>
          {participant === 'defendant' ? (
              <div className='flex justify-between'>
                <div id='plaintiff' onClick={() => setTeam('A')} className='card'>
                  <DashCaseCard variant={participant} />
                </div>
                <div id='defendant' onClick={() => setTeam('B')} className='card'>
                  <DashCaseCard variant={'plaintiff'} />
                </div>
              </div>
            ) : (
              <div>
                <div id='plaintiff' onClick={() => setTeam('A')} className='card'>
                  <DashCaseCard variant={'plaintiff'} />
                </div>
                <div id='defendant' onClick={() => setTeam('B')} className='card'>
                  <DashCaseCard variant={'defendant'} />
                </div>
              </div>
            )
          }
        </div>
        <div className='border-r w-[160rem] px-6 flex flex-col justify-center items-center text-center'>
            <div className='absolute top-[10rem] flex gap-8'>
              <button onClick={(e) => {
                setStatement('opening')
                e.target.style.color = 'red'
              }}>Opening</button>
              <button onClick={(e) => {
                setStatement('argument')
                e.target.style.color = 'red'
              }}>Argument</button>
              <button onClick={(e) => {
                setStatement('closing')
                e.target.style.color = 'red'
              }}>Closing</button>
            </div>
            {
              team === 'A' ? (
                <p>
                  {selectedCase.plaintiffStatements[statement]}
                </p>
              ) : (
                <p>
                  {selectedCase.defendantStatements[statement]}
                </p>
              )
            }
        </div>
        <div id='evidence' className='w-full flex flex-col justify-center items-center'>
            {
              team === 'A' ? (
                <div>
                  {participant === 'other' ? (
                    <button>Evidence</button>
                  ) : (
                    <button onClick={addEvidence}>Add Evidence</button>
                  ) }
                  {addEvidenceForm}
                  <ul className='flex flex-col items-center gap-4'>
                    {plaintiffEvidence}
                  </ul>
                </div>
              ) : (
                <ul className='flex flex-col items-center gap-4'>
                    {defendantEvidence}
                  </ul>
              )
            }
        </div>
    </div>
  )
}

export default CasePage