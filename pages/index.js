import Head from "next/head";

import CarouselTestimony from "../components/CarouselTestimony";
import { Faq } from "../components/Faq";
import Features from "../components/Features";
import { FooterHome } from "../components/FooterHome";
import GraphCars from "../components/GraphCars";
import { HeaderHome } from "../components/HeaderHome";
import { Hero } from "../components/Hero";
import HeroCta from "../components/HeroCta";
import OurService from "../components/OurService";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderHome />
      <Hero />
      <OurService />
      <GraphCars />
      <Features />
      <CarouselTestimony />
      <HeroCta />
      <Faq />
      <FooterHome />
    </>
  );
}
