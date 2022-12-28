import AnnouncementIcon from "@mui/icons-material/Announcement";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PostAddIcon from "@mui/icons-material/PostAdd";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useAppDispatch } from "hook/redux";
import { useSession } from "next-auth/react";
import React from "react";
import { openDialog } from "store/post";

export const Sidebar: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  const { status } = useSession();

  const onOpen = () => {
    if (status === "authenticated") {
      dispatch(openDialog());
    } else {
      window.location.href = "/signin";
    }
  };

  const options = [
    {
      text: "Post",
      icon: <PostAddIcon />,
      onClick: onOpen,
    },
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Explore",
      icon: <ExploreIcon />,
    },
    {
      text: "About",
      icon: <AnnouncementIcon />,
    },
    {
      text: "More",
      icon: <MoreHorizIcon />,
    },
  ];

  return (
    <List sx={{ width: "100%" }}>
      {options.map((o) => (
        <ListItem disablePadding key={o.text}>
          <ListItemButton onClick={o.onClick}>
            <ListItemIcon>{o.icon}</ListItemIcon>
            <ListItemText primary={o.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
