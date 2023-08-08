import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'
import {  useMemo, useEffect, useState,useRef } from 'react'
import { useFrame } from '@react-three/fiber'


export default function Pohon_1()
{

    const pohon_1 = useGLTF('./trees/tree.glb')
    
  
    return <>

                    
                    <primitive 
                    object={ pohon_1.scene } 
                    scale={ 0.125}
                    position={ [ 79.5, -1, 30 ] }
                    
                   
                     />

                    

                    
                    

    </>
}