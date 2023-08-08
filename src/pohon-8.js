import {  useGLTF  } from '@react-three/drei'


export default function Pohon_8()
{

    const pohon_8 = useGLTF('./trees/bodhi_tree.glb')

  
    return <>

                    
                    <primitive 
                    object={ pohon_8.scene } 
                    scale={ 1.01}
                    position={ [ 79.5, -0.5, 105 ] }
                    rotation-y={0.5 }
                   
                     />

                    
                    

    </>
}