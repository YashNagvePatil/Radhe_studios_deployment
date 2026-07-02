import React from 'react'

const Hero = () => {
  return (
    <div className='w-full text-center relative z-50'>
       <div className='relative'>
         <video src="hero.mp4" autoPlay muted loop
          className='h-full w-full object-cover'></video>
       </div>

        {/* <div className='text_div absolute w-2xl  top-40 text-left left-30'>
              <h1 className='font-roboto-condensed font-bold text-8xl text-white '>Marketing So Good, Even Your Competitors Will Notice
         </h1>
        </div> */}
    </div>
  )
}
 
export default Hero
