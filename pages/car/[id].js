/* eslint-disable @next/next/no-img-element */
// Add this import
import { Button, Card, Center, Container, Grid, Group, Paper, List, Accordion } from "@mantine/core";
import Head from "next/head";
import { FooterHome } from "../../components/FooterHome";
import { HeaderHome } from "../../components/HeaderHome";
import { Hero } from "../../components/Hero";
import SearchbarDisabled from "../../components/SearchbarDisabled";
import Image from "next/image";
import Link from "next/link";
import CardIconUsers from "../../public/img/card-icon-users.png";
import CardIconSettings from "../../public/img/card-icon-settings.png";
import CardIconCalendar from "../../public/img/card-icon-calendar.png";

export async function getServerSideProps({ params }) {
  console.log(params);
  const resp = await fetch(`https://rent-cars-api.herokuapp.com/admin/car/${params.id}`);

  return {
    props: {
      car: await resp.json(),
    },
  };
}

export default function Post({ car }) {
  return (
    <>
      <Head>
        <title>{car.id}</title>
      </Head>
      <HeaderHome />
      <Hero />
      <SearchbarDisabled />
      <Container size={1000} mb={46}>
        <Grid>
          <Grid.Col span={8}>
            <Paper withBorder p={24} mb={24}>
              <h4>Tentang Paket</h4>
              <p>Include</p>
              <List pl={10}>
                <List.Item>Apa saja yang termasuk dalam paket misal durasi max 12 jam</List.Item>
                <List.Item>Sudah termasuk bensin selama 12 jam</List.Item>
                <List.Item>Sudah termasuk Tiket Wisata</List.Item>
                <List.Item>Sudah termasuk pajak</List.Item>
              </List>
              <p>Exclude</p>
              <List pl={10}>
                <List.Item>Tidak termasuk biaya makan sopir Rp 75.000/hari</List.Item>
                <List.Item>Jika overtime lebih dari 12 jam akan ada tambahan biaya RP 20.000/jam</List.Item>
                <List.Item>Tidak termasuk akomodasi penginapan</List.Item>
              </List>
              <Accordion iconPosition="right" offsetIcon={false} mt={26}>
                <Accordion.Item
                  style={{
                    borderBottom: 0,
                  }}
                  label="Refund, Reschedule, Overtime"
                >
                  <List.Item>Tidak termasuk biaya makan sopir Rp 75.000/hari</List.Item>
                  <List.Item>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</List.Item>
                  <List.Item>Tidak termasuk akomodasi penginapan</List.Item>
                  <List.Item>Tidak termasuk biaya makan sopir Rp 75.000/hari</List.Item>
                  <List.Item>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</List.Item>
                  <List.Item>Tidak termasuk akomodasi penginapan</List.Item>
                  <List.Item>Tidak termasuk biaya makan sopir Rp 75.000/hari</List.Item>
                  <List.Item>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</List.Item>
                  <List.Item>Tidak termasuk akomodasi penginapan</List.Item>
                </Accordion.Item>
              </Accordion>
            </Paper>
            <Button
              color="green"
              radius={2}
              style={{
                float: "right",
              }}
            >
              Lanjutkan Pembayaran
            </Button>
          </Grid.Col>

          <Grid.Col span={4}>
            <Card
              withBorder
              p={24}
              style={{
                width: 405,
                alignItems: "center",
              }}
            >
              <Card.Section pt={28}>
                <Center>
                  <img src={car.image} height={160} width={270} alt={`image-${car.id}`} />
                </Center>
              </Card.Section>
              <p>
                {car.name} / {car.category}
              </p>
              <Group mb={40} style={{ fontSize: 10 }}>
                <Group spacing={8}>
                  <Image src={CardIconUsers} height={12} width={12} alt="icon-users" />4 orang
                </Group>
                <Group spacing={10}>
                  <Image src={CardIconSettings} height={12} width={12} alt="icon-users" />
                  Manual
                </Group>
                <Group spacing={10}>
                  <Image src={CardIconCalendar} height={12} width={12} alt="icon-users" />
                  Tahun 2020
                </Group>
              </Group>
              <Group position="apart">
                <p>Total</p>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                  }}
                >
                  Rp.{car.price}
                </p>
              </Group>
              <Link
                href={{
                  pathname: `invoice`,
                  query: {
                    car: car.id,
                  },
                }}
              >
                <Button radius={2} style={{ width: "100%" }} color="green">
                  Lanjutkan Pembayaran
                </Button>
              </Link>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
      <FooterHome />
    </>
  );
}
