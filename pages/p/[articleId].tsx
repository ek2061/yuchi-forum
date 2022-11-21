import { ArticleContent, BasicPage } from "components";
import type { NextPage } from "next";
import { HotTopic } from "views/HotTopic";

const ArticleId: NextPage = () => {
  return (
    <BasicPage>
      <ArticleContent
        postedBy="Yuchi"
        postTime="a minute ago"
        title="Spice 'n Easy Recipe Mixes"
        body="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like."
        like="5"
        dislike="2"
        comment="3"
      />
      <HotTopic />
    </BasicPage>
  );
};

export default ArticleId;
