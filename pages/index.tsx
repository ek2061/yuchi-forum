import {
  ArticleCard,
  BasicPage,
  Progress,
  SidebarContainer,
  VerticalCenter,
} from "components";
import type { NextPage } from "next";
import { useListPostQuery } from "store/post";
import { HotTopic } from "views/HotTopic";
import { PostDialog } from "views/PostDialog";
import { Sidebar } from "views/Sidebar";

const Articles: React.FC<{
  isLoading: boolean;
  articles: Array<{
    pid: string;
    createdat: string;
    title: string;
    excerpt: string;
    like: string | number;
    dislike: string | number;
  }>;
}> = ({ isLoading, articles }) => {
  if (isLoading) return <Progress />;
  if (articles.length === 0) return <>No Articles</>;
  return (
    <>
      {articles.map((v) => (
        <ArticleCard
          key={v.pid}
          postId={v.pid}
          postedBy="Yuchi"
          postTime={v.createdat}
          title={v.title}
          body={v.excerpt}
          like={v.like}
          dislike={v.dislike}
          comment="0"
        />
      ))}
    </>
  );
};

const Home: NextPage = () => {
  const { data = [], isLoading } = useListPostQuery({ limit: 5 });

  return (
    <BasicPage suspense={false}>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <VerticalCenter spacing={2}>
        <Articles isLoading={isLoading} articles={data} />
      </VerticalCenter>
      <HotTopic />
      <PostDialog />
    </BasicPage>
  );
};

export default Home;
