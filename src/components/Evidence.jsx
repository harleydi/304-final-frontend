import React from 'react'

const Evidence = ({info}) => {
    
  return (
    <div>
        <h2>{info.description}</h2>
        <img src={info.source} className='h-[10rem]' />
    </div>
  )
}

export default Evidence