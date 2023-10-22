import React from 'react'
import avatar from '../assets/avatar.jpg'
import { Link, useOutletContext } from 'react-router-dom'

const CaseCard = ({ details }) => {
    const { setSelectedCase } = useOutletContext()
    const logo = 'https://cdn.create.vista.com/api/media/medium/471150768/stock-vector-anonymous-gold-plated-metalic-icon-logo-vector?token='
  return (
    <div className='card text-[#CBD5E1] bg-[#10172A] h-[20rem] w-[20rem] border border-[#334154] rounded-2xl'>
        <div className='flex justify-between'  >
            <img src={avatar} className='avatar' />
            <img src={avatar} className='avatar' />
        </div>
        <div className='flex justify-between pt-4'>
            <div>
                <p className='role role-plain'>{details.plaintiff}</p>
            </div>
            <div>
                <p className='role role-def'>{details.defendant}</p>
            </div>
        </div>
        <div className='pt-4'>
            <h3 className='font-bold'>{details.caseName}</h3>
            <p className='role role-success p-0'>Case Open</p>
            <p className='font-thin'>{details.summary}</p>
        </div>
        <button><Link to="/case" onClick={() => setSelectedCase(details)}>View Case</Link></button>
    </div>
  )
}

export default CaseCard