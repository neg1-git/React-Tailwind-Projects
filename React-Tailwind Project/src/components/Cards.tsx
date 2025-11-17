import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Card from './Card'


const Cards = () => {
  return (
    <div className='w-full text-black bg-white py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card user='Single User' price='$149' p1='500 GB Storage' p2='1 Granted User' p3='Send upto 2 GB' color='bg-black text-[#00df9a]' link={Single}/>
        <Card user='Partnership' price='$199' p1='1 TB Storage' p2='3 Granted Users' p3='Send upto 10 GB' color='text-black bg-[#00df9a]' bg='bg-gray-500' link={Double}/>
        <Card user='Group Account' price='$299' p1='5 TB Storage' p2='10 Granted Users' p3='Send upto 50 GB' color='bg-black text-[#00df9a]' link={Triple}/>
      </div>
    </div>
  )
}

export default Cards