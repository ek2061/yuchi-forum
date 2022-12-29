import {
  BasicPage,
  PostCard,
  Progress,
  SidebarContainer,
  VerticalCenter,
} from "components";
import type { NextPage } from "next";
import { useListPostQuery } from "store/post";
import { HotTopic } from "views/HotTopic";
import { PostDialog } from "views/PostDialog";
import { Sidebar } from "views/Sidebar";

const Posts: React.FC<{
  isLoading: boolean;
  posts: Array<{
    pid: string;
    nickname: string;
    createdat: string;
    title: string;
    excerpt: string;
    like: string | number;
    dislike: string | number;
  }>;
}> = ({ isLoading, posts }) => {
  if (isLoading) return <Progress />;
  if (posts.length === 0) return <>No Posts</>;
  return (
    <>
      {posts.map((v) => (
        <PostCard
          key={v.pid}
          postId={v.pid}
          postedBy={v.nickname}
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
  const { data = [], isLoading } = useListPostQuery(
    { limit: 5 },
    { refetchOnMountOrArgChange: true }
  );

  return (
    <BasicPage>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <VerticalCenter spacing={2}>
        <Posts isLoading={isLoading} posts={data} />
      </VerticalCenter>
      <HotTopic />
      <PostDialog />
    </BasicPage>
  );
};

export default Home;
