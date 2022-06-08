import React from "react";
import { useRouter } from "next/router";
import { createStyles, AppShell, Navbar, Header, Text, Group, TextInput, Button } from "@mantine/core";
import LogoAdminSidebar from "../../public/img/logo-admin-sidebar.png";

import Image from "next/image";

import ArrowDown from "../../public/img/icon-searchbar-chevron-down.png";
import IconUser from "../../public/img/icon-admin-header-user.png";
import IconSearch from "../../public/img/icon-search.png";
import IconMenu from "../../public/img/icon-menu.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: "#E5E5EA",
    width: "calc(100% - 75px)",
  },

  sidebar: {
    height: "calc(902px - 70px)",
  },

  sidebarLink: {
    backgroundColor: "#CFD4ED",
    fontWeight: 700,
    paddingLeft: 24,
  },
  sidebarTitle: {
    color: "#8A8A8A",
    fontWeight: 700,
    paddingLeft: 24,
  },
}));

// children disini
function AdminSidebar({ children }) {
  const { classes } = useStyles();
  const { pathname } = useRouter();

  const sideBarTitle = (() => {
    if (pathname === "/admin/dashboard") {
      return (
        <>
          <h3 className={classes.sidebarTitle}>Dashboard</h3>
          <div className={classes.sidebarLink}>
            <p>Dashboard</p>
          </div>
        </>
      );
    } else if (pathname === "/admin/cars/list-car" || pathname === "/admin/cars/list-car/add-new-car") {
      return (
        <>
          <h3 className={classes.sidebarTitle}>Cars</h3>
          <div className={classes.sidebarLink}>
            <p>List Car</p>
          </div>
        </>
      );
    }
  })();

  console.log(pathname); // '/admin/[path/]'

  let sidebar = (
    <Navbar className={classes.sidebar} width={{ base: 200 }}>
      {sideBarTitle}
    </Navbar>
  );

  let header = (
    <Header height={70} className={classes.header}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%", paddingLeft: 18, paddingRight: 18 }}>
        <Group spacing={96}>
          <Image src={LogoAdminSidebar} width={100} height={34} alt="Logo" />
          <Image src={IconMenu} alt="Menu" />
        </Group>
        <Group>
          <TextInput mr={24} icon={<Image src={IconSearch} alt="IconSearch" />} placeholder="Search" rightSection={<Button style={{ backgroundColor: "white", borderColor: "#0D28A6", color: "#0D28A6" }}>Search</Button>}></TextInput>
          <Image src={IconUser} alt="IconUser" />
          <p>Unis Badri</p>
          <Image src={ArrowDown} alt="ArrowDown" />
        </Group>
      </div>
    </Header>
  );

  return (
    <AppShell className={classes.wrapper} navbar={sidebar} header={header}>
      {children}
    </AppShell>
  );
}

export default AdminSidebar;
