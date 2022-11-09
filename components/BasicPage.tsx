import Box from "@mui/material/Box";
import { HorizontalCenter, Progress } from "components";
import Head from "next/head";
import React from "react";
import styles from "styles/container.module.css";
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

      <main className={styles.container}>
        <Header />
        <HorizontalCenter alignItems="start">
          <React.Suspense fallback={<Progress />}>{children}</React.Suspense>
        </HorizontalCenter>
      </main>

      <footer></footer>
      <SideDrawer />
    </Box>
  );
};