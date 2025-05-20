import {
  Box,
  Button,
  CardMedia,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

//Icon
import CloseIcon from "@mui/icons-material/Close";

// Media
import caustics from "../../media/causticvideo.mp4";
import cascadedCaustics from "../../media/CascadedCausticMap.mp4";

function causticthesis(props) {
  return (
    <>
      <DialogTitle
        sx={{
          borderStyle: "dashed",
          borderWidth: "0 0 0.1rem 0",
          borderColor: "rgba(255, 255, 255, 0.2)",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Real Time Cascaded Ocean Caustic Mapping
        <Button variant="contained" onClick={props.closeFunction}>
          <CloseIcon></CloseIcon>
        </Button>
      </DialogTitle>
      <DialogContent>
        <Typography width={"90%"} margin={4}>
          My Master Thesis project at Frostbite involved rendering physically
          accurate caustics. This is accomplished using a caustic mapping
          technique, which has similarities to traditional shadow mapping
          methods.
        </Typography>
        <Typography width={"90%"} margin={4}>
          The process involves casting photons from a light source. The
          direction of those photons are refracted based on the normals of the
          water surface. Positions of the photons are then projected to the
          viewers camera. This implementation supports directional light
          sources, but may be further developed to support other types of light.
        </Typography>
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <Box width={"75%"}>
            <CardMedia
              component="video"
              image={cascadedCaustics}
              muted="true"
              loop="true"
              controls
            ></CardMedia>
          </Box>
        </Box>
        <Typography width={"90%"} margin={4}>
          To allow for a performant solution that is scalable for larger scenes,
          the process is divided into four cascades, each rendering caustics at
          different quality levels. This approach allows caustics viewed up
          close to maintain a higher quality, while caustics that are farther
          away from the viewer which are less visible can be rendered at a lower
          resolution.
        </Typography>
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <Box width={"75%"}>
            <CardMedia
              component="video"
              image={caustics}
              width={"50%"}
              muted="true"
              loop="true"
              controls
            ></CardMedia>
          </Box>
        </Box>
        <Typography width={"90%"} margin={4}>
          The resulting caustic pattern can be tailored according to the art
          direction through post-processing. In this instance, a subtle light
          dispersion is introduced by translating the red and blue colors
          channels.
        </Typography>
      </DialogContent>
    </>
  );
}

export default causticthesis;
