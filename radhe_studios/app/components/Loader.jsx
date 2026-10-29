'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const increment = prev < 70 ? 5 + (prev * 0.05) : 2
        return Math.min(prev + increment, 100)
      })
    }, 80)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const fadeTimer = setTimeout(() => {
        setFadeOut(true)
      }, 400)

      const hideTimer = setTimeout(() => {
        setHidden(true)
        onLoadingComplete?.()
      }, 1200)

      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [progress, onLoadingComplete])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: '#000000',
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? 'scale(1.05)' : 'scale(1)',
        transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 40%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative flex flex-col items-center gap-10 sm:gap-12">

        {/* Logo */}
        <div
          style={{
            opacity: progress > 5 ? 1 : 0,
            transform: progress > 5 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out',
          }}
        >
          <Image
            src="/white-line-tranasperent.webp"
            alt="Radhe Studios"
            width={256}
            height={64}
            priority
            className="w-48 sm:w-56 md:w-64 object-contain"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(245,158,11,0.2))',
            }}
          />
        </div>

        {/* Progress section */}
        <div
          style={{
            opacity: progress > 10 ? 1 : 0,
            transform: progress > 10 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <div className="flex flex-col items-center gap-6">

            {/* Progress bar */}
            <div className="relative w-48 sm:w-56 md:w-64 h-[2px] rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #d97706, #f59e0b, #fbbf24)',
                  boxShadow: '0 0 20px rgba(245,158,11,0.5), 0 0 40px rgba(245,158,11,0.2)',
                  transition: 'width 0.3s ease-out',
                }}
              />
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                }}
              />
            </div>

            {/* Percentage */}
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-mono tracking-[0.3em] uppercase"
                style={{ color: 'rgba(245,158,11,0.6)' }}
              >
                Loading
              </span>
              <span
                className="text-sm font-mono font-medium"
                style={{
                  color: 'rgba(245,158,11,0.8)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>

        {/* Pulsing dots */}
        <div
          className="flex items-center gap-2"
          style={{
            opacity: progress > 15 ? 1 : 0,
            transition: 'opacity 0.7s ease-out',
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full"
              style={{
                backgroundColor: 'rgba(245,158,11,0.5)',
                animation: `pulse-dot 1.4s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom tagline */}
      <div
        className="absolute bottom-8 sm:bottom-12"
        style={{
          opacity: progress > 20 ? 1 : 0,
          transform: progress > 20 ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        <p
          className="text-[10px] sm:text-xs tracking-[0.4em] uppercase font-light"
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
          Crafting Visual Stories
        </p>
      </div>
    </div>
  )
}

export default Loader
