import { Button } from "@mantine/core";
import React from "react";
import { useRouter } from "next/router";

export function ButtonSewa() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/customer");
  };

  return (
    <Button onClick={handleClick} color="green" size="sm">
      Mulai Sewa Mobil
    </Button>
  );
}
