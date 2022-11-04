import AnnouncementIcon from "@mui/icons-material/Announcement";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import React from "react";

const SidebarContainer = styled(Box)(({ theme }) => ({
  display: "block",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const options = [
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

export const Sidebar: React.FC<{}> = () => {
  return (
    <SidebarContainer>
      <List>
        {options.map((o) => (
          <ListItem disablePadding key={o.text}>
            <ListItemButton>
              <ListItemIcon>{o.icon}</ListItemIcon>
              <ListItemText primary={o.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};
