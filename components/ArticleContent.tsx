import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { HorizontalStart, VerticalCenter } from "components";
import React from "react";
import { stringToColor } from "utils/palette";

type ArticleContentProps = React.FC<{
  postedBy: string;
  postTime: string;
  title: string;
  body: string;
  like: string | number;
  unlike: string | number;
  comment: string | number;
}>;

export const ArticleContent: ArticleContentProps = ({
  postedBy,
  postTime,
  title,
  body,
  like,
  unlike,
  comment,
}) => {
  return (
    <Card sx={{ px: "12px", py: "6px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: stringToColor(postedBy) }} aria-label="recipe">
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
                {unlike}
              </Button>
            </Box>
          </HorizontalStart>
          <Typography variant="subtitle1">共{comment}則留言</Typography>
        </VerticalCenter>
      </CardActions>
    </Card>
  );
};
