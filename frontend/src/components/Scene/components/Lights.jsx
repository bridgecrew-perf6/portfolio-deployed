import React from "react";
import { useControls } from "leva";


export default function Lights() {
    const { setPointLightPosition } = useControls({
        name: "Point light position",
        setPointLightPosition: {
          x: -10,
          y: 0,
          z: -20,
        },
      });
  return (
    <group>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-rigth={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight
        position={[
          setPointLightPosition.x,
          setPointLightPosition.y,
          setPointLightPosition.z,
        ]}
        intensity={0.5}
      />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
    </group>
  );
}
