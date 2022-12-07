import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { HorizontalStart } from "components";
import React from "react";
import { stringToColor } from "utils/palette";

export const LeaveComment: React.FC<{}> = () => {
  return (
    <CardContent sx={{ pb: "6px" }}>
      <HorizontalStart spacing={2}>
        <Avatar sx={{ bgcolor: stringToColor("User") }}>U</Avatar>
        <TextField
          variant="standard"
          placeholder="Leave your comment"
          sx={{ flexGrow: 1 }}
        />
        <Box sx={{ pb: "12px" }}>
          <Button
            variant="contained"
            sx={{ borderRadius: "50px", height: "42px" }}
          >
            Submit
          </Button>
        </Box>
      </HorizontalStart>
    </CardContent>
  );
};
