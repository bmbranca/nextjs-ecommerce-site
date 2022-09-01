import React from "react";
import Head from "next/head";
import Login from "./Login";

export default function Home() {
  return (
    <div>
      <Head>
        <title>next ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}
