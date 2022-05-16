// importing react components
import React, { useRef, useState } from "react";

// importing Three Fiber components
import {  useFrame  } from "@react-three/fiber";

// importing drei
import { MeshWobbleMaterial } from "@react-three/drei";

// importing three-spring
import { useSpring, a } from '@react-spring/three'


export default function Box({position, args, color, speed}){

    const ref = useRef(null)
    useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

    const [expand, setExpand] = useState(false)

    const props = useSpring({
        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
    })

    return (
        <a.mesh
        onClick={() => setExpand(!expand)}
        scale={props.scale}
        ref={ref}
        position={position}
        castShadow
        >
            <boxBufferGeometry attach="geometry" args={args}  />
            <MeshWobbleMaterial  attach="material" color={color} speed={speed} factor={0.6} />
        </a.mesh>
    )
}