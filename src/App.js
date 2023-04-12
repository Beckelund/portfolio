import "./style.css";

//Icons
//import LinkedInIcon from "@mui/icons-material/LinkedIn";
//import GitHubIcon from "@mui/icons-material/GitHub";

//Mui Components
//import Link from "@mui/material/Link";
//import { Container } from "@mui/system";
import { Typography } from "@mui/material";

//Custom Components
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="app">
      <ParallaxProvider>
        <Parallax speed={20} easing={"easeOut"}>
          <Welcome></Welcome>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "3rem",
              margin: "0 0 10rem 0",
            }}
          >
            check out some of my projects down below!
          </Typography>
          <Projects></Projects>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

export default App;
