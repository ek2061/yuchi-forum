import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SearchInput } from "components";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/yuchi-forum-logo.svg";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  flexWrap: "inherit",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1140px",
  },
}));

const CollapsedButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexBasis: "auto",
  flexGrow: 1,
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const Header: React.FC<{}> = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        left: 0,
        right: 0,
        height: "49px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledToolbar>
        <Link
          href="/"
          style={{
            marginRight: "auto",
            alignItems: "center",
            display: "flex",
            whiteSpace: "nowrap",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              boxSizing: "border-box",
              display: "inline-block",
              position: "relative",
              width: "33px",
              height: "33px",
            }}
          >
            <Image
              src={Logo}
              alt="logo"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
              ml: "0.5rem",
            }}
          >
            yuchi forum
          </Typography>
        </Link>
        <CollapsedButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mx: 1 }}
        >
          <MenuIcon />
        </CollapsedButton>
        <SearchContainer>
          <SearchInput />
        </SearchContainer>
        <StyledButton variant="text" sx={{ color: "#fff", mx: 0.5 }}>
          Sign in
        </StyledButton>
        <StyledButton
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            mx: 0.5,
            "&:hover": {
              borderColor: "#fff",
            },
          }}
        >
          <Link href="/signup">Sign up</Link>
        </StyledButton>
      </StyledToolbar>
    </AppBar>
  );
};
