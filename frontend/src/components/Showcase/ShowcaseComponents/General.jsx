import React, { useEffect, useState, startTransition } from "react";
import axios from "axios";

// reactSpring
import { animated } from "@react-spring/web";

// mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "../../MuiComponents/Stack";

import Modal from './Modal'

import Transition from "../../Animation/Transition";
import MuiSimpleZoom from "../../Animation/MuiSimpleZoom";

const Loading = (e) => (
  <div
    style={{
      backgroundColor: "black",
      color: "#fff",
      fontSize: "5rem",
      width: "100%",
    }}
  >
    Loading...
  </div>
);

export default function General() {
  const [githubData, setGithubData] = useState([]);

  const [fullscreen, setFullscreen] = useState(false);
  const [currCard, setCurrCard] = useState(null);

  // fullscreen ?
  /****
   * fullscreen ? {
   * position: absolute;
   * width: 100vw
   * height: 100vh
   * }
   *
   */
  const toggleFullscreen = {
    width: "100vw",
    height: "100vh",
    zoom: 0.9,
    display: "inherit",
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.github.com/repos/kemdev/portfolio/contents/projects/general"
      );

      console.log("Response", response);

      const data = response.data;

      const path = data.map((data) => data.path);

      console.log("PATHES NOW", path);

      setGithubData(path);
    };

    getData();
  }, []);

  console.log("Github Paths now", githubData);

  return (
    <Stack>
      {githubData?.map((repo, idx) => (
        <MuiSimpleZoom>
          <Card
            sx={{
              width: "100%",
              // width: fullscreen ? (idx === currCard ? "100%" : "") : "100%",
              height: "50vh",
              m: 2,
              textAlign: "left",
              borderRadius: "15px",
            }}
            // style={
            //   fullscreen ? (idx === currCard ? toggleFullscreen : null) : null
            // }
            key={idx}
          >
            <CardMedia
              component="iframe"
              alt="screeshot of the webpage"
              height="60%"
              src={"https://kemdev.github.io/portfolio/" + repo}
              scrolling="no"
            />
            <CardContent
              sx={{ height: "200px", borderTop: "5px solid hotpink" }}
            >
              {/* <iframe src={'https://kemdev.github.io/portfolio/' + repo} title="description"></iframe> */}
              <Typography gutterBottom variant="h4" component="div">
                {/* title */}
                {repo
                  .substring(repo.lastIndexOf("/") + 1)
                  .split("-")
                  .join(" ")}
              </Typography>
              <Typography
                variant="body2"
                color="#2B2529"
                sx={{ fontWeight: "lighter", fontSize: "1.5rem" }}
              >
                {/* Description */}
                {repo}
              </Typography>
            </CardContent>
            <Divider variant="middle" />
            <CardActions className="d-flex justify-content-between">
              <div>
                <Button
                  variant="contained"
                  size="large"
                  href={"https://kemdev.github.io/portfolio/" + repo}
                  sx={{
                    borderRadius: "5px 15px ",
                    backgroundColor: "#2B2529",
                    "&:hover": {
                      backgroundColor: "#0f0e0e",
                      color: "#fff",
                      border: "none",
                      boxShadow: "none",
                    },
                  }}
                  target="_blank"
                >
                  Live Preview
                </Button>
                <Button
                  target="_blank"
                  size="large"
                  href={"https://github.com/kemdev/portfolio/tree/main/" + repo}
                  sx={{
                    color: "#2B2529",
                    fontWeight: "bold",
                    "&:hover": { color: "#0f0e0e" },
                  }}
                >
                  Github Repo
                </Button>
              </div>
              <Button
                onClick={(e) => {
                  setFullscreen({open: true, url: `https://kemdev.github.io/portfolio/${repo}`});
                  setCurrCard(idx);
                }}
                className="text-dark justify-self-end"
              >
                Fullscreen
              </Button>
            </CardActions>
          </Card>
        </MuiSimpleZoom>
      ))}

      {
        fullscreen && <Modal fullscreen={fullscreen} setFullscreen={setFullscreen} />
      }
    </Stack>
    // </animated.div>
  );
}
