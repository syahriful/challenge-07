import { Container, Paper, createStyles, Button, Select, Grid } from "@mantine/core";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { DatePicker } from "@mantine/dates";
import { ItemList } from "./ItemList";

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

function Searchbar() {
  const { classes } = useStyles();
  const base_URL = "https://rent-cars-api.herokuapp.com/admin/car";

  const [listCar, setListCar] = useState([]);
  const [isClickSerch, setIsClickSearch] = useState(false);

  const getCars = async () => {
    const { data } = await axios(base_URL);
    setListCar(data);
    setIsClickSearch(!isClickSerch);
  };

  // handler for submit search button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      getCars();
      console.log(e);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className={classes.container}>
        <Paper withBorder className={classes.searchBar} shadow="sm" radius={8} p={24} mb={40}>
          <Grid columns={23}>
            <Grid.Col span={5}>
              <Select
                clearable
                label="Tipe Driver"
                id="tipe-driver"
                placeholder="Pilih Tipe Driver"
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
              <DatePicker
                label="Departure date"
                placeholder="Pilih Tanggal"
                rightSection={<Image src={IconSearchBarCalendar} alt="Tipe Driver" />}
                rightSectionWidth={40}
                styles={{ rightSection: { pointerEvents: "none" }, label: { fontSize: 12 } }}
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <Select
                clearable
                label="Waktu Jemput/Ambil"
                placeholder="Pilih Waktu"
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
                clearable
                label="Jumlah Penumpang"
                placeholder="Jumlah Penumpang"
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

            <Grid.Col span={2}>
              {isClickSerch ? (
                <Button color="indigo" variant="outline" mt={26} onClick={(e) => handleSubmit(e)}>
                  Edit
                </Button>
              ) : (
                <Button color="green" mt={26} onClick={(e) => handleSubmit(e)}>
                  Cari Mobil
                </Button>
              )}
            </Grid.Col>
          </Grid>
        </Paper>
        {isClickSerch ? <>{listCar.length > 0 && <ItemList listCar={listCar} />} </> : null}
      </Container>
    </>
  );
}

export default Searchbar;
