import { createTheme } from "@mui/material/styles";

export const light = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#24292F",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          "*::-webkit-scrollbar": {
            width: "5px",
            height: "5px",
          },
          "*::-webkit-scrollbar-track": {
            webkitBorderRadius: "10px",
            borderRadius: "10px",
            margin: "0",
          },
          "*::-webkit-scrollbar-thumb": {
            webkitBorderRadius: "4px",
            borderRadius: "4px",
            background: "#737476",
          },
        },
        // global css
        body: {
          padding: 0,
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
          backgroundColor: "#e9ecef",
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
        "*": {
          boxSizing: "border-box",
        },
      },
    },
  },
});
