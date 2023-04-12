//import { Container } from "@mui/system";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";

//Icon
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { useState } from "react";

//Fullscreen dialog box for mobile
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Parallax } from "react-scroll-parallax";

function LargeProjectCard(props) {
  const cardTitle = props.project.name;
  const cardDescription = props.project.description;
  const cardImage = props.project.image;
  const cardLink = props.project.link;
  const CardDialog = props.project.dialog;
  const cardDemo = props.project.demo;

  //Conditional display
  const showReadMore = props.project.dialog ? true : false;
  const showDemo = props.project.demo ? true : false;

  //Open dialog window
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  //console.log(cardTitle);
  return (
    <Parallax speed={3} easing={"ease-in"}>
      <Card className="project">
        {CardDialog && (
          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={"xl"}
            fullWidth={true}
            fullScreen={fullScreen}
            scroll="paper"
          >
            <CardDialog closeFunction={handleClose} />
          </Dialog>
        )}
        <CardMedia
          component="img"
          image={cardImage}
          className="full"
        ></CardMedia>
        <CardContent className="cardcontent">
          <Typography className="cardtitle" color="white">
            {cardTitle}
          </Typography>
          <Typography className="carddescription">{cardDescription}</Typography>
          <CardActions className="cardactions">
            <Link
              href={cardLink}
              rel="noopener noreferrer"
              color="inherit"
              target="_blank"
            >
              <Button
                variant="outlined"
                className="card"
                startIcon={<GitHubIcon />}
              >
                Github
              </Button>
            </Link>
            <Button
              variant="outlined"
              className="card"
              sx={{ display: showReadMore ? "block" : "none" }}
              onClick={handleClickOpen}
            >
              read more
            </Button>
            <Link
              href={cardDemo}
              rel="noopener noreferrer"
              color="inherit"
              target="_blank"
              sx={{ display: showDemo ? "block" : "none" }}
            >
              <Button
                variant="contained"
                className="demoButton"
                startIcon={<PlayArrowIcon />}
              >
                Demo
              </Button>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Parallax>
  );
}

export default LargeProjectCard;
