import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { TextInput } from "components";
import Link from "next/link";
import React from "react";

const RegisterFormContainer = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  flex: "0 0 auto",
  maxWidth: "406px",

  borderRadius: "0.3rem",
  padding: "1.5rem",
  boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,0.075)",
  boxSizing: "border-box",
  backgroundColor: "rgba(255,255,255,1.0)",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

export const SignUpForm: React.FC<{}> = () => {
  return (
    <RegisterFormContainer component="form">
      <Typography variant="h4" align="center" sx={{ mb: "1rem" }}>
        Sign up
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: "1rem" }}>
        Create a new account and join the hot topic!
      </Typography>
      <TextInput
        icon={<AccountCircle sx={{ mr: 1, mb: "1rem" }} />}
        placeholder="account"
        sx={{ mb: "1rem" }}
      />
      <TextInput
        icon={<LockIcon sx={{ mr: 1, mb: "1rem" }} />}
        placeholder="password"
        type="password"
        sx={{ mb: "1rem" }}
      />
      <Typography variant="inherit" sx={{ mb: "1rem" }}>
        By registering, you agree to the{" "}
        <Link href="/" style={{ color: "#117E96", fontWeight: "400px" }}>
          Privacy Policy
        </Link>
        .
      </Typography>
      <Button variant="contained" sx={{ width: "100%", mb: "1rem" }}>
        Sign up
      </Button>
      <Divider />
      Or already have an account?
      <Button>
        <Link href="/signin">Sign in</Link>
      </Button>
    </RegisterFormContainer>
  );
};
