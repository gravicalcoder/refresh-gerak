import {  useGLTF  } from '@react-three/drei'


export default function Pohon_9()
{

    const pohon_9 = useGLTF('./trees/platano_tree.glb')

  
    return <>

                    
                    <primitive 
                    object={ pohon_9.scene } 
                    scale={ 0.05}
                    position={ [ 79.5, -0.5, 135 ] }
                    rotation-y={0.5 }
                   
                     />

                    
                    

    </>
}