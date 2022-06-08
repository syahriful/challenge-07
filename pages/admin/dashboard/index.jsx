import React from "react";
import Image from "next/image";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import AdminNavbar from "../../../components/admin/AdminNavbar";

import { Breadcrumbs, Group } from "@mantine/core";

import AdminTitleDecor from "../../../public/img/admin-titledecor.png";

function Dashboard() {
  return (
    <AdminNavbar>
      <AdminSidebar>
        <Breadcrumbs separator=">">
          <a style={{ fontWeight: "bold" }}>Dashboard</a>
          <a>Dashboard</a>
        </Breadcrumbs>
        <h3>Dashboard</h3>
        <Group spacing="xs" mb={16}>
          <Image src={AdminTitleDecor} height={24} weight={4} alt="Title" /> List Order
        </Group>
        <div>Table List Order</div>
        <div>Pagination List Order Section</div>
        <div>| List Car</div>
        <div>Table List Car</div>
        <div>Pagination List Car Section</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex quae, fuga, velit ducimus fugit illo ratione cum repudiandae itaque neque enim amet consequuntur est consequatur! Consequuntur quo commodi doloribus?
      </AdminSidebar>
    </AdminNavbar>
  );
}

export default Dashboard;
