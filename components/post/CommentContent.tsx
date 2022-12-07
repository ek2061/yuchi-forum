import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { VerticalStart } from "components";
import { Comment } from "./Comment";

export const CommentContent: React.FC<{}> = () => {
  return (
    <CardContent>
      <VerticalStart spacing={1}>
        <Comment postedBy="Feng" postTime="30 seconds ago" body="HAHA" />
        <Divider sx={{ width: "100%" }} />
        <Comment postedBy="Joe" postTime="35 seconds ago" body="HEHE" />
      </VerticalStart>
    </CardContent>
  );
};
