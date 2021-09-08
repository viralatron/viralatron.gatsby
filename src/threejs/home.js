import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/gltfloader';
import { Scene } from 'three';


const Box = props => {
    const mesh = useRef();

    const [active, setActive] = useState(false);

    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={e => setActive(!active)}
        >
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={'orange'} />
        </mesh>
    );
}

// can this be turned into a base component for assets?
const Monitor = () => {
    const meshRef = useRef();
    
    useFrame(() => (meshRef.current.rotation.y -= 0.01));

    const gltf = useLoader(GLTFLoader, "/assets/monitor.glb");

    return (
        <Suspense fallback={null}>
            <primitive 
            ref={meshRef}
            object={gltf.scene} scale={.75}
            />
        </Suspense>
    );
}

const HomeAnim = ({ }) => {
    return(
        <Canvas className={"canvas"} style={{ position: "fixed", zIndex: "-1" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {/* <Box position={[-1, 0, 0]} />
            <Box position={[0, 0, 0]} />
            <Box position={[1, 0, 0]} /> */}
            <Suspense fallback={null}>
                <Monitor position={[0, 0, 0]}/>
            </Suspense>
        </Canvas>
    );

}
export default HomeAnim