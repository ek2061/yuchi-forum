import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { RegisterFormContainer, TextInput } from "components";
import { NextPage } from "next";
import Link from "next/link";

export const SignUpForm: NextPage = () => {
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
