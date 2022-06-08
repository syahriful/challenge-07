/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { createStyles, SimpleGrid, Card, Stack, Group, Button } from "@mantine/core";

import IconKey from "../../public/img/icon-key.png";
import IconClock from "../../public/img/icon-clock.png";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
}));

function Cards({ listCar }) {
  const { classes } = useStyles();
  return (
    <>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 755, cols: 2 },
          { maxWidth: 600, cols: 1 },
        ]}
      >
        {listCar.map((car) => (
          <div key={car.id}>
            <Card className={classes.card} shadow="sm" radius={8} p={24} withBorder>
              <Card.Section p={17}>
                <img src={car.image} height={160} width={270} alt={`image-${car.id}`} />
              </Card.Section>
              <p>
                {car.name} / {car.category}
              </p>
              <p className={classes.title}>Rp.{car.price} / hari</p>
              <Stack spacing={0}>
                <Group>
                  <Image src={IconKey} height={20} width={20} alt="icon-users" />
                  <p>Start rent - Finish rent</p>
                </Group>
                <Group mb={20}>
                  <Image src={IconClock} height={20} width={20} alt="icon-users" />
                  <p>{car.updatedAt}</p>
                </Group>
                <Group grow>
                  <Button color="red" variant="outline">
                    Delete
                  </Button>
                  <Button color="green">Edit</Button>
                </Group>
              </Stack>
            </Card>
          </div>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Cards;
