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
        {
          props: { className: "links" },
          style: {
            display: "flex",
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
        fontFamily: "Poppins",
        color: "white",
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
            fontSize: "2rem",
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

            "&:hover .MuiCardMedia-root": {
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
            height: "100%",
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
  },
});
