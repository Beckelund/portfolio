import { createTheme } from "@mui/material/styles";

export const portfolioTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
      },
      variants: [
        {
          props: { className: "card" },
          style: {
            color: "white",
            borderColor: "white",
            width: "10rem",
          },
        },
        {
          props: { className: "demoButton" },
          style: {
            color: "white",
            borderColor: "white",
            width: "10rem",
            backgroundColor: "rgba(255, 29, 29, 0.8)",
            "&:hover": {
              backgroundColor: "rgba(255, 29, 29, 1)",
            },
          },
        },
      ],
    },

    MuiLink: {
      variants: [
        {
          props: { className: "socials" },
          style: {
            transition: "0.4s ease-out",
            "&:hover": {
              transition: "0.1s ease-out",
              transform: "translateY(-5px)",
            },
          },
        },
      ],
    },

    MuiContainer: {
      styleOverrides: {},
      variants: [
        {
          props: { className: "card" },
          style: {
            backgroundColor: "black",
            borderRadius: "2rem",
            borderColor: "gray",
            borderStyle: "solid",
            borderWidth: "0.3rem",
            height: "30rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          },
        },
        {
          props: { className: "welcome" },
          style: {
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          },
        },
      ],
    },

    MuiTypography: {
      defaultProps: {
        /*
        variantMapping: {
            h1: "h2",
            h2: "h2",
            h3: "h2",
            h4: "h2",
            h5: "h2",
            h6: "h2",
            subtitle1: "h2",
            subtitle2: "h2",
            body1: "span",
            body2: "span",
        },
        */
        fontFamily: "epilogue",
        color: "rgb(253, 246, 229);",
      },
      variants: [
        {
          props: { className: "cardtitle" },
          style: {
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "1rem",
          },
        },
        {
          props: { className: "projectseperatetext" },
          style: {
            fontSize: "1.5rem",
            textAlign: "left",
            marginTop: "1rem",
          },
        },
      ],
    },

    MuiCard: {
      variants: [
        {
          props: { className: "project" },
          style: {
            position: "relative",
            margin: "0 0 4rem 0",
            height: "30rem",
            backgroundColor: "black",
            color: "white",
            borderRadius: "2rem",
            borderColor: "gray",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            "& .MuiCardMedia-root": {
              transition: "0.5s ease-out",
            },

            "&:hover .MuiCardMedia-root": {
              transition: "0.1s ease-out",
              opacity: 0.9,
            },

            "&:after": {
              content: '""',
              display: "block",
              position: "absolute",
              height: "100%",
              width: "64%",
              bottom: 0,
              zIndex: 1,
              background: "linear-gradient(to right, #000, rgba(0,0,0,0))",
              opacity: 0.7,
            },
          },
        },
      ],
    },

    MuiCardMedia: {
      variants: [
        {
          props: { className: "full" },
          style: {
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            opacity: 0.8,
            transition: "0.1s ease-out",
          },
        },
        {
          props: { className: "video" },
          style: {
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            opacity: 0.8,
            transition: "0.1s ease-out",
          },
        },
      ],
    },

    MuiCardContent: {
      variants: [
        {
          props: { className: "cardcontent" },
          style: {
            padding: "3rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 2,
          },
        },
      ],
    },

    MuiCardActions: {
      variants: [
        {
          props: { className: "cardactions" },
          style: {
            display: "flex",
            justifyContent: "left",
            gap: "1rem",
            alignItems: "center",
          },
        },
      ],
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          //fontSize: "6rem",
          backgroundColor: "rgba(20,20,20,1.0)",
          borderColor: "white",
          borderStyle: "solid",
          borderWidth: "0.1rem",
          color: "white",
          minHeight: "30vh",

          //Font size
          "& .MuiTypography-h6": {
            fontSize: "4rem",
          },

          //Font size p
          "& .MuiTypography-body1": {
            fontSize: "1.5rem",
          },
        },
      },
    },
  },
});
