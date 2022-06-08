import React from "react";
import { createStyles, Image, Accordion, Grid, Col, Container, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    borderRadius: 4,
    fontSize: theme.fontSizes.sm,
    border: `1px solid #D4D4D4`,
    marginBottom: 16,
  },
}));

const placeholder =
  "lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export function Faq() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size={1168} mb={60}>
        <Grid id="faq-grid">
          <Col span={12} md={6}>
            <Title order={2} align="left" className={classes.title}>
              Frequently Asked Questions
            </Title>
          </Col>
          <Col span={12} md={6}>
            <Accordion iconPosition="right" initialItem={0}>
              <Accordion.Item label="Apa saja syarat yang dibutuhkan?" className={classes.item}>
                {placeholder}
              </Accordion.Item>
              <Accordion.Item label="Berapa hari minimal sewa mobil lepas kunci?" className={classes.item}>
                {placeholder}
              </Accordion.Item>
              <Accordion.Item label="Berapa hari sebelumnya sabaiknya booking sewa mobil?" className={classes.item}>
                {placeholder}
              </Accordion.Item>
              <Accordion.Item label="Apakah Ada biaya antar-jemput?" className={classes.item}>
                {placeholder}
              </Accordion.Item>
              <Accordion.Item label="Bagaimana jika terjadi kecelakaan" className={classes.item}>
                {placeholder}
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
