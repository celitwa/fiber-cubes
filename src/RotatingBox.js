import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function RotatingBox(props) {
  const myMesh = useRef();

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)


  // Math.cos( u * Math.PI * 4 )

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });


  return (
    <mesh
      {...props}
      ref={myMesh}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      scale={clicked ? 1.3 : props.scale}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={hovered ? 'hotpink' : props.color} />
    </mesh>
  );
}