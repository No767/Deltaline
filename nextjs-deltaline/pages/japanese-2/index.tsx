import { HeroHeader } from "../../lib/japanese-2-components/hero-header";
import { NavbarMain } from "../../lib/index-components/navbar-main";
import type { NextPage } from "next";

import {
  Group,
  Title,
  Text,
  Stack,
  Image,
  Divider,
  Anchor,
} from "@mantine/core";

const japanese2: NextPage = () => {
  return (
    <div>
      <NavbarMain />
      <HeroHeader />
      <Group align="center" direction="column" spacing="xs" mx={50} pt={25}>
        <Text size="xl" color="white">
          こんにちは！
        </Text>
        <Text size="xl" color="white">
          初めまして！
        </Text>
        <Text size="xl" color="white">
          私の名前はノエルです！
        </Text>
        <Text size="xl" color="white">
          どうぞよろしくお願いします。
        </Text>
      </Group>

      <Group
        align="center"
        position="center"
        direction="column"
        spacing="md"
        pt={50}
      >
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/(2-18-2022)%20U4%20JPN%20Brochure_1.jpg"
          radius="md"
          alt="Front"
          width={256}
          height={512}
        />
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/(2-18-2022)%20U4%20JPN%20Brochure%20Pg%201_1.jpg"
          radius="md"
          alt="Letter to Saijo V2 Pg 2"
          width={256}
          height={256}
        />
      </Group>
    </div>
  );
};

export default japanese2;
