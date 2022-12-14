import Box from "@mui/material/Box";
import { Progress } from "components";
import React from "react";

const Fallback: React.FC<{}> = () => (
  <Box sx={{ width: "100%", height: "100vh" }}>
    <Progress />
  </Box>
);

// !unfortunately arrow functions cannot use generics :(
export function Suspense<T>(Component: React.ComponentType<T>) {
  // eslint-disable-next-line react/display-name
  return (props: React.PropsWithChildren<T>) => (
    <React.Suspense fallback={<Fallback />}>
      <Component {...props} />
    </React.Suspense>
  );
}
