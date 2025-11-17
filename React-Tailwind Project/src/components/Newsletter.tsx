import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 px-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Want tips and tricks to optimise your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4 px-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
            <input className='bg-white text-black rounded-md p-2 w-full' type="email" placeholder='Enter Email' />
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium sm:ml-4 my-6 px-4 mx-auto py-2 text-black hover:cursor-pointer'>Notify Me</button>
          </div>
          <p className='text-sm'>We care about the protection of your data. Read our <a className='text-[#00df9a] underline' href="#">Privacy Policy.</a></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter