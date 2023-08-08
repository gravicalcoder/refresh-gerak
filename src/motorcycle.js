import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'


export default function Motorcycle()
{

   // const motor = useGLTF('motorcycle.glb')   // satu folder dengan pemanggilnya
    const motor = useGLTF('./vehicle/motorcycle.glb')   




    return <>
           

                    <primitive 
                    object={ motor.scene } 
                    scale={ 5.5}
                    position={ [ 49.5, -1, 30 ] }
                    />

            

    </>
}