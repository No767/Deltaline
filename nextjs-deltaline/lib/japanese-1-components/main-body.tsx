import React from "react";
import { Group, Text } from "@mantine/core";

export function MainBody({}) {
  return (
    <>
      {" "}
      <Group align="center" direction="column" spacing="xs" mx={50} pt={25}>
        <Text size="xl" color="white" align="center">
          こんにちは！
        </Text>
        <Text size="xl" color="white" align="center">
          初めまして！
        </Text>
        <Text size="xl" color="white" align="center">
          私の名前はノエルです！
        </Text>
        <Text size="xl" color="white" align="center">
          どうぞよろしくお願いします。
        </Text>
      </Group>
    </>
  );
}
