import {  useGLTF  } from '@react-three/drei'


export default function Pohon_10()
{

    const pohon_10 = useGLTF('./trees/old_tree.glb')

  
    return <>

                    
                    <primitive 
                    object={ pohon_10.scene } 
                    scale={ 4.01}
                    position={ [ 79.5, -0.5, 165 ] }
                    rotation-y={0.5 }
                   
                     />

                    
                    

    </>
}