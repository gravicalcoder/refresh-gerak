import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'
import {  useMemo, useEffect, useState,useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Pohon_3()
{

    const pohon_3 = useGLTF('./trees/pine_tree.glb')
   // const [loadPohon_2, setLoadPohon_2] = useState(false);
  
    return <>

                    
                    <primitive 
                    object={ pohon_3.scene } 
                    scale={ 0.125}
                    position={ [ 79.5, -1, -60 ] }
                   
                     />

                    
                    

    </>
}