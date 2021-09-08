import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

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

const HomeAnim = ({ }) => {
    return(
        <Canvas className={"canvas"} style={{ position: "fixed", zIndex: "-1" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1, 0, 0]} />
            <Box position={[0, 0, 0]} />
            <Box position={[1, 0, 0]} />
        </Canvas>
    );

}
export default HomeAnim