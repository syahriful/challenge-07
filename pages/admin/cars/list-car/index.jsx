/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import AdminNavbar from "../../../../components/admin/AdminNavbar";
import AdminSidebar from "../../../../components/admin/AdminSidebar";

import { Breadcrumbs, Button, Grid, Group } from "@mantine/core";

import AdminButtonIcon from "../../../../public/img/admin-btn-icon-plus.png";
import Cards from "../../../../components/admin/Cards";

function ListCar() {
  const router = useRouter();
  const base_URL = "https://rent-cars-api.herokuapp.com/admin/car";

  const [listCar, setListCar] = useState([]);

  const getCars = async () => {
    const { data } = await axios(base_URL);
    setListCar(data);
  };

  useEffect(() => {
    getCars();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/admin/cars/list-car/add-new-car");
  };

  return (
    <AdminNavbar>
      <AdminSidebar>
        <Breadcrumbs separator=">">
          <a style={{ fontWeight: "bold" }}>Cars</a>
          <a>List Car</a>
        </Breadcrumbs>
        <Group position="apart">
          <h3>List Car</h3>
          <Button onClick={handleClick} style={{ backgroundColor: "#0D28A6" }} leftIcon={<Image src={AdminButtonIcon} />}>
            Add New Car
          </Button>
        </Group>
        <Group spacing="xs" mb={16}>
          <Button
            variant="outline"
            styles={() => ({
              root: {
                borderColor: "#0D28A6",
                backgroundColor: "#ffffff;",
                color: "#0D28A6",
                "&:hover": {
                  backgroundColor: "#0D28A6",
                  color: "#ffffff",
                },
              },
            })}
          >
            All
          </Button>
          <Button
            variant="outline"
            styles={() => ({
              root: {
                borderColor: "#0D28A6",
                backgroundColor: "#ffffff;",
                color: "#0D28A6",
                "&:hover": {
                  backgroundColor: "#0D28A6",
                  color: "#ffffff",
                },
              },
            })}
          >
            Small
          </Button>
          <Button
            variant="outline"
            styles={() => ({
              root: {
                borderColor: "#0D28A6",
                backgroundColor: "#ffffff;",
                color: "#0D28A6",
                "&:hover": {
                  backgroundColor: "#0D28A6",
                  color: "#ffffff",
                },
              },
            })}
          >
            Medium
          </Button>
          <Button
            variant="outline"
            styles={() => ({
              root: {
                borderColor: "#0D28A6",
                backgroundColor: "#ffffff;",
                color: "#0D28A6",
                "&:hover": {
                  backgroundColor: "#0D28A6",
                  color: "#ffffff",
                },
              },
            })}
          >
            Large
          </Button>
        </Group>
        <Grid m={0}>
          <Cards listCar={listCar} />
        </Grid>
      </AdminSidebar>
    </AdminNavbar>
  );
}

export default ListCar;
