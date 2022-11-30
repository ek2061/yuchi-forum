import { BasicPage, PostContent, Progress } from "components";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useRetrievePostQuery } from "store/post";
import { HotTopic } from "views/HotTopic";

const PId: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { data = {} } = useRetrievePostQuery({ pid }, { skip: !pid });

  if (!pid) return <Progress />;

  return (
    <BasicPage>
      <PostContent
        postedBy="Yuchi"
        postTime={data.createdat}
        title={data.title}
        body={data.content}
        like={data.like}
        dislike={data.dislike}
        comment="0"
      />
      <HotTopic />
    </BasicPage>
  );
};

export default PId;
