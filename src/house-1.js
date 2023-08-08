import {  useGLTF  } from '@react-three/drei'


export default function House_1()
{
   
    const house_1 = useGLTF('./rumahe/big_stone_house.glb')

  
    return <>
  
                    <primitive 
                    object={ house_1.scene } 
                    scale={ 1.01}
                    position={ [ -79.5, 0.0, -100 ] }
                    rotation-y={1.5 }

                     />

                    
    </>
}