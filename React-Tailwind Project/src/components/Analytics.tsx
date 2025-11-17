import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='mx-auto w-[500px] my-6' src={Laptop} alt="Laptop" />
        <div className='text-black flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='font-bold text-3xl py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, odit. Atque doloribus consectetur commodi? Saepe, quidem! Itaque repellendus dolorum laboriosam sapiente sed quasi, numquam atque? Excepturi tempora hic dolor perspiciatis!</p>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 max-md:mx-auto px-6 py-2 text-[#00df9a] hover:cursor-pointer'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics