import { Typography } from "@mui/material";
import { Container } from "@mui/material";

import LargeProjectCard from "./LargeProjectCard";

//Images
//import Pearl4 from "../media/Pearl4.png";
import starry from "../media/starry.png";
//import wedding from "../media/wedding.png";
//import wanderer from "../media/wanderer.png";
import pixelfire from "../media/pixelfire.gif";
//import pixelfirebig from "../media/pixelfirebig.gif";
import bigrender from "../media/bigrender.bmp";

function Projects() {
  const TextureBlending = {
    name: "Texture blending image reproduction",
    description:
      "Reproduces an input image using seamless textures from a texture database.",
    image: starry,
    link: "https://github.com/Beckelund/texture-blending-image-reproduction",
  };

  const PixelFire = {
    name: "Pixel fire simulation",
    description:
      'A pixelated fire simulation developed in WEBGL. Inspired by the video game "noita".',
    image: pixelfire,
    link: "https://github.com/Beckelund/pixel-fire-simulator",
    demo: "https://beckelund.github.io/pixel-fire-simulator/",
  };

  const GlobalIllumination = {
    name: "Ray tracing + photon mapping",
    description:
      "A global illumination ray tracer that utilizies photon mapping to produce caustic lights",
    image: bigrender,
    link: "https://github.com/Beckelund/global-illumination-ray-tracer",
  };

  return (
    <Container className="projects">
      <Typography className="projectseperatetext">Current Projects:</Typography>
      <LargeProjectCard project={TextureBlending}></LargeProjectCard>
      <LargeProjectCard project={PixelFire}></LargeProjectCard>
      <Typography className="projectseperatetext">
        Previous Projects:
      </Typography>
      <LargeProjectCard project={GlobalIllumination}></LargeProjectCard>
    </Container>
  );
}

export default Projects;
