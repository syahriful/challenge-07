import { Container, Button, Center, createStyles, Paper } from "@mantine/core";
import React from "react";
import { ButtonSewa } from "./ButtonSewa";

const useStyles = createStyles((theme) => ({
  Cta: {
    backgroundColor: "#0D28A6",
    padding: "64px",
    textAlign: "center",
  },
  h: {
    color: "#fff",
  },
  text: {
    width: 468,
    color: "#fff",
    fontSize: 14,
    lineHeight: "20px",
    fontWeight: 300,
  },
}));

function HeroCta() {
  const { classes } = useStyles();

  return (
    <Container size={1168} mb={60}>
      <Paper radius="md" className={classes.Cta}>
        <Center>
          <h1 className={classes.h}>Sewa Mobil di (Lokasimu) Sekarang</h1>
        </Center>
        <Center>
          <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </Center>
        <Center mt={52}>
          <ButtonSewa />
        </Center>
      </Paper>
    </Container>
  );
}

export default HeroCta;
