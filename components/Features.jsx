import { Container, Paper, SimpleGrid, createStyles } from "@mantine/core";
import React from "react";
import Image from "next/image";

import IconFeaturesComplete from "../public/img/icon-features-complete.png";
import IconFeatures24hrs from "../public/img/icon-features-24hrs.png";
import IconFeaturesPrice from "../public/img/icon-features-price.png";
import IconFeaturesProfessional from "../public/img/icon-features-professional.png";

const features = [
  {
    icon: IconFeaturesComplete,
    title: "Mobil Lengkap",
    description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    icon: IconFeaturesPrice,
    title: "Harga Murah",
    description: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    icon: IconFeatures24hrs,
    title: "Layanan 24 Jam",
    description: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    icon: IconFeaturesProfessional,
    title: "Sopir Profesional",
    description: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

const useStyles = createStyles((theme) => ({
  text: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: "20px",
  },
}));

function Features() {
  const { classes } = useStyles();

  const items = features.map((feature, index) => (
    <div key={index}>
      <Paper withBorder p={24}>
        <Image src={feature.icon} alt={feature.title} />
        <h4>{feature.title}</h4>
        <p className={classes.text}>{feature.description}</p>
      </Paper>
    </div>
  ));

  return (
    <div>
      <Container size="lg">
        <h2>Why us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
        <SimpleGrid
          cols={4}
          spacing={16}
          breakpoints={[
            { maxWidth: "lg", cols: 3 },
            { maxWidth: "md", cols: 2 },
            { maxWidth: "sm", cols: 1 },
          ]}
        >
          {items}
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default Features;
