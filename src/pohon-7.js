import {  useGLTF  } from '@react-three/drei'


export default function Pohon_7()
{

    const pohon_7 = useGLTF('./trees/tree_1.glb')

  
    return <>

                    
                    <primitive 
                    object={ pohon_7.scene } 
                    scale={ 0.05}
                    position={ [ 79.5, -0.5, 75 ] }
                   
                     />

                    
                    

    </>
}