import {  useGLTF  } from '@react-three/drei'


export default function Bush_2()
{

    const bush_2 = useGLTF('./bushes/bush.glb')

  
    return <>
  
                    <primitive 
                    object={ bush_2.scene } 
                    scale={ 0.1}
                    position={ [ -79.5, -2.0, 30 ] }
                    rotation-y={0.5 }

                     />

                    
    </>
}