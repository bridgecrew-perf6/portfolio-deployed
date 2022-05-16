import React, { useEffect, useRef, useState, Suspense } from "react";
import Box from "@mui/material/Box";

import Scale from "../Animation/Scale";
import Stars from "./HomeComponents/Main/MainComps/Stars";
import Footer from "./HomeComponents/Footer/Footer";
import Scene from "../Scene/Scene";

import { Loader } from "@react-three/drei";

// leva
import { useControls, Leva } from "leva";

// Import Style
import "./home.scss";



import Header from "./HomeComponents/Header/Header";

export default function Home() {
  const [starSpeed, setStarSpeed] = useState(1);
  /* -------------------------------- leva code ------------------------------- */

  //NOTE Keep leva outside of the canvas component to fix the issue when it become unclickable
  const { control } = useControls("Activate Camera", { control: false });
  // console.log(control);

  /* ---------------------------- END of leva code ---------------------------- */

  return (
    <Scale>
      <Box
        sx={{
          color: "#fff",
          display: "grid",
          placeContent: "center",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
        }}
        onMouseEnter={(e) => setStarSpeed(50)}
        onMouseLeave={(e) => setStarSpeed(1)}
      >
       <Scene control/>
        <Header />

        {/* TODO: Make the page with spring animations to be ScrollControls 
     NOTE Please see this: https://github.com/pmndrs/drei#:~:text=out%20of%20view.-,%3CScrollControls,-pages%3D%7B3%7D%20//%20Each
     */}

        <Footer />
      </Box>
    </Scale>
  );
}
