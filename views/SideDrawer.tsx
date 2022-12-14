import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { SearchInput, VerticalEnd, VerticalStart } from "components";
import { UserInfo } from "components/UserInfo";
import { useAppDispatch, useAppSelector } from "hook/redux";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { openSideDrawer } from "store/app";
import { Sidebar } from "./Sidebar";

export const SideDrawer: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { sidedrawerOpen } = useAppSelector((state) => state.app);

  const { status } = useSession();

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
            <IconButton aria-label="close" size="small" onClick={onClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <SearchInput />
          {status === "unauthenticated" && (
            <Button variant="outlined" sx={{ width: "100%" }}>
              <Link href="/signin">Sign in</Link>
            </Button>
          )}
          {status === "authenticated" && (
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => {
                signOut();
                dispatch(openSideDrawer(false));
              }}
            >
              Sign out
            </Button>
          )}
          <Sidebar />
          {status === "authenticated" && (
            <VerticalEnd alignItems="end">
              <UserInfo />
            </VerticalEnd>
          )}
        </VerticalStart>
      </Box>
    </SwipeableDrawer>
  );
};
