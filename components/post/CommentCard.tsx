import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { HorizontalStart, VerticalCenter } from "components";
import { format, formatDistanceToNow } from "date-fns";
import React from "react";
import { stringToColor } from "utils/palette";

interface CommentCardProps {
  postedBy: string;
  postTime: string;
  body: string;
}

export const CommentCard: React.FC<CommentCardProps> = ({
  postedBy,
  postTime,
  body,
}) => {
  let formatDate = "";
  if (postTime) {
    const fiveDays = 1000 * 3600 * 24 * 5;
    if (Date.now() - new Date(postTime).getTime() > fiveDays) {
      formatDate = format(new Date(postTime), "PPpp");
    } else {
      formatDate = formatDistanceToNow(new Date(postTime), {
        includeSeconds: true,
        addSuffix: true,
      });
    }
  }

  return (
    <HorizontalStart spacing={2}>
      <Avatar sx={{ bgcolor: stringToColor(postedBy) }}>{postedBy[0]}</Avatar>
      <VerticalCenter alignItems="start">
        <Typography variant="body2">
          {postedBy} . {formatDate}
        </Typography>
        <Typography variant="body1">{body}</Typography>
      </VerticalCenter>
    </HorizontalStart>
  );
};
