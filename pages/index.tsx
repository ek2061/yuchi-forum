import { ArticleCard, HorizontalCenter } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "styles/container.module.css";
import { Header } from "views/Header";
import { HotTopic } from "views/HotTopic";
import { Sidebar } from "views/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>yuchi forum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Header />
        <HorizontalCenter sx={{ py: "1.5rem" }} alignItems="start">
          <Sidebar />
          <ArticleCard
            postedBy="Yuchi"
            postTime="a minute ago"
            post="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like."
            like="5"
            unlike="2"
            comment="3"
          />
          <HotTopic />
        </HorizontalCenter>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
