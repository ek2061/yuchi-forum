import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { HotTopicContainer } from "components";
import React from "react";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: "#f8f9fa",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  borderBottom: "1px solid #dee2e6",
}));

export const HotTopic: React.FC<{}> = () => {
  return (
    <HotTopicContainer>
      <List sx={{ pt: 0 }}>
        <StyledListItem sx={{ borderRadius: "10px 10px 0px 0px" }}>
          <Typography variant="h5">Hot Topics</Typography>
        </StyledListItem>
        <StyledListItem>JS</StyledListItem>
        <StyledListItem>Books</StyledListItem>
        <StyledListItem>Deep Learning</StyledListItem>
        <StyledListItem>Taiwan</StyledListItem>
      </List>
    </HotTopicContainer>
  );
};
