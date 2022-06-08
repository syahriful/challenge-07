import React from "react";
import { createStyles, Header, Group, Container, Button, Anchor } from "@mantine/core";
import LogoHome from "../public/img/logo-navbar-home.png";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: "#F1F3FF",
    paddingTop: 25,
    paddingBottom: 15,
    borderBottomColor: "#F1F3FF",
  },

  inner: {
    height: 36,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  navigation: {
    color: "#1E1E1E",
    marginRight: 32,
    fontWeight: 500,
  },
}));

export function HeaderHome() {
  const { classes } = useStyles();

  return (
    <>
      <Header className={classes.header}>
        <Container size="lg">
          <div className={classes.inner}>
            <Image src={LogoHome} alt="Home Logo" width={100} height={34} />
            <Group spacing={5}>
              <Anchor underline={false} className={classes.navigation}>
                Our Services
              </Anchor>
              <Anchor underline={false} className={classes.navigation}>
                Why Us
              </Anchor>
              <Anchor underline={false} className={classes.navigation}>
                Testimonial
              </Anchor>
              <Anchor underline={false} className={classes.navigation}>
                FAQ
              </Anchor>
              <Button color="green">Register</Button>
            </Group>
          </div>
        </Container>
      </Header>
    </>
  );
}
