import React from 'react'

const HeroSection = () => {
  return (
    <section className='w-screen'>
            <div className='h-full w-full'>
                <video src="hero.mp4" autoPlay muted loop className='h-full w-full'></video>
            </div>
    </section>
  )
}

export default HeroSection