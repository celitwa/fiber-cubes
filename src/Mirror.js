import { useRef } from 'react'
import { CubeCamera } from '@react-three/drei';
import { EquirectangularReflectionMapping, LinearFilter, WebGLCubeRenderTarget } from 'three';

export default function Mirror(props) {
    const ref = useRef();

    const cubeRenderTarget = new WebGLCubeRenderTarget(800, {
        format: EquirectangularReflectionMapping,
        generateMipmaps: true,
        minFilter: LinearFilter
    });
    return (
        <CubeCamera args={[100, 100000, cubeRenderTarget]} position={[0, -4, 3]}>
            {(texture) => (
                <mesh {...props} ref={ref} rotation={[5, 0, 0]}>
                    <planeGeometry attach="geometry" args={[1920, 480]} />
                    <meshPhongMaterial
                        color={0xFFFFFF}
                        envMap={texture}
                        shininess={80}
                    />
                </mesh>
            )}
        </CubeCamera>
    )
}