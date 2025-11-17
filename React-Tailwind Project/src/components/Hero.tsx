import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className='max-w-[800px] w-full h-screen flex flex-col text-center mx-auto justify-center mt-[-96px]'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold md:py-6'>Grow with data</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>Fast, flexible financing for</p>
          <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-[6px] md:pl-4 text-gray-500' strings={["BTB","BTC","SASS"]} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 md:pt-4 mx-auto'>Monitor your data analytics to increase revenue for BTB, BTC & SASS</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-2 text-black hover:cursor-pointer'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero