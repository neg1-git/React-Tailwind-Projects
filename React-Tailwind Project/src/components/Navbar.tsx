import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [nav,setNav]=useState(false)

  const handleNav = () =>{
    setNav((prev)=>!prev)
  }

  return (
  <>
  <div className='flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]'>
    <div className='text-[#00df9a] text-3xl w-full font-bold '>REACT.</div>
    <ul className='justify-between hidden md:flex'>
      <li className='p-4'>Home</li>
      <li className='p-4'>Company</li>
      <li className='p-4'>Resources</li>
      <li className='p-4'>About</li>
      <li className='p-4'>Contact</li>
    </ul>
    <div onClick={handleNav} className='block md:hidden hover:cursor-pointer'
    >{!nav? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}</div>
  
    <div className= {!nav? 'hidden':'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500'}>
      <div className='text-[#00df9a] text-3xl w-full font-bold m-4 pt-4'>REACT.</div>
      <ul className='pt-12 uppercase'>
        <li className='p-4 border-b border-b-gray-800'>Home</li>
        <li className='p-4 border-b border-b-gray-800'>Company</li>
        <li className='p-4 border-b border-b-gray-800'>Resources</li>
        <li className='p-4 border-b border-b-gray-800'>About</li>
        <li className='p-4 border-b border-b-gray-800'>Contact</li>
      </ul>
    </div>
  </div>


  </>
  )
}

export default Navbar