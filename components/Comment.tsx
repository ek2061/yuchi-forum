import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { HorizontalStart, VerticalCenter } from "components";
import React from "react";
import { stringToColor } from "utils/palette";

type CommentProps = React.FC<{
  postedBy: string;
  postTime: string;
  body: string;
}>;

export const Comment: CommentProps = ({ postedBy, postTime, body }) => {
  return (
    <HorizontalStart spacing={2}>
      <Avatar sx={{ bgcolor: stringToColor(postedBy) }}>{postedBy[0]}</Avatar>
      <VerticalCenter alignItems="start">
        <Typography variant="body2">
          {postedBy} . {postTime}
        </Typography>
        <Typography variant="body1">{body}</Typography>
      </VerticalCenter>
    </HorizontalStart>
  );
};
