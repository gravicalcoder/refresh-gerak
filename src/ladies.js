import {  useAnimations, useGLTF} from '@react-three/drei'


export default function PlayerTiga()
{


   // const  lady = useGLTF('vee.glb'); //   asal Ubah menjadi path langsung tanpa menggunakan fetch

   const lady = useGLTF('./character/vee.glb') // rencana mau dipindah ke folder character
    const animationsLady = useAnimations(lady.animations,lady.scene)

    animationsLady.actions.idle.play()

    console.log(animationsLady )
  


    return (
      <primitive
        object={lady.scene}
        scale={6.5}
        position={[-10.5, -1, -8]}
      />
    );
}