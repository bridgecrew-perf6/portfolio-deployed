import React from "react";
import { Sparkles, Stars, Sphere, Plane } from "@react-three/drei";

export default function Header({ starSpeed }) {
  return (
    <group className="header h-100">
      {/* <Cloud
        opacity={0.5}
        speed={0} // Rotation speed
        width={10} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={20} // Number of particles
      /> */}
      <Stars
        radius={150}
        depth={50}
        count={5000}
        factor={10}
        saturation={0}
        fade
        speed={starSpeed}
      />
    </group>
  );
}
