import {  useGLTF  } from '@react-three/drei'


export default function House_5()
{
   
    const house_5 = useGLTF('./rumahe/medieval_walls_collection.glb')

  
    return <>
  
                    <primitive 
                    object={ house_5.scene } 
                    scale={ 1.01}
                    position={ [ -129.5, 0.0, 320 ] }
                    rotation-y={2 }

                     />

                    
    </>
}