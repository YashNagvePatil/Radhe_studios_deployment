   'use client'

import Image from "next/image";
import Model from "./common/Model";
import { Canvas } from "@react-three/fiber";
import Hero from "./components/Hero";
const  Home = () =>{
 
 
  return (
    <>
       <div style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        backgroundImage: "url(/oliver-guhr-nLjR95HKXmA-unsplash.jpg)",
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
      </div> 
      <Hero/>     
    </>
  );
}

export default Home;
