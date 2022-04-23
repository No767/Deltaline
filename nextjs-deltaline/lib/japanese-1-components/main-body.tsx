import React from "react";
import { Group, Text } from "@mantine/core";

export function MainBody({}) {
  return (
    <>
      {" "}
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
    </>
  );
}
