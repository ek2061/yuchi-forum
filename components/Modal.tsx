import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { HorizontalBetween, HorizontalStart } from "components";
import React from "react";

interface ModalProps extends DialogProps {
  open: boolean;
  onClose?: (
    event: {},
    reason: "backdropClick" | "escapeKeyDown" | "closeButtonClick"
  ) => void;
  closeIconEvent: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  icon?: JSX.Element;
  title: string;
  content: JSX.Element;
  action?: JSX.Element;
}

export const Modal: React.FC<ModalProps> = ({
  icon,
  title,
  closeIconEvent,
  content,
  action,
  ...restProps
}) => {
  return (
    <Dialog maxWidth="md" fullWidth {...restProps}>
      <DialogTitle>
        <HorizontalBetween>
          <HorizontalStart>
            {icon && (
              <Avatar sx={{ width: "30px", height: "30px", mr: 1 }}>
                {icon}
              </Avatar>
            )}
            <Typography variant="h5">{title}</Typography>
          </HorizontalStart>
          <IconButton onClick={closeIconEvent}>
            <CloseIcon />
          </IconButton>
        </HorizontalBetween>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      {action && <DialogActions>{action}</DialogActions>}
    </Dialog>
  );
};
