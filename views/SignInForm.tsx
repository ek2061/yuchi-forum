import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { HorizontalEnd, TextInput } from "components";
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

export const SignInForm: React.FC<{}> = () => {
  return (
    <RegisterFormContainer component="form">
      <Typography variant="h4" align="center" sx={{ mb: "1rem" }}>
        Sign in
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: "1rem" }}>
        Join the hot topic and have fun!
      </Typography>
      <TextInput
        icon={<AccountCircle sx={{ mr: 1, mb: "1rem" }} />}
        placeholder="account"
        sx={{ mb: "1rem" }}
      />
      <TextInput
        icon={<LockIcon sx={{ mr: 1 }} />}
        placeholder="password"
        type="password"
      />
      <HorizontalEnd>
        <Button>Forgot password?</Button>
      </HorizontalEnd>
      <Button variant="contained" sx={{ width: "100%", mb: "1rem" }}>
        Sign in
      </Button>
      <Divider />
      Need an account?
      <Button>
        <Link href="/signup">Sign up</Link>
      </Button>
    </RegisterFormContainer>
  );
};
