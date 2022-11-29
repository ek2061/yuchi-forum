import { ArticleContent, BasicPage, Progress } from "components";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useRetrievePostQuery } from "store/post";
import { HotTopic } from "views/HotTopic";

const ArticleId: NextPage = () => {
  const router = useRouter();
  const { articleId } = router.query;

  const { data = {} } = useRetrievePostQuery(
    { pid: articleId },
    { skip: !articleId }
  );

  if (!articleId) return <Progress />;

  return (
    <BasicPage>
      <ArticleContent
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

export default ArticleId;
