import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'
import {  useMemo, useEffect, useState,useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Pohon_4()
{

    const pohon_4 = useGLTF('./trees/banana_tree.glb')
   // const [loadPohon_2, setLoadPohon_2] = useState(false);
  
    return <>

                    
                    <primitive 
                    object={ pohon_4.scene } 
                    scale={ 1.125}
                    position={ [ 79.5, -1, -60 ] }
                   
                     />

                    
                    

    </>
}