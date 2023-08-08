import {  useGLTF  } from '@react-three/drei'


export default function Bush_1()
{

    const bush_1 = useGLTF('./bushes/fern_bush.glb')

  
    return <>
  
                    <primitive 
                    object={ bush_1.scene } 
                    scale={ 11.01}
                    position={ [ -79.5, -2.0, 10 ] }
                    rotation-y={0.5 }

                     />

                    
    </>
}