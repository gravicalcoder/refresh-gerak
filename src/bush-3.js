import {  useGLTF  } from '@react-three/drei'


export default function Bush_3()
{

    const bush_3 = useGLTF('./bushes/tulpis_lowpoly.glb')

  
    return <>
  
                    <primitive 
                    object={ bush_3.scene } 
                    scale={ 1.1}
                    position={ [ -79.5, -2.0, 50 ] }
                    rotation-y={0.5 }

                     />

                    
    </>
}