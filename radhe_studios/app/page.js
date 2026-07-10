import Image from "next/image";
import HeroSection from "@/pages/HeroSection";
import Info from "@/pages/Info";
import ClientShowcase from "@/pages/Clients";
import WorkCatalog from "@/pages/OwrWork";
export default function Home() {
  return (
   <>
      <HeroSection/>
      <Info/>
      <ClientShowcase/>
      <WorkCatalog/>

   </>
  )
}
