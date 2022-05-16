import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";



export default function Highlight() {
  const data = [
    {
      titel: "Landing Page 1",
      description:
        "This project was made as a final project for the orientation course at DCI institute.",
      image:
        "https://repository-images.githubusercontent.com/328547837/fd072d30-4f8e-4fd5-a26a-48ef6dd74c62",
      repo: "https://github.com/kemdev/Landingpage_HTML-CSS",
      demo: "https://kemdev.github.io/Landingpage_HTML-CSS/",
    },
    {
      titel: "Landing Page 2",
      description: `An HTML/CSS General Landing page.
    
          Techniques used in this Project:
          
          HTML
          SCSS
          A little of JavaScript
          `,
      image:
        "https://repository-images.githubusercontent.com/406753890/18367558-1f74-470e-bcbb-e508b8da24fd",
      repo: "https://github.com/kemdev/Landingpage_HTML-CSS_2",
      demo: "https://kemdev.github.io/Landingpage_HTML-CSS_2/src/",
    },
    {
      titel: "Cows Bulls game",
      description: `This is a DCI challenge of the Cows Bulls Game`,
      image:
        "https://repository-images.githubusercontent.com/431097575/d57aa108-7f19-4d57-889e-a82588c08be9",
      repo: "https://github.com/kemdev/cows-bulls-game",
      demo: "https://kemdev.github.io/cows-bulls-game/",
    },
    {
      titel: "CV Template",
      description: `HTML/CSS Template for a cv.`,
      image:
        "https://repository-images.githubusercontent.com/148808405/2a2ae980-c2fa-11eb-85be-9b8cf719564a",
      repo: "https://github.com/kemdev/cv_challenge",
      demo: "https://kemdev.github.io/cv_challenge/",
    },
  ];
  const [repos, setRepos] = useState(data);
  return (
    <animated.div className="d-flex flex-wrap justify-content-between">
      {repos?.map((repo, idx) => (
        <Card
          sx={{
            width: "25%",
            maxWidth: "50%",
            m: 5,
            textAlign: "left",
            borderRadius: "25px",
          }}
          key={idx}
        >
          <CardMedia
            component="img"
            alt="screeshot of the webpage"
            height="450"
            image={repo?.image}
          />
          <CardContent sx={{ height: "250px" }}>
            <Typography gutterBottom variant="h4" component="div">
              {repo.titel}
            </Typography>
            <Typography
              variant="body2"
              color="#2B2529"
              sx={{ fontWeight: "lighter", fontSize: "1.5rem" }}
            >
              {repo.description}
            </Typography>
          </CardContent>
          <Divider variant="middle" />
          <CardActions>
            <Button
              variant="contained"
              size="large"
              href={repo.demo}
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
              href={repo.repo}
              sx={{
                color: "#2B2529",
                fontWeight: "bold",
                "&:hover": { color: "#0f0e0e" },
              }}
            >
              Github Repo
            </Button>
          </CardActions>
        </Card>
      ))}
    </animated.div>
  );
}
