import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { HorizontalEnd, RegisterFormContainer, TextInput } from "components";
import Link from "next/link";
import React from "react";

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
