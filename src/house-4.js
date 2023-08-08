import {  useGLTF  } from '@react-three/drei'


export default function House_4()
{
   
    const house_4 = useGLTF('./rumahe/free_anime_house.glb')

  
    return <>
  
                    <primitive 
                    object={ house_4.scene } 
                    scale={ 1.01}
                    position={ [ -79.5, 0.0, 380 ] }
                    rotation-y={2 }

                     />

                    
    </>
}