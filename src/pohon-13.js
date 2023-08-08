import {  useGLTF  } from '@react-three/drei'


export default function Pohon_13()
{

    const pohon_13 = useGLTF('./trees/more_realistic_trees_free.glb')

  
    return <>
  
                    <primitive 
                    object={ pohon_13.scene } 
                    scale={ 11.01}
                    position={ [ 79.5, 0.5, 175 ] }
                    rotation-y={0.5 }

                     />

                    
    </>
}