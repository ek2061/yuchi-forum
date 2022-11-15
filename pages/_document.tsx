import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body style={{ paddingTop: "49px", minHeight: "100vh" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
