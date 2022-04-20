import { NavbarMain } from "../../lib/index-components/navbar-main";
import { Jpn1HeroHeader } from "../../lib/japanese-1-components/hero-header";
import type { NextPage } from "next";

import {
  Group,
  Title,
  BackgroundImage,
  Text,
  Stack,
  Image,
} from "@mantine/core";

const japanese1: NextPage = () => {
  return (
    <div>
      <NavbarMain />
      <Jpn1HeroHeader />
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

      <Stack align="center" justify="center" spacing="md"></Stack>
    </div>
  );
};

export default japanese1;
