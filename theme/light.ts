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
  },
});
