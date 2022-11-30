import CommentIcon from "@mui/icons-material/Comment";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { HorizontalEnd } from "components";
import { format, formatDistanceToNow } from "date-fns";
import Link from "next/link";
import React from "react";
import { stringToColor } from "utils/palette";

type PostCardProps = React.FC<{
  postId: string | number;
  postedBy: string;
  postTime: string;
  title: string;
  body: string;
  like: string | number;
  dislike: string | number;
  comment: string | number;
}>;

export const PostCard: PostCardProps = ({
  postId,
  postedBy,
  postTime,
  title,
  body,
  like,
  dislike,
  comment,
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
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: stringToColor(postedBy) }}>
            {postedBy[0]}
          </Avatar>
        }
        title={postedBy}
        subheader={formatDate}
      ></CardHeader>
      <CardContent sx={{ py: 0 }}>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          <Link href={`/p/${postId}`} style={{ color: "#0969da" }}>
            {title}
          </Link>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            wordBreak: "break-word !important" as any,
            overflowWrap: "break-word !important" as any,
            hyphens: "auto !important" as any,
          }}
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <HorizontalEnd spacing={1}>
          <Box>
            <ThumbUpOffAltIcon />
            {like}
          </Box>
          <Box>
            <ThumbDownOffAltIcon />
            {dislike}
          </Box>
          <Box>
            <CommentIcon />
            {comment}
          </Box>
        </HorizontalEnd>
      </CardActions>
    </Card>
  );
};
