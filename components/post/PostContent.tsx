import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { HorizontalStart, VerticalCenter } from "components";
import { format } from "date-fns";
import React from "react";
import { stringToColor } from "utils/palette";

interface PostContentProps {
  postedBy: string;
  postTime: string;
  title: string;
  body: string;
  like: string | number;
  dislike: string | number;
}

export const PostContent: React.FC<PostContentProps> = ({
  postedBy,
  postTime,
  title,
  body,
  like,
  dislike,
}) => {
  let formatDate = "";
  if (postTime) formatDate = format(new Date(postTime), "PPpp");

  return (
    <>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: stringToColor(postedBy ?? "") }}>
            {postedBy?.[0]}
          </Avatar>
        }
        title={postedBy || "unknown"}
        subheader={formatDate}
      ></CardHeader>
      <CardContent>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          whiteSpace="pre-line"
          color="text.secondary"
        >
          {typeof body === "string" &&
            body.split("\n").map((item, idx) => {
              return <React.Fragment key={idx}>{item + "\n"}</React.Fragment>;
            })}
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
    </>
  );
};
