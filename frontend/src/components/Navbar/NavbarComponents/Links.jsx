import React from "react";
// react spring 
import { animated } from "@react-spring/web";
// material design
import Box from "@mui/material/Box";
// react router dom
import { Link } from "react-router-dom";


export default function Links({
  rightNavContainerRef,
  containerRef,
  link,
  activeLink,
  setActiveLink,
  transform,
  rightNavLinksWidth,
  containerWidth
}) {
  return (
    <Box className="vw-100" ref={containerRef}>
      <animated.div
        ref={rightNavContainerRef}
        className="navItem "
        variant="h5"
        component="div"
        style={{
          fontFamily: "BioRhyme Expanded",
          cursor: "pointer",
          fontWeight: 400,
          fontSize: "1.5rem",
          marginBottom: 40,
          "&:hover": { color: "hotpink" },
          width: "fit-content",
          transform:
            link === activeLink.current
              ? `translate(0, ${transform.y})`
              : `translate(calc(${containerWidth}px - ${rightNavLinksWidth}px) , 0)`,
        }}
        onClick={() => {
          setActiveLink({ ...activeLink, current: link });
        }}
      >
        <Link to={link.toLowerCase()}>{link}</Link>
      </animated.div>
    </Box>
  );
}
