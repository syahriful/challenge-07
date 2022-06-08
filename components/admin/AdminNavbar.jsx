import React from "react";
import { useRouter } from "next/router";
import { createStyles, AppShell, Navbar, UnstyledButton, Text } from "@mantine/core";

import LogoAdminNavbar from "../../public/img/logo-admin-navbar.png";
import IconAdminNavbarDashboard from "../../public/img/icon-admin-navbar-dashboard.png";
import IconAdminNavbarCars from "../../public/img/icon-admin-navbar-listcars.png";

import Image from "next/image";

const useStyles = createStyles((theme) => ({
  wrapper: { overflowX: "hidden" },
  navbar: {
    backgroundColor: "#0D28A6",
    height: 902,
    display: "flex",
    flex: "0 0 70px",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    padding: 18,
  },
  navbarLink: {
    height: 64,
    width: "100%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
  },

  text: {
    fontSize: 12,
    color: "white",
  },
}));

function AdminNavbar({ children }) {
  const { classes } = useStyles();
  const router = useRouter();

  const dashboardClick = (e) => {
    e.preventDefault();
    router.push("/admin/dashboard");
  };

  const carsClick = (e) => {
    e.preventDefault();
    router.push("/admin/cars/list-car");
  };

  let mainNavbar = (
    <Navbar className={classes.navbar}>
      <div className={classes.logo}>
        <Image src={LogoAdminNavbar} width={34} height={34} alt="Logo" />
      </div>
      <UnstyledButton onClick={dashboardClick} className={classes.navbarLink}>
        <div>
          <Image src={IconAdminNavbarDashboard} width={24} height={24} alt="LogoDashboard" />
          <Text className={classes.text}>Dashboard</Text>
        </div>
      </UnstyledButton>
      <UnstyledButton onClick={carsClick} className={classes.navbarLink}>
        <div>
          <Image src={IconAdminNavbarCars} width={24} height={24} alt="LogoCars" />
          <Text className={classes.text}>Cars</Text>
        </div>
      </UnstyledButton>
    </Navbar>
  );

  return (
    <AppShell className={classes.wrapper} padding={0} navbar={mainNavbar}>
      {children}
    </AppShell>
  );
}

export default AdminNavbar;
