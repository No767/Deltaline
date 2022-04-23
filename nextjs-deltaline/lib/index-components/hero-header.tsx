import React from "react";
import { Group, Title, BackgroundImage, Image } from "@mantine/core";

export function HeroHeader({}) {
  return (
    <BackgroundImage
      src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/background-assets/background.webp"
      sx={{
        height: 425,
      }}
    >
      <Group align="center" direction="column" spacing="xs" mx={50}>
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/assets/Deltaline-Logo-V2.1.svg"
          height={256}
          width={256}
          sx={{
            paddingTop: 25,
          }}
        />
        <Title
          align="center"
          sx={{
            color: "#F8F9FA",
          }}
        >
          Deltaline
        </Title>

        <Title
          order={3}
          align="center"
          sx={{
            color: "#F8F9FA",
          }}
        >
          The Digital Portfolio for the needs of schoolwork
        </Title>
      </Group>
    </BackgroundImage>
  );
}
