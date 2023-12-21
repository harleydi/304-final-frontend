import React from 'react'

const Evidence = ({info}) => {
    
  return (
    <div>
        <h2>{info.description}</h2>
        <img src={info.source} />
    </div>
  )
}

export default Evidence