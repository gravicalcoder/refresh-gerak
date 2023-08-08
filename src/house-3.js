import {  useGLTF  } from '@react-three/drei'


export default function House_3()
{
   
    const house_3 = useGLTF('./rumahe/free__house_low-poly_isometric.glb')

  
    return <>
  
                    <primitive 
                    object={ house_3.scene } 
                    scale={ 10.01}
                    position={ [ -79.5, 0.0, 340 ] }
                    rotation-y={2 }

                     />

                    
    </>
}