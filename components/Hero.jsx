import React from "react";
import { createStyles, Container, Group, Text, Center } from "@mantine/core";
import HeroCar from "../public/img/img_car.png";
import Image from "next/image";
import { ButtonSewa } from "./ButtonSewa";

const useStyles = createStyles((theme) => ({
  hero: {
    backgroundColor: "#F1F3FF",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 3,
  },

  content: {
    maxWidth: 480,
    marginLeft: theme.spacing.xl * 3.5,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();
  return (
    <div className={classes.hero}>
      <Container size="xl">
        <div className={classes.inner}>
          <Center>
            <div className={classes.content}>
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <Text mt={16}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam. </Text>

              <Group mt={16} mb={16}>
                <ButtonSewa />
              </Group>
            </div>
          </Center>
          <div className={classes.image}>
            <Image src={HeroCar} alt="Hero Car" />
          </div>
        </div>
      </Container>
    </div>
  );
}
