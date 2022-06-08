import React from "react";
import { Footer, createStyles, Container, SimpleGrid } from "@mantine/core";

import Image from "next/image";

import IconFooterFacebook from "../public/img/icon-footer-facebook.png";
import IconFooterInstagram from "../public/img/icon-footer-instagram.png";
import IconFooterTwitter from "../public/img/icon-footer-twitter.png";
import IconFooterMail from "../public/img/icon-footer-mail.png";
import IconFooterTwitch from "../public/img/icon-footer-twitch.png";
import LogoFooter from "../public/img/logo-footer.png";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTopColor: "#FFFFFF",
  },
  footerIcon: {
    marginLeft: 16,
    marginRight: 16,
  },
}));

export function FooterHome() {
  const { classes } = useStyles();

  return (
    <Footer className={classes.footer} pb={60}>
      <Container size={1168}>
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          <div>
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>

          <div>
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div>
            <p>Connect with us</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Image src={IconFooterFacebook} alt="icon-footer-facebook" />
              <Image src={IconFooterInstagram} alt="icon-footer-instagram" />
              <Image src={IconFooterTwitter} alt="icon-footer-twitter" />
              <Image src={IconFooterMail} alt="icon-footer-mail" />
              <Image src={IconFooterTwitch} alt="icon-footer-twitch" />
            </div>
          </div>
          <div>
            <p>Copyright Binar 2022</p>
            <Image src={LogoFooter} alt="logo-footer" />
          </div>
        </SimpleGrid>
      </Container>
    </Footer>
  );
}
