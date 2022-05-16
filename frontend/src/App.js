import React, { useState, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Unknown from "./components/Unknown";
import { Home, Skills, Contact, Showcase, Navbar } from "./components";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

// Import styles
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

// spring animation
import { animated, useTransition, config, spring } from "@react-spring/web";

// import Context
import { globalVariablesContext } from "./components/Context";

export default function App() {
  const [navBackground, setNavBackground] = useState(null);

  const { navbarHeight } = useContext(globalVariablesContext);

  // console.log("kndkdlnf", navbarHeight);
  /*
   *@TODO: to make the animation between pages
   *https://codesandbox.io/s/5yzw5x0wyl?file=/src/index.js
   */
  const location = useLocation();
  const transitions = useTransition(location, {
    config: config.gentle,
    // from: { opacity: 0,  transform: location.pathname !== '/' ? "initial" : "translate3d(100vw, 0, 0)" },
    // enter: { opacity: 1, transform: location.pathname !== '/' ? "initial" : "translate3d(0, 0, 0)" },
    // leave: { opacity: 0, transform: location.pathname !== '/' ? "initial" : "translate3d(-20vw, 0, -10vh)" },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });

  return (
    <div className="main-container">
      <Leva
        hidden={!location.hash.includes("#")}
        isRoot={true}
        style={{ position: "absolute", bottom: 0 }}
      />
      <div className="fixed-top" style={{ backgroundColor: "#2B2529" }}>
        <Navbar />
      </div>

      {/* // // TODO put the header here to fix the position fixed where it the nav become above other elements */}
      {/* Fix the div that is over the fixed nav */}
      <animated.div style={{ height: navbarHeight + "px" }} />

      <div style={{ height: "fit-content" }}>
        {transitions((props, item) => (
          <animated.div style={props}>
            {/* {console.log('CURRENT TRANSITION ++', props.opacity)} */}
            <Routes location={item}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/skills" element={<Skills />} />
              <Route exact path="/showcase" element={<Showcase />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route element={<Unknown />} />
            </Routes>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
