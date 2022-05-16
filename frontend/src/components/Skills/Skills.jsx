import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AbsoluteWrapper from "../AbsoluteWrapper";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "white", fontSize: "1.5rem" }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function Skills() {
  const [skills, setSkills] = useState([
    {
      title: "HTML",
      percent: 80,
      status: "Advance",
    },
    {
      title: "CSS",
      percent: 60,
      status: "Advance",
    },
    {
      title: "Sass",
      percent: 30,
      status: "Mid",
    },
    {
      title: "React",
      percent: 40,
      status: "Mid",
    },
    {
      title: "Mongoose",
      percent: 10,
      status: "Noob",
    },
    {
      title: "Express",
      percent: 10,
      status: "Noob",
    },
    {
      title: "Node",
      percent: 30,
      status: "Mid",
    },
    {
      title: "Java",
      percent: 40,
      status: "Mid",
    },
    {
      title: "Python",
      percent: 10,
      status: "Noob",
    },
    {
      title: "Three.js",
      percent: 20,
      status: "Noob",
    },
    {
      title: "React Three Fiber",
      percent: 20,
      status: "Noob",
    },
    {
      title: "Drei.js",
      percent: 10,
      status: "Noob",
    },
  ]);
  
  return (
    <AbsoluteWrapper>
      <div className="d-flex flex-wrap mt-5 justify-content-center">
        {skills.map((skill, idx) => (
          // <CircularProgress  thickness={2} className='m-5'  size={200} variant="determinate" value={skill.percent}>
          //   <p>plkdmfdlksfm</p>
          // </CircularProgress>
          <div className="d-flex flex-column align-items-center" key={idx}>
            <Box
              sx={{
                boxShadow: `11px -1px 10px #251f23, -5px -5px 10px #312b2f `,
                marginBottom: "-44.8px",
                p: 4,
              }}
            >
              <span className="text-white display-4">{skill.title}</span>
            </Box>
            <CircularProgressWithLabel
              value={skill.percent}
              thickness={1}
              className="m-5 p-5"
              size={300}
              variant="determinate"
              sx={{
                boxShadow: `5px 5px 10px #251f23, -5px -5px 10px #312b2f;`,
                color: "#767676",
              }}
            />
          </div>
        ))}
      </div>
    </AbsoluteWrapper>
  );
}
