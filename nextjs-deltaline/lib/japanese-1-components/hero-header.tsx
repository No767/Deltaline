import React from "react";

import { Group, Title, BackgroundImage } from "@mantine/core";

export function Jpn1HeroHeader({}) {
  return (
    <BackgroundImage
      src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/background-assets/background.webp"
      sx={{
        height: 350,
      }}
    >
      <Group align="center" direction="column" spacing="xs" mx={50}>
        <Title
          align="center"
          sx={{
            color: "#F8F9FA",
          }}
          pt={150}
        >
          Japanese 1
        </Title>
      </Group>
    </BackgroundImage>
  );
}
