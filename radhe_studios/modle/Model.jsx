  'use client'

import React from 'react'
import * as THREE from "three"
import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF ,useTexture,Environment} from '@react-three/drei'
import { useControls } from 'leva'
import gsap  from 'gsap'  
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

  
 
  gsap.registerPlugin(ScrollTrigger)



const Model = () => {

  const model = useGLTF("/Models/marble_bust_01_4k.gltf")

  useThree(({camera,scene,gl})=>{    
      camera.position.z=0.6
      gl.toneMapping = THREE.ReinhardToneMapping
      gl.outputColorSpace = THREE.SRGBColorSpace
  })

  // const { posX, posY, posZ, rotX, rotY, rotZ, uniformScale } = useControls('Mesh Fine-Tuning', {
    
  //   // --- POSITION SLIDERS ---
  //   posX: { value: 0, min: -5, max: 5, step: 0.1, label: 'Pos X ↔️' },
  //   posY: { value: -1, min: -5, max: 5, step: 0.1, label: 'Pos Y ↕️' },
  //   posZ: { value: 0, min: -5, max: 5, step: 0.1, label: 'Pos Z ↙️' },
    
  //   // --- ROTATION SLIDERS ---
  //   rotX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01, label: 'Rot X 🔄' },
  //   rotY: { value: Math.PI / 3.2, min: -Math.PI, max: Math.PI, step: 0.01, label: 'Rot Y 🔄' },
  //   rotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01, label: 'Rot Z 🔄' },

  //   // --- UNIFORM SCALE SLIDER ---
  //   // Using one slider for all 3 axes prevents the model from distorting out of shape
  //   uniformScale: { value: 3, min: 0.5, max: 8, step: 0.1, label: 'Scale 📐' }
  // })

 const textures = useTexture({
     normalMap:"/Models/textures/marble_bust_01_nor_gl_4k.jpg",
     roughnessMap:"/Models/textures/marble_bust_01_rough_4k.jpg",
     map:"/Models/textures/marble_bust_01_diff_4k.jpg"
 } )

     textures.normalMap.flipY = false
    textures.map.colorSpace =THREE.SRGBColorSpace



  const modelMaterial =  new THREE.MeshStandardMaterial({
        map:textures.map, 
        normalMap:textures.normalMap,          
        roughnessMap:textures.roughnessMap,
        roughness:1.5
    })


  model.scene.traverse((child)=>{  // thise function is render all elments in model ,if you define material on specife part thise works 
    child.material =  modelMaterial
 })

     useGSAP(() => {
  // If your model isn't fully loaded yet, guard against undefined scene targets

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#About_us",
      start: "top 20%",
      end: "+=2000px",
      markers:false, 
      scrub: 1
    }
  })  


  


  // 1. Animate Position Vector
  tl.to(model.scene.position, {
    x: 0.0,
    y: -0.8,
    z: -0.6,
    ease: "none" // 💡 "none" ensures the movement perfectly sticks to the scroll wheel speed
  }, 0) // 0 means start at the very beginning of the timeline

  // 2. Animate Rotation Euler Angle
  tl.to(model.scene.rotation, {
    x: 0.00,
    y: -0.55,
    z: 0.00,
    ease: "none"
  }, 0) // 0 forces it to run at the exact same time as position

  // 3. Animate Uniform Scale
  tl.to(model.scene.scale, {
    x: 3.2,
    y: 3.2,
    z: 3.2,
    ease: "none"
  }, 0) // 0 links it into the simultaneous animation block

  
  
}, [model])



  return (
      <> 
      
         <primitive 
         object={model.scene} 
           position={[0.2,-0.8,-0.8]} 
           rotation={[0.26,0.46,-0.10]}
           scale={[2.4,2.4,2.4]}
          />
         {/* <directionalLight position={[0,5,5]} color={0xffffff}
          intensity={10}/> */}
          <Environment files={"ferndale_studio_08_4k.hdr"} background={false}/>

         
      </>
  )
}

export default Model