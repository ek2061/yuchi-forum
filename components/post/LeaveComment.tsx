import Button from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { HorizontalStart } from "components";
import React from "react";
import { useCreateCommentMutation } from "store/comment";

export const LeaveComment: React.FC<{ pid: number }> = ({ pid }) => {
  const [createComment, { isLoading }] = useCreateCommentMutation();

  const [form, setForm] = React.useState<{
    pid: number;
    content: string;
  }>({
    pid: pid ?? -1,
    content: "",
  });

  const submitForm = () => {
    if (pid > 0) {
      createComment(form);
      setForm({ ...form, content: "" });
    }
  };

  return (
    <CardContent sx={{ pb: "6px" }}>
      <HorizontalStart spacing={2}>
        <TextField
          variant="standard"
          placeholder="Leave your comment"
          sx={{ flexGrow: 1 }}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <Box sx={{ pb: "12px" }}>
          <Button
            variant="contained"
            sx={{ borderRadius: "50px", height: "42px" }}
            onClick={submitForm}
            loading={isLoading}
          >
            Submit
          </Button>
        </Box>
      </HorizontalStart>
    </CardContent>
  );
};
