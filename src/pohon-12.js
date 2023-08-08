import {  useGLTF  } from '@react-three/drei'


export default function Pohon_12()
{

    const pohon_12 = useGLTF('./trees/tree_2.glb')

  
    return <>
  
                    <primitive 
                    object={ pohon_12.scene } 
                    scale={ 7.01}
                    position={ [ 59.5, 60.5, 175 ] }
                    rotation-y={0.5 }

                     />

                    
    </>
}