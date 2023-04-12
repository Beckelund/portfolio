import {
  Box,
  Button,
  Container,
  DialogContent,
  DialogTitle,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";

//Icon
import CloseIcon from "@mui/icons-material/Close";

//Images

//gif
import texblendanim from "../../media/texblend.gif";

//image list
import great_wave from "../../media/texblend/great_wave.png";
import mona_lisa from "../../media/texblend/Mona_Lisa.png";
import wedding_big from "../../media/texblend/WeddingBig.png";
import wanderer from "../../media/texblend/wanderer.png";
import pearl from "../../media/texblend/Pearl4.png";
import starry from "../../media/texblend/Starry_Night_full_size.png";
import { Padding } from "@mui/icons-material";
import { useRef } from "react";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function texblend(props) {
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
        Texture blending image reproduction
        <Button variant="contained" onClick={props.closeFunction}>
          <CloseIcon></CloseIcon>
        </Button>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ width: "100%", display: "flex", margin: 2 }}>
          <Link
            href="https://github.com/Beckelund/texture-blending-image-reproduction"
            target="_blank"
            margin={"auto"}
          >
            github
          </Link>
        </Box>
        <Typography textAlign={"center"} margin={2}>
          Takes an input image and generates a mosaic using textures from{" "}
          <Link href="https://ambientcg.com/" target="_blank">
            ambient.cg
          </Link>
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            width={"20%"}
            src={texblendanim}
            alt="animation"
            loading="lazy"
          ></img>
        </Box>
        <Typography textAlign={"center"} margin={4}>
          The current version matches segments of the image to textures based on
          color difference. I'm currently working on an improved version that
          utilize displacement maps to achieve a natural texture blend.
        </Typography>
        <Typography textAlign={"center"} marginTop={4}>
          Check out some results down below!
        </Typography>
        <Container
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <ImageList
            sx={{ width: "100%" }}
            variant="quilted"
            cols={5}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
                sx={{
                  transition: "0.1s ease-out",
                  "& img": { transition: "0.5s ease-out" },
                  "&:hover > img": {
                    transition: "0.1s ease-out",
                    transform: "scale(0.99)",
                    opacity: "0.9",
                  },
                }}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </DialogContent>
    </>
  );
}

const itemData = [
  {
    img: wedding_big,
    title: "wedding",
    rows: 2,
    cols: 4,
  },
  {
    img: mona_lisa,
    title: "mona lisa",
    rows: 2,
    cols: 1,
  },
  {
    img: starry,
    title: "starry",
    rows: 2,
    cols: 3,
  },
  {
    img: pearl,
    title: "pearl",
    rows: 4,
    cols: 2,
  },
  {
    img: great_wave,
    title: "wave",
    rows: 2,
    cols: 2,
  },
  {
    img: wanderer,
    title: "wanderer",
    rows: 2,
    cols: 1,
  },
];

export default texblend;
