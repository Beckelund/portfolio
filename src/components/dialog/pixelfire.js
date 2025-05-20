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

//Images

// Media
import pixelFireDispersion from "../../media/pixelfire.gif";
import pixelFireLarge from "../../media/pixelfirelarge.mp4";

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
        Pixel Fire Simulation
        <Button variant="contained" onClick={props.closeFunction}>
          <CloseIcon></CloseIcon>
        </Button>
      </DialogTitle>
      <DialogContent>
        <Typography width={"90%"} margin={4}>
          The project was inspired by the material interaction system that is
          present in the video game "Noita", a game where every pixel is
          simulated. The goal was to recreate the visually satisfying scenario
          where a fire spreads to other materials in a scene.
        </Typography>
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <Box width={"50%"}>
            <CardMedia
              component="video"
              image={pixelFireLarge}
              width={"50%"}
              muted="true"
              loop="true"
              controls
            ></CardMedia>
          </Box>
        </Box>
        <Typography width={"90%"} margin={4}>
          The burning pixels consists of a noisy appearance, accompanied by
          sparks that are determined by a noise pattern. Surfaces in the scene
          such as the grass are dynamically lit by the presence of fire in close
          proximity.
        </Typography>
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <Box width={"50%"}>
            <CardMedia component="img" image={pixelFireDispersion}></CardMedia>
          </Box>
        </Box>
        <Typography width={"90%"} margin={4}>
          I attempted to implement a shimmering effect which was achieved by
          displacing the pixel coordinates for pixels above a fire. This effect
          is present in some 3D games, but is something I haven't seen be
          implemented in a 2D pixel art setting before.
        </Typography>
      </DialogContent>
    </>
  );
}

export default causticthesis;
