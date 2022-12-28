import { useAppDispatch, useAppSelector } from "hook/redux";
import { useSnackbar } from "notistack";
import React from "react";
import { popMessage } from "store/app";

const Snackbar: React.FC<{
  message: { status: number; data: { msg: string } };
}> = ({ message }) => {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (message) {
      const { status, data } = message;
      enqueueSnackbar(data?.msg ?? "error occurred", {
        variant: status >= 400 ? "error" : "warning",
        preventDuplicate: true,
        onExited: () => dispatch(popMessage({ message })),
      });
    }
  }, [message, enqueueSnackbar, dispatch]);
  return null;
};

export const GlobalMessage: React.FC<{}> = () => {
  const { messages } = useAppSelector((state) => state.app);

  return (
    <>
      {messages.map((message, idx) => (
        <Snackbar message={message} key={idx} />
      ))}
    </>
  );
};
