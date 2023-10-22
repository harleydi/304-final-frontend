import React, { useEffect, useState } from 'react'
import CaseCard from '../components/CaseCard'
import { getCases } from '../utils/apiHelper'

const Home = () => {
  const [cases, setCases] = useState()

  useEffect(() => {
    const loadCases = async () => {
      const cases = await getCases()
      // console.log(cases)
      setCases(cases)
    }
    loadCases()
  }, [])

  return (
    <div className='h-screen pt-32 px-16 flex flex-wrap gap-2 overflow-scroll justify-center'>
      {
        cases && cases.map((element) => <CaseCard key={element._id} details={element} />)
      }
    </div>
  )
}

export default Home