import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { CommentCard, VerticalStart } from "components";

export const CommentContent: React.FC<{}> = () => {
  return (
    <CardContent>
      <VerticalStart spacing={1}>
        <CommentCard postedBy="Feng" postTime="30 seconds ago" body="HAHA" />
        <Divider sx={{ width: "100%" }} />
        <CommentCard postedBy="Joe" postTime="35 seconds ago" body="HEHE" />
      </VerticalStart>
    </CardContent>
  );
};
