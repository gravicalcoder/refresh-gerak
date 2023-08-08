import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'
import {  useMemo, useEffect, useState,useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function MobilKlasik()
{

    const mobil = useGLTF('./vehicle/classic_vintage_car.glb')

  
    return <>

                    
                    <primitive 
                    object={ mobil.scene } 
                    scale={ 0.125}
                    position={ [ 79.5, 0, 30 ] }
                   
                     />

                    
                    

    </>
}