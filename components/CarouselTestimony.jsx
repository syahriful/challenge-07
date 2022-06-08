import { Center, Paper, Space, createStyles, Group, Grid } from "@mantine/core";
import React from "react";
import Image from "next/image";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import TestimonyButtonNext from "../public/img/testimony-button-next.png";
import TestimonyButtonPrev from "../public/img/testimony-button-prev.png";

import TestimonyAvatar from "../public/img/testimony-avatar.png";
import TestimonyAvatar2 from "../public/img/testimony-avatar2.png";
import TestimonyRating from "../public/img/testimony-rating.png";

const slide = [
  {
    avatar: TestimonyAvatar,
    rating: TestimonyRating,
    profile: "John Dee 32, Bromo",
    description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
  },
  {
    avatar: TestimonyAvatar,
    rating: TestimonyRating,
    profile: "John Dee 32, Bromo",
    description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
  },
  {
    avatar: TestimonyAvatar2,
    rating: TestimonyRating,
    profile: "John Dee 32, Bromo",
    description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: "#F1F3FF",
    padding: "69px 32px",
    display: "grid",
    gridTemplateColumns: "0.2fr 1fr",
    gridGap: "46px",

    // Static media query
    "@media (max-width: 800px)": {
      padding: "30px 16px",
    },
  },
  avatar: {
    placeSelf: "center",
  },
}));

function CarouselTestimony() {
  const { classes } = useStyles();

  const slides = slide.map((slide, index) => (
    <SwiperSlide key={index}>
      <Paper radius="md" withBorder className={classes.card}>
        <div className={classes.avatar}>
          <Image src={slide.avatar} alt={index} />
        </div>
        <div>
          <Image src={slide.rating} alt={index} />
          <p>{slide.description}</p>
          <p>{slide.profile}</p>
        </div>
      </Paper>
    </SwiperSlide>
  ));

  return (
    <>
      <Center>
        <h2>Testimonial</h2>
      </Center>
      <Center>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </Center>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: "#button-next",
          prevEl: "#button-prev",
        }}
        loop={true}
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides}
      </Swiper>

      <Center mt={30} mb={60}>
        <div id="button-prev" style={{ cursor: "pointer" }}>
          <Image src={TestimonyButtonPrev} alt="button prev" />
        </div>
        <Space w="xl" />
        <div id="button-next" style={{ cursor: "pointer" }}>
          <Image src={TestimonyButtonNext} alt="button next" />
        </div>
      </Center>
    </>
  );
}

export default CarouselTestimony;
