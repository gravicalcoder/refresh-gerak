import {  useGLTF  } from '@react-three/drei'


export default function House_6()
{
   
    const house_6 = useGLTF('./rumahe/suburban_shabby_house_low_poly.glb')

  
    return <>
  
                    <primitive 
                    object={ house_6.scene } 
                    scale={ 0.01}
                    position={ [ -379.5, 0.0, 340 ] }
                    rotation-y={2 }

                     />

                    
    </>
}