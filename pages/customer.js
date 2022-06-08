import React from "react";
import Head from "next/head";
import { FooterHome } from "../components/FooterHome";
import { HeaderHome } from "../components/HeaderHome";
import { Hero } from "../components/Hero";
import Searchbar from "../components/Searchbar";
import { Space } from "@mantine/core";

function customer() {
  return (
    <>
      <Head>
        <title>Customer Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderHome />
      <Hero />
      <Searchbar />
      <Space h={172} />
      <FooterHome />
    </>
  );
}

export default customer;
