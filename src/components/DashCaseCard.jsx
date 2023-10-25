import React, { useEffect, useState } from 'react'
import avatar from '../assets/avatar.jpg'
import { useOutletContext } from 'react-router-dom'
import { getUserInfo } from '../utils/apiHelper'

const DashCaseCard = ({ variant }) => {
  const { cases, selectedCase} = useOutletContext()
  const [caseUsers, setCaseUsers] = useState({
    plaintiff: '',
    defendant: ''
  })

  const variantFuc = () => {
    if (variant === 'plaintiff') {

    }
  }

  // console.log(selectedCase)

  useEffect(() => {
    const loadCaseUsers = async () => {
        let x = await getUserInfo(selectedCase.plaintiff)
        let y = await getUserInfo(selectedCase.defendant)
        // console.log(y)
        setCaseUsers({ plaintiff: x, defendant: y })
        
      }
      
    loadCaseUsers()
  }, [selectedCase])

  // console.log(caseUsers)
  return (
    <div className='w-[20rem] h-[30vh] border border-[#334154] rounded-lg flex flex-col justify-evenly items-center'>
      <img src={avatar} className='avatar' />
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-lg'>{variant === 'plaintiff' ? caseUsers.plaintiff.username : caseUsers.defendant.username}</h1>
        <p className='font-extralight uppercase text-xs tracking-normal'>{variant === 'plaintiff' ? 'Plaintiff' : 'Defendant'}</p>
      </div>
    </div>
  )
}

export default DashCaseCard