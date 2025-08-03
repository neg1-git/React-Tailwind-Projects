import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {heroVideo,smallHeroVideo} from '../utils'

const Hero = () => {

  const [vidSrc,setVidSrc]=useState(window.innerWidth<760? smallHeroVideo : heroVideo)

  const handleVidSrcSet=()=>{
    setVidSrc(window.innerWidth<760? smallHeroVideo : heroVideo)
  }

  /* this use effect is used to fix that resize bug where if the screen is resized, the things for small screen gets carried onto the big screen */

  useEffect(() => {
    window.addEventListener('resize', handleVidSrcSet)

    return()=>{
      window.removeEventListener('resize', handleVidSrcSet)
    }
  }, [])
  

  useGSAP(()=>{
    gsap.to('#hero',{opacity: 1, delay:2})
    gsap.to('#cta',{opacity:1, y:-45 ,delay:2})
  },[])

  return (
    <section className='w-full bg-black relative nav-height'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title'>iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>

          {/* <video
            src={heroVideo}
            className="hidden md:block pointer-events-none"
            autoPlay
            muted
            playsInline
          />

          <video
            src={smallHeroVideo}
            className="block md:hidden pointer-events-none"
            autoPlay
            muted
            playsInline
          />

          the tailwind method instead of usestate butt use efffect cant be used like this so ya
          */}

          <video autoPlay muted playsInline={true} key={vidSrc} className='pointer-events-none' src={vidSrc} type='video/mp4'></video>
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="#highlights" className='btn'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero