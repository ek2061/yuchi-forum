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

export const SidebarContainer = styled(Box)(({ theme }) => ({
  display: "block",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexBasis: "auto",
  flexGrow: 1,
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const HotTopicContainer = styled(Box)(({ theme }) => ({
  display: "block",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  flex: "0 0 auto",
  width: "25%",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const RegisterFormContainer = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  flex: "0 0 auto",
  maxWidth: "406px",

  borderRadius: "0.3rem",
  padding: "1.5rem",
  boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,0.075)",
  boxSizing: "border-box",
  backgroundColor: "rgba(255,255,255,1.0)",
}));

export const UserInfoContainer = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
