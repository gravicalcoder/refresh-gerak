import {  useGLTF  } from '@react-three/drei'


export default function Bush_4()
{

    const bush_4 = useGLTF('./bushes/lemon_grass.glb')

  
    return <>
  
                    <primitive 
                    object={ bush_4.scene } 
                    scale={ 100.1}
                    position={ [ -79.5, 0.0, 70 ] }
                    rotation-y={0.5 }

                     />

                    
    </>
}