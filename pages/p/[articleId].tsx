import { ArticleContent, BasicPage } from "components";
import type { NextPage } from "next";

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
        unlike="2"
        comment="3"
      />
    </BasicPage>
  );
};

export default ArticleId;
