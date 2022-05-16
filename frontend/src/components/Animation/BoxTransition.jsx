import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

// spring animation
import { animated, useTransition, config } from "@react-spring/web";

export default function BoxTransition({ children }) {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { transform: "scale(0)" },
    enter: { transform: "scale(1)" },
    leave: { transform: "scale(0)" },
    config: config.wobbly,
    exitBeforeEnter: true,

    // trail:
  });
  const [toggle, setToggle] = useState(true);

  const boxTransitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    // onRest: () => setToggle(!toggle),
    exitBeforeEnter: true,
  });

  console.log("onCLick is now", toggle);
  return (
    <div onClick={(e) => setToggle(!toggle)}>
      {transitions((props, item) => (
        <animated.div style={{ textAlign: "center", ...props }}>
          {/* {console.log("FROM BOXTRANSITION,", item)} */}
          {children}
        </animated.div>
      ))}
    </div>
  );
}
