import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import CaseCard from '../components/CaseCard'
import { getCases } from '../utils/apiHelper'


const Home = () => {
  const { cases } = useOutletContext()

  

  return (
    <div className='h-screen pt-32 px-16 flex flex-wrap gap-8 overflow-scroll justify-center'>
      {
        cases && cases.map((element) => <CaseCard key={element._id} details={element} />)
      }
    </div>
  )
}

export default Home