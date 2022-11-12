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
import Link from "next/link";
import React from "react";

type ArticleCardProps = React.FC<{
  postedBy: string;
  postTime: string;
  title: string;
  body: string;
  like: string | number;
  unlike: string | number;
  comment: string | number;
}>;

export const ArticleCard: ArticleCardProps = ({
  postedBy,
  postTime,
  title,
  body,
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
      <CardContent sx={{ py: 0 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          <Link href="/" style={{ color: "#0969da" }}>
            {title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
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
            {unlike}
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
