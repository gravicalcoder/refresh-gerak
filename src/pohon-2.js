import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'
import {  useMemo, useEffect, useState,useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'


export default function Pohon_2()
{

    const pohon_2 = useGLTF('./trees/coconut_tree_low_poly.glb')
   
  
    return <>

                    
                    <primitive 
                    object={ pohon_2.scene } 
                    scale={ 0.3}
                    position={ [ 79.5, -1, 50 ] }
                    onClick={() => setLoadPohon_3(true)}
                   
                     />

                    

                    
                    

    </>
}