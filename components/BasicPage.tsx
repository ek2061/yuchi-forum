import Box from "@mui/material/Box";
import { HorizontalCenter, MainContainer, Progress } from "components";
import Head from "next/head";
import React from "react";
import { Header } from "views/Header";
import { SideDrawer } from "views/SideDrawer";

type BasicPageProps = React.FC<{
  title?: string;
  metaDescription?: string;
  children?: React.ReactNode;
}>;

export const BasicPage: BasicPageProps = ({
  title,
  metaDescription = "Generated by create next app",
  children,
}) => {
  let pageTitle = "yuchi forum";
  if (title) pageTitle = `${title} | yuchi forum`;

  return (
    <Box>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer component="main">
        <Header />
        <HorizontalCenter alignItems="start">
          <React.Suspense fallback={<Progress />}>{children}</React.Suspense>
        </HorizontalCenter>
      </MainContainer>

      <footer></footer>
      <SideDrawer />
    </Box>
  );
};
