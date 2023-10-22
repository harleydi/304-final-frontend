import React, { useState } from 'react'
import avatar from '../assets/avatar.jpg'
import DashCaseCard from '../components/DashCaseCard'
import { useOutletContext } from 'react-router-dom'

const CasePage = () => {
  const [statement, setStatement] = useState('opening')
  const [team, setTeam] = useState('A')

  const { selectedCase } = useOutletContext()

  console.log(selectedCase.statements[statement])

  

  // const caseFaker = {
  //   id: '4873947836957389758',
  //   caseName: 'Blueface is the father',
  //   plaintiff:  'Chrisean',
  //   defendant: 'Blueface',
  //   summary: 'Blueface claims he is not the father but we are here to prove he is.',
  //   caseStatus: ['open', 'closed', 'mistrial'],
  //   category: 'Parental',
  //   statements: ['statement 1', 'statement 2', 'statement 3'],
  //   plaintiffEvidence: ['Paper', 'Picture'],
  //   defendantEvidence: ['Paper', 'Picture'],
  //   jurors: [],
  //   verdict: 'Pending',
  //   comments: []
  // }

  const getStatement = (num) => {
    return selectedCase.statements[num]
  }

  return (
    <div className='pt-[8rem] h-screen text-[#CBD5E1] flex justify-between'>
        <div className='border-r w-full h-full flex flex-col gap-6 justify-evenly'>
            <div id='plaintiff'>
              <DashCaseCard caseFaker={selectedCase} />
            </div>
            <div id='defendant'>
              <DashCaseCard />
            </div>
        </div>
        <div className='border-r w-[160rem] flex justify-center items-center'>
            {
              team === 'A' ? (
                <p>
                  {selectedCase.statements[statement]}
                </p>
              ) : (
                <p>
                  {getStatement(selectedCase.statements[statement])}
                </p>
              )
            }
        </div>
        <div id='evidence' className='w-full flex justify-center items-center'>
            {
              team === 'A' ? (
                <ul>
                  {selectedCase.plaintiffEvidence.map((item) => <li>{item}</li>)}
                </ul>
              ) : (
                <p>
                  {selectedCase.defendantEvidence.map((item) => <li>{item}</li>)}
                </p>
              )
            }
        </div>
    </div>
  )
}

export default CasePage