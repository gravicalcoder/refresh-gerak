import {  useGLTF  } from '@react-three/drei'


export default function House_2()
{
   
    const house_2 = useGLTF('./rumahe/forest_house.glb')

  
    return <>
  
                    <primitive 
                    object={ house_2.scene } 
                    scale={ 3.01}
                    position={ [ -79.5, 0.0, 270 ] }
                    rotation-y={1.5 }

                     />

                    
    </>
}