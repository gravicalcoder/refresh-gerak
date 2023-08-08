import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'
import {  useMemo, useEffect, useState,useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Pohon_5()
{

    const pohon_5 = useGLTF('./trees/oak_tree.glb')
   // const [loadPohon_2, setLoadPohon_2] = useState(false);
  
    return <>

                    
                    <primitive 
                    object={ pohon_5.scene } 
                    scale={ 4.125}
                    position={ [ 79.5, -1, -30 ] }
                   
                     />

                    
                    

    </>
}