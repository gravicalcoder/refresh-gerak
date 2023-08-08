import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'



export default function Motorcycle_2()
{

   // const motor = useGLTF('motorcycle.glb')   // satu folder dengan pemanggilnya
    const motor_2 = useGLTF('./vehicle/motorcycle-3.glb')   


    return <>
           

                    <primitive 
                    object={ motor_2.scene } 
                    scale={ 5.5}
                    position={ [ 59.5, 3, 30 ] }
                    />
    

    </>
}