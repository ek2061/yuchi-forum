import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import React from "react";
import { HorizontalCenter } from "./Horizontal";

export const Progress: React.FC<CircularProgressProps> = (props) => {
  return (
    <HorizontalCenter
      alignItems="center"
      sx={{ width: "100%", height: "100%", p: 3 }}
    >
      <CircularProgress
        color="success"
        {...props}
        data-testid="circular-progress"
      />
    </HorizontalCenter>
  );
};
