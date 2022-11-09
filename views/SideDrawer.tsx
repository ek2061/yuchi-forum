import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { SearchInput, VerticalStart } from "components";
import { useAppDispatch, useAppSelector } from "hook/redux";
import React from "react";
import { openSideDrawer } from "store/app";
import { Sidebar } from "./Sidebar";

export const SideDrawer: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { sidedrawerOpen } = useAppSelector((state) => state.app);

  const onOpen = () => dispatch(openSideDrawer(true));
  const onClose = () => dispatch(openSideDrawer(false));
  return (
    <SwipeableDrawer
      anchor="left"
      open={sidedrawerOpen}
      onOpen={onOpen}
      onClose={onClose}
      swipeAreaWidth={56}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box sx={{ width: "300px", p: 2, height: "100%" }}>
        <VerticalStart spacing={2}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton aria-label="delete" size="small" onClick={onClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <SearchInput />
          <Button variant="contained" sx={{ width: "100%" }}>
            Sign in
          </Button>
          <Button variant="outlined" sx={{ width: "100%" }}>
            Sign up
          </Button>
          <Sidebar />
        </VerticalStart>
      </Box>
    </SwipeableDrawer>
  );
};
