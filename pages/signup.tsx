import AccountCircle from "@mui/icons-material/AccountCircle";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LockIcon from "@mui/icons-material/Lock";
import PolicyIcon from "@mui/icons-material/Policy";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {
  MainContainer,
  Modal,
  RegisterFormContainer,
  TextInput,
} from "components";
import { useAppDispatch, useAppSelector } from "hook/redux";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { openPolicy, setForm, useRegisterMutation } from "store/signup";
import { Header } from "views/Header";

const SignUpForm: NextPage<{
  form: {
    nickname: string;
    account: string;
    password: string;
  };
}> = ({ form }) => {
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation();
  const onSubmit = async () => {
    const res = await register(form);
    console.log(res);
  };

  return (
    <RegisterFormContainer component="form">
      <Typography variant="h4" align="center" sx={{ mb: "1rem" }}>
        Sign up
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: "1rem" }}>
        Create a new account and join the hot topic!
      </Typography>
      <TextInput
        icon={<AssignmentIndIcon sx={{ mr: 1, mb: "1rem" }} />}
        placeholder="nickname"
        sx={{ mb: "1rem" }}
        value={form.nickname}
        onChange={(e) =>
          dispatch(setForm({ ...form, nickname: e.target.value }))
        }
      />
      <TextInput
        icon={<AccountCircle sx={{ mr: 1, mb: "1rem" }} />}
        placeholder="account"
        sx={{ mb: "1rem" }}
        value={form.account}
        onChange={(e) =>
          dispatch(setForm({ ...form, account: e.target.value }))
        }
      />
      <TextInput
        icon={<LockIcon sx={{ mr: 1, mb: "1rem" }} />}
        placeholder="password"
        type="password"
        sx={{ mb: "1rem" }}
        value={form.password}
        onChange={(e) =>
          dispatch(setForm({ ...form, password: e.target.value }))
        }
      />
      <Typography variant="inherit" sx={{ mb: "1rem" }}>
        By registering, you agree to the{" "}
        <Link
          href="/signup"
          style={{ color: "#117E96", fontWeight: "400px" }}
          onClick={() => dispatch(openPolicy(true))}
        >
          Privacy Policy
        </Link>
        .
      </Typography>
      <Button
        variant="contained"
        sx={{ width: "100%", mb: "1rem" }}
        onClick={onSubmit}
      >
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

const PrivacyPolicy: NextPage<{ open: boolean }> = ({ open }) => {
  const dispatch = useAppDispatch();
  const closeModal = () => dispatch(openPolicy(false));

  return (
    <Modal
      open={open}
      closeIconEvent={closeModal}
      icon={<PolicyIcon />}
      title="Privacy Policy"
      content={
        <Typography>
          When you use our services, you’re trusting us with your information.
          We understand this is a big responsibility and work hard to protect
          your information and put you in control.
        </Typography>
      }
    />
  );
};

const SignUp: NextPage = () => {
  const { form, policyOpen } = useAppSelector((state) => state.signup);

  return (
    <Box>
      <Head>
        <title>SignUp | yuchi forum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer component="main">
        <Header />
        <SignUpForm form={form} />
        <PrivacyPolicy open={policyOpen} />
      </MainContainer>
    </Box>
  );
};

export default SignUp;
