/* eslint-disable @next/next/no-img-element */
import { SimpleGrid, createStyles, Card, Button, Space, Group, Stack } from "@mantine/core";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import CardIconUsers from "../public/img/card-icon-users.png";
import CardIconSettings from "../public/img/card-icon-settings.png";
import CardIconCalendar from "../public/img/card-icon-calendar.png";

const useStyles = createStyles((theme) => ({
  text: {
    fontSize: 14,
    fontWeight: 400,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
}));

export function ItemList({ listCar }) {
  const { classes } = useStyles();
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 1200, cols: 2 },
        { maxWidth: 600, cols: 1 },
      ]}
    >
      {listCar.map((car) => (
        <div key={car.id}>
          <Card shadow="sm" radius={8} p={24} withBorder>
            <Card.Section p={17}>
              <img src={car.image} height={160} width={270} alt={`image-${car.id}`} />
            </Card.Section>
            <p>
              {car.name} / {car.category}
            </p>
            <p className={classes.title}>Rp.{car.price} / hari</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

            <Stack spacing={0}>
              <Group>
                <Image src={CardIconUsers} height={20} width={20} alt="icon-users" />
                <p>4 orang</p>
              </Group>
              <Group>
                <Image src={CardIconSettings} height={20} width={20} alt="icon-users" />
                <p>Manual</p>
              </Group>
              <Group>
                <Image src={CardIconCalendar} height={20} width={20} alt="icon-users" />
                <p>Tahun 2020</p>
              </Group>

              <Link href={`/car/${car.id}`}>
                <Button color="green">Pilih Mobil</Button>
              </Link>
            </Stack>
          </Card>
        </div>
      ))}
    </SimpleGrid>
  );
}
