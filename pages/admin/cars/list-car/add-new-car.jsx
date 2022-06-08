import React from "react";
import AdminNavbar from "../../../../components/admin/AdminNavbar";
import AdminSidebar from "../../../../components/admin/AdminSidebar";

import { Breadcrumbs, Button, Group, Paper } from "@mantine/core";

function addNewCar() {
  return (
    <AdminNavbar>
      <AdminSidebar>
        <Breadcrumbs separator=">">
          <a style={{ fontWeight: "bold" }}>Cars</a>
          <a style={{ fontWeight: "bold" }}>List Car</a>
          <a>Add New Car</a>
        </Breadcrumbs>
        <h2>Add New Car</h2>
        <form>
          <Paper mr={10} p={16}>
            <Group>
              <p style={{ width: 147 }}>Nama</p>
              <input type="text" placeholder="Placeholder" />
            </Group>
            <Group>
              <p style={{ width: 147 }}>Harga</p>
              <input type="text" placeholder="Placeholder" />
            </Group>
            <Group>
              <p style={{ width: 147 }}>Foto</p>
              <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" placeholder="Placeholder" />
            </Group>
            <Group>
              <p style={{ width: 147 }}>Start Rent</p>
              <p>-</p>
            </Group>
            <Group>
              <p style={{ width: 147 }}>Finish Rent</p>
              <p>-</p>
            </Group>
            <Group>
              <p style={{ width: 147 }}>Created at</p>
              <p>-</p>
            </Group>
            <Group>
              <p style={{ width: 147 }}>Updated at</p>
              <p>-</p>
            </Group>
          </Paper>
          <Group style={{ position: "relative", top: 200 }}>
            <Button
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#0D28A6",
                color: "#0D28A6",
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              style={{
                backgroundColor: "#0D28A6",
              }}
            >
              Save
            </Button>
          </Group>
        </form>
      </AdminSidebar>
    </AdminNavbar>
  );
}

export default addNewCar;
