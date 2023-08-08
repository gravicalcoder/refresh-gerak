import {  useGLTF  } from '@react-three/drei'


export default function Bush_5()
{

    const bush_5 = useGLTF('./bushes/plant_bush.glb')

  
    return <>
  
                    <primitive 
                    object={ bush_5.scene } 
                    scale={ 0.01}
                    position={ [ -79.5, 0.0, 90 ] }
                    rotation-y={0.5 }

                     />

                    
    </>
}