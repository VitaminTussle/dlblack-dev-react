import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import PocketD20 from './PocketD20';

const PocketCanvas = () => {
    return (
        <Canvas className='flex w-full'>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <PocketD20 />
        </Canvas>
    );
};

export default PocketCanvas;