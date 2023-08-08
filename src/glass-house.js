import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'
import {  useMemo, useEffect, useState,useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Mobil()
{

    const house = useGLTF('./character/glass_house.glb')

   // const animationsKu = useAnimations(robotKu.animations, robotKu.scene)



    //console.log(house)
    //console.log('adakah mobil')



 

    return <>

                    

                    <primitive 
                    object={ house.scene } 
                    scale={ 10.5}
                    position={ [ -29.5, -1, -30 ] }
                   // position={ [ posisi.posisiX, posisi.posisiZ, posisi.posisiZ  ] }
                    //position={  posisi  }
                    // rotation-y={rotationY }
                     />

                     




    </>
}