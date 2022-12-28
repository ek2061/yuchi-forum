import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import {
  CommentCard,
  Progress,
  VerticalCenter,
  VerticalStart,
} from "components";
import React from "react";
import { useListCommentQuery } from "store/comment";

export const CommentContent: React.FC<{ pid: number }> = ({ pid }) => {
  const { data, isLoading, isError } = useListCommentQuery({ pid, limit: 5 });

  if (isLoading) return <Progress />;
  if (isError) return <VerticalCenter>failed to fetch comments</VerticalCenter>;
  if (data.length === 0) return <VerticalCenter>No comments</VerticalCenter>;

  return (
    <CardContent>
      <VerticalStart spacing={1}>
        {data &&
          data.map(
            ({
              cid,
              uid,
              content,
              createdat,
              nickname,
            }: {
              cid: number;
              uid: string;
              content: string;
              createdat: string;
              nickname: string;
            }) => (
              <React.Fragment key={cid}>
                <Divider sx={{ width: "100%" }} />
                <CommentCard
                  uid={uid}
                  nickname={nickname}
                  postTime={createdat}
                  body={content}
                />
              </React.Fragment>
            )
          )}
      </VerticalStart>
    </CardContent>
  );
};
