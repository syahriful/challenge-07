import { Container, createStyles, SimpleGrid, List } from "@mantine/core";
import React from "react";
import Image from "next/image";

import ImageService from "../public/img/img-service.png";
import iconServiceDescription from "../public/img/icon-service-description.png";

const useStyles = createStyles((theme) => ({
  container: {
    // Media query with value from theme
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      paddingTop: 100,
      paddingBottom: 100,
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingTop: 60,
      paddingBottom: 60,
    },
  },
  description: {
    width: 468,
  },
  text: {
    lineHeight: "20px",
    fontSize: "14px",
    textAlign: "justify",
  },
}));

function OurService() {
  const { classes } = useStyles();

  return (
    <div className={classes.services}>
      <Container size={1027} className={classes.container}>
        <SimpleGrid
          breakpoints={[
            { maxWidth: "sm", cols: 1 },
            { minWidth: "sm", cols: 2, spacing: 80 },
          ]}
        >
          <div>
            <Image src={ImageService} alt="service-image" />
          </div>
          <div className={classes.description}>
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className={classes.text}>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <List spacing="xs" size="sm" center icon={<Image src={iconServiceDescription} alt="icon-service-description" />}>
              <List.Item>Sewa Mobil Dengan Supir di Bali 12 Jam</List.Item>
              <List.Item>Sewa Mobil Lepas Kunci di Bali 24 Jam</List.Item>
              <List.Item>Sewa Mobil Jangka Panjang Bulanan</List.Item>
              <List.Item>Gratis Antar - Jemput Mobil di Bandara</List.Item>
              <List.Item>Layanan Airport Transfer / Drop In Out</List.Item>
            </List>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default OurService;
