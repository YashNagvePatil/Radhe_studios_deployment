import React from 'react'

const HeroSection = () => {
  return (
    <section className='w-screen'>
            <div className='h-full w-full'>
                <video src="hero.MOV" autoPlay muted loop className='h-full w-full bg-cover'></video>
            </div>
    </section>
  )
}

export default HeroSection