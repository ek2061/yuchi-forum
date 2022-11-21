import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { HorizontalBetween, HorizontalStart, VerticalStart } from "components";
import { useAppDispatch, useAppSelector } from "hook/redux";
import React from "react";
import { closeAndResetDialog } from "store/post";

const PostForm: React.FC<{}> = () => {
  return (
    <VerticalStart spacing={5}>
      <Input
        placeholder="尼的超廢標題"
        inputProps={{ "aria-label": "post title" }}
        fullWidth
      />
      <TextField
        placeholder="今天有什麼廢文?"
        inputProps={{ "aria-label": "post content" }}
        fullWidth
        multiline
        minRows={6}
      />
    </VerticalStart>
  );
};

export const PostDialog: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.post);

  const closeDialog = () => dispatch(closeAndResetDialog());
  const onClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown" | "closeButtonClick"
  ) => {
    if (reason && reason === "backdropClick") return;
    closeDialog();
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-container": {
          alignItems: "flex-start",
        },
      }}
      PaperProps={{ sx: { mt: "80px" } }}
    >
      <DialogTitle>
        <HorizontalBetween>
          <HorizontalStart>
            <Avatar sx={{ width: "35px", height: "35px", mr: 1 }}>
              <CreateIcon />
            </Avatar>
            <Typography variant="h4">發一篇廢文</Typography>
          </HorizontalStart>
          <IconButton onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </HorizontalBetween>
      </DialogTitle>
      <DialogContent>
        <PostForm />
      </DialogContent>
      <DialogActions>
        <IconButton>
          <ImageIcon />
        </IconButton>
        <Button variant="contained">發廢文</Button>
      </DialogActions>
    </Dialog>
  );
};
