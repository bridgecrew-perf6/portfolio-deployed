import "./navbar.scss";
import React, { useState, useEffect, useRef, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { Link, NavLink, useLocation } from "react-router-dom";

// spring animation
import { animated } from "@react-spring/web";

// import Context
import { globalVariablesContext } from "../Context";

export default function Navbar() {
  const { setNavbarHeight } = useContext(globalVariablesContext);

  const NavElement = styled(Typography)({
    fontFamily: "BioRhyme Expanded",
    width: "max-width",
  });

  const currentLocation = useLocation();
  const [activeLink, setActiveLink] = useState(
    currentLocation.pathname.substring(1) || ""
  );
  // console.log(currentLocation.pathname)
  // console.log(activeLink)

  const navLinks = ["skills", "showcase", "contact"];

  /* ---------------------------  Transformation state -------------------------- */

  const [transform, setTransform] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    switch (activeLink) {
      case "skills":
        setTransform({ x: 0, y: "300%" });
        break;
      case "showcase":
        setTransform({ x: 0, y: "100%" });
        break;
      case "contact":
        setTransform({ x: 0, y: "-150%" });
        break;
    }
  }, [activeLink]);

  /* --------------------------- End of Transformation state -------------------------- */
  // Make float left then swapp them to float right and so on
  const containerRef = useRef(null);
  const rightNavContainerRef = useRef(null);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const parentContainerRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(null);
  const [containerHeight, setContainerHeight] = useState(null);
  const [rightNavLinksWidth, setRightNavLinksWidth] = useState();

  useEffect(() => {
    setNavbarHeight(parentContainerRef?.current?.clientHeight);
  }, []);

  useEffect(() => {
    // Important to change the values when the windows is resizing
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    setContainerWidth(containerRef?.current?.clientWidth);
    setContainerHeight(parentContainerRef?.current?.clientHeight);
    setNavbarHeight(parentContainerRef?.current?.clientHeight);
    setRightNavLinksWidth(rightNavContainerRef?.current?.clientWidth);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  // console.log("Container height is:", containerHeight);
  // console.log("Current ParentContainer ref is:", parentContainerRef);
  /* ------------------------------- END OF GETTING Dimensions ------------------------------- */

  return (
    <Box
      ref={parentContainerRef}
      sx={{
        pt: 5,
        // mx: '150px',
        top: 0,
        zIndex: 1,
        height: "15vh",
      }}
      display="flex"
      className="clearfix parentContainer"
      // className="position-relative"
      // justifyContent="space-between"
    >
      <animated.div
        style={{ height: activeLink ? "100%" : 0 }}
        className="brandContainer "
      >
        <animated.div
          variant="h4"
          style={{
            transition: "all 2s ease-out",
            // transform: !activeLink ? `translate(calc(${containerWidth}px / 2), calc(${containerHeight}px / 2.5))` : "translate(0, 0)",
            fontSize: "2em",
            cursor: "pointer",
            marginRight: 15,
            fontFamily: "BioRhyme Expanded",

            fontWeight: 400,
          }}
          onClick={(e) => setActiveLink("")}
        >
          <NavLink to="/">KAREEM</NavLink>
        </animated.div>
      </animated.div>
      <Box className="vw-100" ref={containerRef}>
        {navLinks.map((link, idx) =>
          containerWidth ? (
            <animated.div
              ref={rightNavContainerRef}
              className="navItem "
              variant="h5"
              component="div"
              key={idx}
              style={{
                fontFamily: "BioRhyme Expanded",
                cursor: "pointer",
                fontWeight: 400,
                // fontSize: "1.5rem",
                marginBottom: 20,
                "&:hover": { color: "hotpink" },
                width: "fit-content",
                transform:
                  link === activeLink
                    ? `translate(0, ${transform.y})`
                    : `translate(calc(${containerWidth}px - ${rightNavLinksWidth}px) , 0)`,
                marginLeft: 15,
              }}
              onClick={() => {
                setActiveLink(link);
              }}
            >
              {<Link to={"/" + link}>{link.toUpperCase()}</Link>}
            </animated.div>
          ) : (
            ""
          )
        )}
      </Box>
    </Box>
  );
}
