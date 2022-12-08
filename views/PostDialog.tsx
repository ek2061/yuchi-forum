import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { Modal, VerticalStart } from "components";
import { useAppDispatch, useAppSelector } from "hook/redux";
import React from "react";
import {
  closeAndResetDialog,
  setForm,
  useCreatePostMutation,
} from "store/post";

interface formProps {
  form: { title: string; content: string };
}

const PostForm: React.FC<formProps> = ({ form }) => {
  const dispatch = useAppDispatch();

  return (
    <VerticalStart spacing={5}>
      <Input
        placeholder="尼的超廢標題"
        inputProps={{ "aria-label": "post title" }}
        fullWidth
        value={form.title}
        onChange={(e) => dispatch(setForm({ ...form, title: e.target.value }))}
      />
      <TextField
        placeholder="今天有什麼廢文?"
        inputProps={{ "aria-label": "post content" }}
        fullWidth
        value={form.content}
        onChange={(e) =>
          dispatch(setForm({ ...form, content: e.target.value }))
        }
        multiline
        minRows={6}
      />
    </VerticalStart>
  );
};

const PostAction: React.FC<formProps> = ({ form }) => {
  const dispatch = useAppDispatch();

  const [createPost, { isLoading, isSuccess }] = useCreatePostMutation();

  const onPost = () => {
    createPost({ uid: 2, title: form.title, content: form.content });
  };

  const [block, setBlock] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (isLoading || form.title === "" || form.content === "") setBlock(true);
    else setBlock(false);
  }, [form.content, form.title, isLoading]);

  React.useEffect(() => {
    if (isSuccess) dispatch(closeAndResetDialog());
  }, [dispatch, isSuccess]);

  return (
    <>
      <IconButton disabled={isLoading}>
        <ImageIcon />
      </IconButton>
      <Button variant="contained" onClick={onPost} disabled={block}>
        發廢文
      </Button>
    </>
  );
};

export const PostDialog: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { open, form } = useAppSelector((state) => state.post);

  const closeIconEvent = () => dispatch(closeAndResetDialog());
  const onClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown" | "closeButtonClick"
  ) => {
    if (reason && reason === "backdropClick") return;
    closeIconEvent();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeIconEvent={closeIconEvent}
      sx={{
        "& .MuiDialog-container": {
          alignItems: "flex-start",
        },
      }}
      PaperProps={{ sx: { mt: "80px" } }}
      icon={<CreateIcon />}
      title="發一篇廢文"
      content={<PostForm form={form} />}
      action={<PostAction form={form} />}
    />
  );
};
