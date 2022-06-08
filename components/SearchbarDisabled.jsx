import { Container, Paper, createStyles, Button, Select, Grid } from "@mantine/core";
import React from "react";
import Image from "next/image";

import { DatePicker } from "@mantine/dates";

import IconSearchbarChevronDown from "../public/img/icon-searchbar-chevron-down.png";
import IconSearchBarCalendar from "../public/img/icon-searchbar-calendar.png";
import IconSearchBarClock from "../public/img/icon-searchbar-clock.png";
import IconSearchBarUsers from "../public/img/icon-searchbar-users.png";

const useStyles = createStyles((theme) => ({
  container: {
    position: "relative",
    top: -60,
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  searchBar: {
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 12,
  },
}));

function SearchbarDisabled() {
  const { classes } = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Paper withBorder className={classes.searchBar} shadow="sm" radius={8} p={24}>
          <Grid columns={20}>
            <Grid.Col span={5}>
              <Select
                disabled
                label="Tipe Driver"
                id="tipe-driver"
                rightSection={<Image src={IconSearchbarChevronDown} alt="Tipe Driver" />}
                rightSectionWidth={40}
                styles={{ rightSection: { pointerEvents: "none" }, label: { fontSize: 12 } }}
                data={[
                  { value: "denganSopir", label: "Dengan Sopir" },
                  { value: "tanpaSopir", label: "Tanpa Sopir (Lepas Kunci)" },
                ]}
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <DatePicker disabled label="Departure date" rightSection={<Image src={IconSearchBarCalendar} alt="Tipe Driver" />} rightSectionWidth={40} styles={{ rightSection: { pointerEvents: "none" }, label: { fontSize: 12 } }} />
            </Grid.Col>
            <Grid.Col span={5}>
              <Select
                disabled
                label="Waktu Jemput/Ambil"
                rightSection={<Image src={IconSearchBarClock} alt="Tipe Driver" />}
                rightSectionWidth={40}
                styles={{ rightSection: { pointerEvents: "none" }, label: { fontSize: 12 } }}
                data={[
                  { value: "08.00", label: "08.00" },
                  { value: "09.00", label: "09.00" },
                  { value: "10.00", label: "10.00" },
                  { value: "11.00", label: "11.00" },
                ]}
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <Select
                disabled
                label="Jumlah Penumpang"
                rightSection={<Image src={IconSearchBarUsers} alt="Tipe Driver" />}
                rightSectionWidth={40}
                styles={{ rightSection: { pointerEvents: "none" }, label: { fontSize: 12 } }}
                data={[
                  { value: 1, label: "1 Orang" },
                  { value: 2, label: "2 Orang" },
                  { value: 3, label: "3 Orang" },
                  { value: 4, label: "4 Orang" },
                ]}
              />
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default SearchbarDisabled;
