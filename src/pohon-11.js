import {  useGLTF  } from '@react-three/drei'


export default function Pohon_11()
{

    const pohon_11 = useGLTF('./trees/cypress_tree.glb')

  
    return <>
  
                    <primitive 
                    object={ pohon_11.scene } 
                    scale={ 7.01}
                    position={ [ 79.5, 0.5, 185 ] }
                    rotation-y={0.5 }

                     />

                    
    </>
}