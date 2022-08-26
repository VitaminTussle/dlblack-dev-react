import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const PocketD20 = () => {
    const meshRef = useRef<any>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.z += 0.01;
        }
    });

    // the initial rotation numbers here allow the cube to start with a perspective
    // that looks directly at one of its vertices
    return (
        <mesh ref={meshRef} rotation={[0.62, 0.78, 0]}>
            <icosahedronBufferGeometry attach='geometry' args={[2.5, 0]} />
            <meshStandardMaterial attach='material' color='#64748b' wireframe={true} />
        </mesh>
    );
};

export default PocketD20;