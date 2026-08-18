import Image from "next/image";
import HeroSection from "@/pages/HeroSection";
import Info from "@/pages/Info";
import ClientShowcase from "@/pages/Clients";
import WorkCatalog from "@/pages/OwrWork";
import Model from "@/modle/Model";
export default function Home() {
  return (
   <>
        {/* <div style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        backgroundImage: "url(/bg.jpg)",
        zIndex: 1
      }}>
        <Canvas
          gl={{ alpha: true }}
          id="Canvas"
          style={{ height: "100%", width: "100%", position: "relative" }}
        >
          <ambientLight intensity={0.5} />
          <Model />
        </Canvas>
        </div> */}

       <HeroSection/>
          <Info/>
      <ClientShowcase/>
        <WorkCatalog/>
   </>
  )
}
