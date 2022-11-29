import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  Comment,
  HorizontalStart,
  VerticalCenter,
  VerticalStart,
} from "components";
import React from "react";
import { stringToColor } from "utils/palette";

type ArticleContentProps = React.FC<{
  postedBy: string;
  postTime: string;
  title: string;
  body: string;
  like: string | number;
  dislike: string | number;
  comment: string | number;
}>;

export const ArticleContent: ArticleContentProps = ({
  postedBy,
  postTime,
  title,
  body,
  like,
  dislike,
  comment,
}) => {
  return (
    <Card sx={{ px: "12px", py: "6px", width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: stringToColor(postedBy) }}>
            {postedBy[0]}
          </Avatar>
        }
        title={postedBy}
        subheader={postTime}
      ></CardHeader>
      <CardContent>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <VerticalCenter>
          <HorizontalStart>
            <Box>
              <Button
                sx={{ mr: "0.5rem" }}
                variant="outlined"
                startIcon={<ThumbUpOffAltIcon />}
                color="inherit"
                size="large"
              >
                {like}
              </Button>
              <Button
                sx={{ mr: "0.2rem" }}
                variant="outlined"
                startIcon={<ThumbDownOffAltIcon fontSize="large" />}
                color="inherit"
                size="large"
              >
                {dislike}
              </Button>
            </Box>
          </HorizontalStart>
        </VerticalCenter>
      </CardActions>
      <Divider />
      <CardContent sx={{ pb: "6px" }}>
        <HorizontalStart spacing={2}>
          <Avatar sx={{ bgcolor: stringToColor("User") }}>U</Avatar>
          <TextField
            variant="standard"
            placeholder="Leave your comment"
            sx={{ flexGrow: 1 }}
          />
          <Box sx={{ pb: "12px" }}>
            <Button
              variant="contained"
              sx={{ borderRadius: "50px", height: "42px" }}
            >
              Submit
            </Button>
          </Box>
        </HorizontalStart>
      </CardContent>
      <Divider />
      <CardContent>
        <VerticalStart spacing={1}>
          <Comment postedBy="Feng" postTime="30 seconds ago" body="HAHA" />
          <Divider sx={{ width: "100%" }} />
          <Comment postedBy="Joe" postTime="35 seconds ago" body="HEHE" />
        </VerticalStart>
      </CardContent>
    </Card>
  );
};
