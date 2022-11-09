import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { HorizontalCenter, VerticalCenter } from "components";
import Head from "next/head";
import Link from "next/link";

const Error404 = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Head>
        <title>404</title>
      </Head>
      <HorizontalCenter>
        <VerticalCenter>
          <Typography variant="h1">404</Typography>
          <Typography variant="subtitle1">
            The page you are looking for was not found.
          </Typography>
          <Button variant="contained" color="error">
            <Link href="/">Back to Home</Link>
          </Button>
        </VerticalCenter>
      </HorizontalCenter>
    </Box>
  );
};

export default Error404;
