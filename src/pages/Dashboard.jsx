import React, { useEffect, useState } from 'react'
import avatar from '../assets/avatar.jpg'
import DashCaseCard from '../components/DashCaseCard'
import { useOutletContext } from 'react-router-dom'
import { updateCase } from '../utils/apiHelper'
import Evidence from '../components/Evidence'
import { Tabs } from '@rewind-ui/core'

const CasePage = ({ id }) => {
  const { selectedCase, activeUserProfile, activeUser, cases, activeArgument, setActiveArgument } = useOutletContext()

  const [statement, setStatement] = useState('opening')
  const [team, setTeam] = useState('A')
  const [userStatus, setUserStatus] = useState()
  const [addEvidenceForm, setAddEvidenceForm] = useState([])
  const [evidenceInput, setEvidenceInput] = useState()
  const [xEvidence, setXEvidence] = useState(selectedCase.plaintiffEvidence)
  const [yEvidence, setYEvidence] = useState(selectedCase.defendantEvidence)


  // const plaintiffEvidence = selectedCase.plaintiffEvidence.map((item) => { 
  //   <li className='border border-[#334154] rounded-md py-8 px-20'>{item.name}</li> 
  // })
  // const defendantEvidence = selectedCase.defendantEvidence.map((item) => { 
  //   <li className='border border-[#334154] rounded-md py-8 px-20'>{item.name}</li> 
  // })
  // console.log(id)
  // useEffect(() => {
  //   const caseResult = cases.map((result) => result._id === id)
  //   console.log(caseResult)
  //   // setXEvidence(plaintiffEvidence)
  //   // setYEvidence(defendantEvidence) 

  // }, [])
  // console.log(selectedCase.plaintiffEvidence)

  useEffect(() => {
    if (activeArgument === 'o') {

    }
  })

  console.log(xEvidence)

  const xplaintiff = {
    opening: {
      statement: selectedCase.plaintiffStatements.opening,
      evidence: selectedCase.plaintiffEvidence.map((item) => item.phase === 'opening')
    },
    argument: {
      statement: selectedCase.plaintiffStatements.argument,
      evidence: selectedCase.plaintiffEvidence.map((item) => item.phase === 'argument')
    },
    closing: {
      statement: selectedCase.plaintiffStatements.closing,
      evidence: selectedCase.plaintiffEvidence.map((item) => item.phase === 'closing')
    },
  }
  
  


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
        <div className='flex'>
          {participant === 'defendant' ? (
              <div className='flex'>
                <div id='plaintiff' onClick={() => setTeam('A')} className='card'>
                  <DashCaseCard variant={participant} />
                </div>
                <div id='defendant' onClick={() => setTeam('B')} className='card'>
                  <DashCaseCard variant={'plaintiff'} />
                </div>
              </div>
            ) : (
              <div className='flex flex-col gap-2.5 justify-center'>
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

        {/* ARGUMENTS */}
        <div className='border-x-2 w-[140rem] px-6 flex flex-col justify-center items-center text-center'>
            {/* <div className='absolute top-[10rem] flex gap-8'>
              <button onClick={(e) => {
                setStatement('opening')
               
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
                  {selectedCase && selectedCase.plaintiffStatements[statement]}
                </p>
              ) : (
                <p>
                  {selectedCase && selectedCase.defendantStatements[statement]}
                </p>
              )
            } */}
            <Tabs color='blue' className='flex flex-col items-center'>
              <Tabs.List className='mb-60'>
                <Tabs.Tab className='text-white' anchor='t1' onClick={(e) => setStatement('opening')}>Opening</Tabs.Tab>
                <Tabs.Tab className='text-white' anchor='t2' onClick={(e) => setStatement('argument')}>Argument</Tabs.Tab>
                <Tabs.Tab className='text-white' anchor='t3' onClick={(e) => setStatement('closing')}>Closing</Tabs.Tab>
              </Tabs.List>
              <Tabs.Content className='mb-56'>
                {
                  team === 'A' ? (
                    <Tabs.Content>
                      {selectedCase && selectedCase.plaintiffStatements[statement]}
                    </Tabs.Content>
                  ) : (
                    <Tabs.Content>
                      {selectedCase && selectedCase.defendantStatements[statement]}
                    </Tabs.Content>
                  )
                }
              </Tabs.Content>
              <Tabs.Content></Tabs.Content>
              <Tabs.Content></Tabs.Content>
            </Tabs>
        </div>

        {/* EVIDENCE */}
        <div id='evidence' className='h-auto w-full pt-[10rem] flex flex-col justify-center items-center overflow-scroll'>
            {
              team === 'A' ? (
                <div>
                  <ul className='flex flex-col items-center gap-4'>
                    {xEvidence.map((item) => <Evidence key={item._id} info={item} />)}
                  </ul>
                </div>
              ) : (
                <ul className='flex flex-col items-center gap-4'>
                    {yEvidence}
                  </ul>
              )
            }
        </div>
    </div>
  )
}

export default CasePage