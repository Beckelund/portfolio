import { Container } from "@mui/material";

import LargeProjectCard from "./LargeProjectCard";

//Images
//import Pearl4 from "../media/Pearl4.png";
//import starry from "../media/starry.png";
//import wedding from "../media/wedding.png";
//import wanderer from "../media/wanderer.png";
import pixelfire from "../media/pixelfire.gif";
//import pixelfirebig from "../media/pixelfirebig.gif";
import bigrender from "../media/bigrender.bmp";
import texblend2 from "../media/texblend2.gif";
import caustics from "../media/causticvideo.mp4";

//Dialog contents
import texblend from "./dialog/texblend.js";
import causticthesis from "./dialog/causticthesis.js";
import pixelfireDialog from "./dialog/pixelfire.js";

function Projects() {
  //console.log("projects.js");
  const CausticThesis = {
    name: "Real Time Cascaded Ocean Caustic Mapping",
    description:
      "Physically accurate caustic simulation developed in the Frostbite Engine",
    image: caustics,
    link: null,
    projectImageFormat: "video",
    dialog: causticthesis,
  };

  const TextureBlending = {
    name: "Texture blending image reproduction",
    description:
      "Reproduces an input image using seamless textures from a texture database",
    image: texblend2,
    link: "https://github.com/Beckelund/texture-blending-image-reproduction",
    dialog: texblend,
  };

  const PixelFire = {
    name: "Pixel fire simulation",
    description:
      'A pixelated fire simulation developed in WEBGL. Inspired by the video game "Noita"',
    image: pixelfire,
    link: "https://github.com/Beckelund/pixel-fire-simulator",
    dialog: pixelfireDialog,
    demo: "https://beckelund.github.io/pixel-fire-simulator/",
  };

  const GlobalIllumination = {
    name: "Global Illumination + Photon mapping",
    description:
      "A global illumination path tracer that utilizies photon mapping to produce caustic lights",
    image: bigrender,
    link: "https://github.com/Beckelund/global-illumination-ray-tracer",
  };

  return (
    <Container className="projects">
      <LargeProjectCard
        project={CausticThesis}
        dialog={causticthesis}
      ></LargeProjectCard>
      <LargeProjectCard
        project={TextureBlending}
        dialog={texblend}
      ></LargeProjectCard>
      <LargeProjectCard project={PixelFire}></LargeProjectCard>
      <LargeProjectCard project={GlobalIllumination}></LargeProjectCard>
    </Container>
  );
}

export default Projects;
