import * as React from "react";

import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Zoom from "@mui/material/Zoom";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function SimpleZoom({ children }) {
  return (
    <div >
      <Zoom in={true} style={{ transitionDelay: "500ms", width:"100" }}>
        {children}
      </Zoom>
    </div>
  );
}
