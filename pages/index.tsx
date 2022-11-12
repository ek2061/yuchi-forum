import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  ArticleCard,
  HorizontalCenter,
  MainContainer,
  VerticalCenter,
} from "components";
import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "views/Header";
import { HotTopic } from "views/HotTopic";
import { Sidebar } from "views/Sidebar";
import { SideDrawer } from "views/SideDrawer";

const SidebarContainer = styled(Box)(({ theme }) => ({
  display: "block",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>yuchi forum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer component="main">
        <Header />
        <HorizontalCenter alignItems="start">
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <VerticalCenter spacing={2}>
            <ArticleCard
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
          </VerticalCenter>
          <HotTopic />
        </HorizontalCenter>
      </MainContainer>

      <footer></footer>
      <SideDrawer />
    </Box>
  );
};

export default Home;
