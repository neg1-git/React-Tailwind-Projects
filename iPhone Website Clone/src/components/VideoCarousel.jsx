import React, { useState } from 'react'
import { hightlightsSlides } from '../constants'
import { useRef } from 'react'
import { useEffect } from 'react';

const VideoCarousel = () => {
  return (
    <>
      <div className=' flex items-center overflow-x-auto scroll-snap-x snap-mandatory scrollbar-hide'>
        {hightlightsSlides.map((list,i)=>(
          <div key={list.id} id='slider' className='snap-start shrink-0 sm:pr-20 pr-10'>
            <div className='video-carousel_container'>
              <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                <video id='video' autoPlay loop playsInline={true} preload='auto' muted src={list.video} type='video/mp4'></video>
              </div>
              <div className='absolute top-12 left-[5%] z-10'>{list.textLists.map((text)=>(
                <p key={text} className='md:text-2xl text-xl font-medium'>{text}</p>
              ))}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default VideoCarousel
