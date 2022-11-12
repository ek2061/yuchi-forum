import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const MainContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1140px",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
}));
