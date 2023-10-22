import React from 'react'
import avatar from '../assets/avatar.jpg'

const DashCaseCard = ({ caseFaker }) => {
  // console.log(caseFaker)
  return (
    <div className='w-[80%] h-[30vh] border'>
      <div className='flex justify-evenly'>
        <img src={avatar} className='avatar' />
        <div>
          <h1>Plaintiff</h1>
          <p>{caseFaker && caseFaker.plaintiff}</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default DashCaseCard