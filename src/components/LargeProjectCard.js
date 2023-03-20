//import { Container } from "@mui/system";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

function LargeProjectCard(props) {
  const cardTitle = props.project.name;
  const cardDescription = props.project.description;
  const cardImage = props.project.image;
  const cardLink = props.project.link;

  return (
    <Card className="project">
      <CardMedia component="img" image={cardImage} className="full"></CardMedia>
      <CardContent className="cardcontent">
        <Typography className="cardtitle">{cardTitle}</Typography>
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
          <Button variant="outlined" className="card" sx={{ opacity: 0.2 }}>
            read more
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default LargeProjectCard;
