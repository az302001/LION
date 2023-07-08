import React from 'react'
import Card from '../Card/Card'

const Cards = ({p}) => {
  return (
    <div className='grid grid-cols-5 gap-4 p-7'>
      {
        p?.map((e,i)=>{
          return (
            <Card key={i} name={e.name} image={e.image} price={e.pryce} rating={e.rating}/>
          )
        })
      }
    </div>
  )
}

export default Cards