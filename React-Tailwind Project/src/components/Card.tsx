import React from 'react'

function Card({
  user,
  price,
  p1,
  p2,
  p3,
  color,
  bg,
  link,
}){
  return(
  <div className={`${bg}  w-full text-center p-4 my-4 rounded-lg shadow-lg hover:shadow-[#00df9a] hover:shadow-2xl shadow-gray-700 hover:scale-105 ease-in-out duration-300`}>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={link} alt="/" />
          <h2 className='text-2xl font-bold py-8'>{user}</h2>
          <p className='text-4xl font-bold'>{price}</p>
          <div className='font-medium'>
            <p className='py-2 mx-8 border-b mt-8 border-t'>{p1}</p>
            <p className='py-2 mx-8 border-b'>{p2}</p>
            <p className='py-2 mx-8 border-b'>{p3}</p>
          </div>
          <button className={`${color} w-[200px] rounded-md font-medium sm:ml-4 my-6 px-4 mx-auto py-2 hover:cursor-pointer`}>Start Trial</button>
        </div>
  )
}

export default Card