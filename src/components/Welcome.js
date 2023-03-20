import Link from "@mui/material/Link";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
//import Button from "@mui/material/Button";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Welcome() {
  return (
    <Container className="welcome">
      <Typography className="s" variant="h1">
        Johan Bäcklund
      </Typography>
      <Container className="links">
        <Link
          href="https://github.com/Beckelund"
          rel="noopener noreferrer"
          color="inherit"
          target="_blank"
        >
          <GitHubIcon
            sx={{ fontSize: 80, color: "rgb(253, 246, 229);" }}
          ></GitHubIcon>
        </Link>
        <Link
          href="https://www.linkedin.com/in/johan-b%C3%A4cklund/"
          rel="noopener noreferrer"
          color="inherit"
          target="_blank"
        >
          <LinkedInIcon
            sx={{ fontSize: 80, color: "rgb(253, 246, 229);" }}
          ></LinkedInIcon>
        </Link>
      </Container>
    </Container>
  );
}

export default Welcome;
