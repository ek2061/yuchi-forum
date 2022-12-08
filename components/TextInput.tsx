import Box from "@mui/material/Box";
import { InputBaseProps } from "@mui/material/InputBase";
import TextField, { BaseTextFieldProps } from "@mui/material/TextField";
import { HorizontalStart } from "components";
import React from "react";

interface TextInputProps extends BaseTextFieldProps {
  icon?: JSX.Element;
  onChange?: InputBaseProps["onChange"];
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <Box sx={{ py: 1, width: "100%" }}>
      <HorizontalStart>
        {props.icon}
        <TextField
          fullWidth
          inputProps={{
            sx: {
              m: 0,
              p: 0,
              paddingLeft: 1,
              height: "45px",
              backgroundColor: "#F5F6F7",
              borderRadius: "10px",
            },
          }}
          {...props}
        />
      </HorizontalStart>
    </Box>
  );
};
