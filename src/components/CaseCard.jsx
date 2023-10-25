import React, { useEffect, useState } from 'react'
import avatar from '../assets/avatar.jpg'
import { Link, useOutletContext } from 'react-router-dom'
import { getUserInfo } from '../utils/apiHelper'

const CaseCard = ({ details, cases }) => {
    const [plaintiff, setPlaintiff] = useState()
    const [defendant, setDefendant] = useState()

    const { setSelectedCase, selectedCase } = useOutletContext()
    
    
    useEffect(() => {
        const loadCardInfo = async () => {
            let x = await getUserInfo(details.plaintiff)
            let y = await getUserInfo(details.defendant)
            // console.log(x.username)
            // console.log(y.username)
            setPlaintiff(x.username)
            setDefendant(y.username)
            return x
        }
        loadCardInfo()
    }, [cases])

  return (
    <div className='card text-[#CBD5E1] bg-[#10172A] h-[22rem] w-[40rem] border border-[#334154] rounded-2xl'>
        <div className='pt-4 flex justify-between'>
            <div className='flex flex-col justify-center'  >
                <img src={avatar} className='avatar mt-4 ml-20' />
                <p className='role role-plain px-4 mx-2 text-center'>{plaintiff ? plaintiff : "General"}</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={avatar} className='avatar m-4' />
                <p className='role role-def px-4 mx-2'>{defendant ? defendant : "General"}</p>
            </div>
        </div>
        <div className='pt-4 flex flex-col text-center justify-center items-center gap-2'>
            <h3 className='font-bold'>{details.caseName}</h3>
            <p className='role role-success p-0 w-[6rem]'>Case Open</p>
            <p className='font-thin overflow-scroll'>{details.summary}</p>
            <button><Link to="/case" onClick={() => setSelectedCase(details)}>View Case</Link></button>
        </div>
        
    </div>
  )
}

export default CaseCard