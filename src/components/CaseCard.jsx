import React, { useEffect, useState } from 'react'
import avatar from '../assets/avatar.jpg'
import { Link, useOutletContext } from 'react-router-dom'
import { getUserInfo } from '../utils/apiHelper'
import { Avatar, Badge, Button, Text } from '@rewind-ui/core'


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
            <div className='flex flex-col justify-center items-center mx-4'  >
                {/* <img src={avatar} className='avatar m-4' /> */}
                <Avatar 
                    src={avatar}
                    status='online'
                />
                <Badge color='black' tone='light' radius='full'>{plaintiff ? plaintiff : "General"}</Badge>
            </div>
            <div className='flex flex-col justify-center items-center mx-4'>
                {/* <img src={avatar} className='avatar m-4' /> */}
                <Avatar 
                    src={avatar}
                    status='online'
                />
                <Badge color='black' tone='light' radius='full'>{defendant ? defendant : "General"}</Badge>
            </div>
        </div>
        <div className='pt-4 flex flex-col text-center justify-center items-center gap-2'>
            <Text color='white' variant='h1' className='font-bold'>{details.caseName}</Text>
            <Badge color='green' tone='outline'>Case Open</Badge>
            <p className='font-thin overflow-scroll'>{details.summary}</p>
            <Button colo ><Link to="/case" onClick={() => setSelectedCase(details)}>View Case</Link></Button>
            {/* <Button to onPress={() => setSelectedCase(details)}>View Case</Button> */}
        </div>
        
    </div>
  )
}

export default CaseCard