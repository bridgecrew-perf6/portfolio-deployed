import React, { Suspense, useState } from "react";
// import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

// import InnerScene from "./mainComponents/innerScene";

export default function Main({
  onMouseEnter,
  onMouseLeave,
  onClick,
  open,
  paddingTop
}) {
  // const InnerScene = React.lazy(() => import("./mainComponents/innerScene"));

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // const [currentX, setCurrentX] = useState(0)
  // const [currentY, setCurrentY] = useState(0)

  // Set the drag hook and define component movement based on gesture data.
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: mx, y: my, immediate: down });
    // api.update({ x: setCurrentX(mx), y: setCurrentY(my) });
    // console.log('MY=', my)
    // console.log('currentX=', currentY)
  });

  /* -------------------------------------------------------------------------- */
  /*                                    Test                                    */
  /* -------------------------------------------------------------------------- */
  let data = ["Test1", "Test2", "Test3", "Test4"];

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.molasses,
    // config: { duration: 2000, easing: easings.easeInOutQuart },
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });
  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);
  /* ------------------------------- END OF TEST ------------------------------ */

  return (
    <animated.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...bind()}
      style={{
        x,
        y,
        touchAction: "none",
        // width: 400,
        // width: rectangleWidth || 400,
        // height: "400px",
        backgroundColor: "hotpink",
        borderRadius: 10,
        transition: "width 2s ease-in-out",
        ...rest,
        width: size,
        height: size,
        zIndex: -1,
        marginTop: paddingTop
      }}
      onClick={onClick}
    >
      {transition((styles, item) => (
        <animated.div
          style={{ ...styles, background: item.css }}
        ></animated.div>
      ))}
    </animated.div>
  );
}
