import { Card } from '@rewind-ui/core'
import React from 'react'

const Evidence = ({info}) => {
    
  return (
    <div>
        <h2>{info.description}</h2>
        <img src={info.source} className='h-[10rem]' />
        <Card>
          <Card.Image>

          </Card.Image>
          <Card.Body>
            <p>{info.description}</p>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Evidence