import React from "react";
import { useLocation } from "react-router-dom";

// spring animation
import { animated, useTransition, config } from "@react-spring/web";

export default function Scale({ children }) {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { transform: "scale3d(1.1, 1.1, 1.2)" },
    enter: { transform: "scale3d(1.0, 1.0, 1.0)" },
    leave: { transform: "scale3d(0, 0, 0)" },
    config: config.stiff,
    exitBeforeEnter: true

  });

  return (
    <div>
      {transitions((props, item) => (
        <animated.div style={props}>{children}</animated.div>
      ))}
    </div>
  );
}
