import { Button, Center, Container, Group, Paper } from "@mantine/core";
import React from "react";
import { FooterHome } from "../../components/FooterHome";
import { HeaderHome } from "../../components/HeaderHome";
import Image from "next/image";

import InvoiceArrowBack from "../../public/img/invoice-arrow-back.png";
import InvoiceMiniChecklist from "../../public/img/invoice-mini-checklist.png";
import InvoicePaymentSuccess from "../../public/img/invoice-payment-success.png";
import InvoiceStrip from "../../public/img/invoice-strip.png";
import Invoice3 from "../../public/img/invoice-3.png";
import InvoiceDownload from "../../public/img/invoice-download.png";
import { DropzoneButton } from "../../components/DropzoneButton";

function invoice() {
  return (
    <>
      <HeaderHome />
      <div style={{ backgroundColor: "#F1F3FF", paddingTop: 43 }}>
        <Container>
          <Group position="apart">
            <Group>
              <Image src={InvoiceArrowBack} alt="Invoice-Arrow" />
              <h4>Tiket</h4>
            </Group>
            <Group>
              <Image src={InvoiceMiniChecklist} alt="Invoice-Mini-Checklist" />
              <p>Pilih Metode</p>
              <Image src={InvoiceStrip} alt="Invoice-Strip" />
              <Image src={InvoiceMiniChecklist} alt="Invoice-Mini-Checklist" />
              <p>Bayar</p>
              <Image src={InvoiceStrip} alt="Invoice-Strip" />
              <Image src={Invoice3} alt="Invoice-Payment-Success" />
              <p>Tiket</p>
            </Group>
          </Group>
        </Container>
      </div>
      <Center mt={40} mb={16}>
        <Image src={InvoicePaymentSuccess} alt="Invoice-Payment-Success" />
      </Center>
      <Center mb={16}>
        <div style={{ fontWeight: "bold" }}>Pembayaran Berhasil!</div>
      </Center>
      <Center mb={40}>
        <div>Tunjukkan invoice ini ke petugas BCR di titik temu.</div>
      </Center>
      <Center mb={40}>
        <Paper withBorder p={24} style={{ height: 290, width: 605 }}>
          <Group position="apart">
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              Invoice
            </p>
            <Button
              style={{
                borderColor: "#0D28A6",
                color: "#0D28A6",
                backgroundColor: "white",
              }}
            >
              <Image src={InvoiceDownload} alt="Invoice-Download" />
              <p style={{ marginLeft: 8 }}>Unduh</p>
            </Button>
          </Group>
          <p>*no Invoice</p>
          <DropzoneButton />
        </Paper>
      </Center>

      <FooterHome />
    </>
  );
}

export default invoice;
