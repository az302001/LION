// import Image from 'next/image'
import React from 'react'

const Card = ({ name, image, price,rating }) => {
  return (
    <div class="w-[100%] h-[90%] bg-white rounded-lg shadow-md transition border-0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) border-2 border-gray-400 hover:border-blue-500 flex flex-col p-7 cursor-pointer hover:translate-y-[-25px] mt-10 ">

      <div className='w-[100%] h-[20%]  lg:h-[15%] md:h-[20%] text-[15px] font-bold text-center'>
        <h1>{name}</h1>
      </div>
      <div className='w-[100%] h-[60%] lg:h-[65%] md:h-[60%] object-cover'>
        <img src={image} alt={name}  className='w-[100%] h-[100%] ' />
      </div>
      <div className='w-[100%] h-[10%]'>
        <p>rating: {rating}</p>
      </div>

      <div className='w-[100%] h-[10%] text-[20px]'>
        <h2>${price}</h2>
      </div >

      {/* <div className='w-[100%] h-[10%]'>
        <p>{description}</p>
      </div> */}
    </div>

  )
}

export default Card