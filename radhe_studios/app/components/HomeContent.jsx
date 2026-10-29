'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from "@/pages/HeroSection"
import Info from "@/pages/Info"
import ClientShowcase from "@/pages/Clients"
import WorkCatalog from "@/pages/OwrWork"

// Load the Loader only on client side — no SSR at all = no hydration mismatch
const Loader = dynamic(() => import('../components/Loader'), { ssr: false })

export default function HomeContent() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <Loader onLoadingComplete={() => setIsLoaded(true)} />
      <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
        <HeroSection />
        <Info />
        <ClientShowcase />
        <WorkCatalog />
      </div>
    </>
  )
}
