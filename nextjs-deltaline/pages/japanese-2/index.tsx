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
    </div>
  );
};

export default japanese2;
