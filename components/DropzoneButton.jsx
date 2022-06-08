import React, { useRef } from "react";
import { Group, createStyles, useMantineTheme } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import Image from "next/image";

import InvoiceImageDropzone from "../public/img/invoice-image-dropzone.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: 30,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 40,
    backgroundColor: "#EEEEEE",
    borderColor: "#D0D0D0",
  },

  icon: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: 250,
    left: "calc(50% - 125px)",
    bottom: -20,
  },
}));

export function DropzoneButton() {
  const { classes } = useStyles();
  const openRef = useRef();

  return (
    <div className={classes.wrapper}>
      <Dropzone openRef={openRef} onDrop={() => {}} className={classes.dropzone} radius="md" accept={[MIME_TYPES.pdf]} maxSize={30 * 1024 ** 2}>
        {() => (
          <div style={{ paddingTop: 40, pointerEvents: "none" }}>
            <Group position="center">
              <Image src={InvoiceImageDropzone} alt="img-dropzone" />
              <p>PDF Viewer</p>
            </Group>
          </div>
        )}
      </Dropzone>
    </div>
  );
}
