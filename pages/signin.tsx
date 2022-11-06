import type { NextPage } from "next";
import Head from "next/head";
import styles from "styles/container.module.css";
import { Header } from "views/Header";
import { SignInForm } from "views/SignInForm";

const SignIn: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SignIn | yuchi forum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Header />
        <SignInForm />
      </main>
    </div>
  );
};

export default SignIn;