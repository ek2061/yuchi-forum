import CommentIcon from "@mui/icons-material/Comment";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { HorizontalEnd } from "components";
import React from "react";

type ArticleCardProps = React.FC<{
  postedBy: string;
  postTime: string;
  post: string;
  like: string | number;
  unlike: string | number;
  comment: string | number;
}>;

export const ArticleCard: ArticleCardProps = ({
  postedBy,
  postTime,
  post,
  like,
  unlike,
  comment,
}) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {postedBy[0]}
          </Avatar>
        }
        title={postedBy}
        subheader={postTime}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <HorizontalEnd>
          <Box sx={{ mx: "0.5rem" }}>
            <ThumbUpOffAltIcon />
            {like}
          </Box>
          <Box sx={{ mx: "0.5rem" }}>
            <ThumbDownOffAltIcon />
            {unlike}
          </Box>
          <Box sx={{ mx: "0.5rem" }}>
            <CommentIcon />
            {comment}
          </Box>
        </HorizontalEnd>
      </CardActions>
    </Card>
  );
};
