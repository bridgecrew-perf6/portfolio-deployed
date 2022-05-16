import React, { useEffect, useContext, useState } from "react";

import Main from "../Home/HomeComponents/Main/Main";

// Scene components
import Lights from "./components/Lights";

// react-three-fiber
import { Canvas, useThree } from "@react-three/fiber";

// react-drei
import { Html, OrbitControls } from "@react-three/drei";

import { Cylinder, Cone } from "@react-three/drei";
// import Context
import { globalVariablesContext } from "../Context";

import Shapes from "./components/Shapes";

export default function Scene({ control, canvasElement, children }) {
  const { navbarHeight } = useContext(globalVariablesContext);

  const [open, set] = useState(false);

  const [responsiveRect, setResponsiveRect] = useState();
  const [hover, setHover] = useState(false);

  const ResponsiveCanvas = () => {
    // to make a responsive width for the elements
    let viewport = useThree((e) => e.viewport.width);
    setResponsiveRect(viewport * 10);
  };

  return (
    <Canvas
      legacy
      // camera={{ position: [0, 3, 75], fov: 25 }}
      camera={{ position: [-5, 2, 10], fov: 60 }}
      // frameloop="demand" // to turn the useFrame on when interact with the canvas
      // resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
      id="canvas"
      style={{ touchAction: "none", position: "absolute", right: 0 }}
      // flat
    >
      <ResponsiveCanvas />
      <Lights />
      <Html as="div" fullscreen>
        {/* //TODO: Make the page with spring animations to be ScrollControls 
     NOTE Please see this: https://github.com/pmndrs/drei#:~:text=out%20of%20view.-,%3CScrollControls,-pages%3D%7B3%7D%20//%20Each */}
      </Html>
      {canvasElement}
      {/* <Shapes>
        <Cylinder args={[1, 1, 1]} smoothness={4}>
          <meshPhongMaterial color="hotpink" />
        </Cylinder>
      </Shapes>
      <Shapes>
        <Cone args={[2, 10, 32]} smoothness={4} position={[-10, 0, 0]}>
          <meshPhongMaterial color="hotpink" />
        </Cone>
      </Shapes> */}
      {control ? <OrbitControls /> : ""}
    </Canvas>
  );
}

/* --------------------------- Sample Helpful Code -------------------------- */

/**
 * <ThreeDeBox
        position={[0, 1, 0]}
        args={[3, 2, 1]}
        color="lightblue"
        speed={2}
      />
  *       <Html as="div" fullscreen>
        //TODO: Make the page with spring animations to be ScrollControls 
     NOTE Please see this: https://github.com/pmndrs/drei#:~:text=out%20of%20view.-,%3CScrollControls,-pages%3D%7B3%7D%20//%20Each
     <Main
     onMouseEnter={(e) => setHover(true)}
     onMouseLeave={(e) => setHover(false)}
     rectangleWidth={hover ? responsiveRect * 2 : responsiveRect}
     onClick={() => set((open) => !open)}
     open={open}
   />
 </Html>

 */
