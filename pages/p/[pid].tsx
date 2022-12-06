import { BasicPage, PostContent } from "components";
import type { GetServerSideProps, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { HotTopic } from "views/HotTopic";

interface PostContentProps {
  uid: string;
  createdat: string;
  title: string;
  content: string;
  like: string | number;
  dislike: string | number;
}

const PId: NextPage<PostContentProps> = (data) => {
  return (
    <BasicPage suspense={false}>
      <PostContent
        postedBy="Yuchi"
        postTime={data.createdat}
        title={data.title}
        body={data.content}
        like={data.like}
        dislike={data.dislike}
      />
      <HotTopic />
    </BasicPage>
  );
};

export default PId;

export const getServerSideProps: GetServerSideProps<Params> = async ({
  params,
}) => {
  try {
    const res = await fetch(`${process.env.YUCHI_API}/post/${params?.pid}`);
    const data = await res?.json();
    return { props: data ?? {} };
  } catch (error) {
    return { notFound: true };
  }
};
