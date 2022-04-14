import React from "react";

import { Text, Group, Title, Divider, Button } from "@mantine/core";
import { MdSpeed } from "react-icons/md";
import { FaGithub, FaQuestion } from "react-icons/fa";
import { SiReadthedocs } from "react-icons/si";

export function Body({}) {
  return (
    <>
      <Group
        align="center"
        direction="column"
        spacing="md"
        sx={{
          color: "#F8F9FA",
        }}
        mx={75}
      >
        <Title order={3} pt={25} align="center">
          Welcome to Deltaline
        </Title>
        <Text size="lg" align="center">
          This is where the digital portfolio is stored. Browse through the
          collections of works that are available and choose the ones of your
          liking
        </Text>
      </Group>

      <Divider size="xs" mt={35} mx={125} />

      <Title
        order={3}
        sx={{
          color: "#F8F9FA",
        }}
        align="center"
        pt={35}
        mx={75}
      >
        So, what&apos;s the difference between this website and the digital
        portfolio?
      </Title>

      <Group
        align="center"
        direction="column"
        spacing="lg"
        sx={{
          color: "#F8F9FA",
        }}
        pt={50}
        mx={75}
      >
        <MdSpeed className="iconSize" />
        <Title order={3} align="center">
          Built for Performance
        </Title>
        <Text size="xl" align="center">
          Deltaline was completely rebuilt using Next.js and TypeScript,
          allowing for insane load times and without any caches. Deltaline
          leverages SSR from Next.js to be able to load each page from the
          server, thus improving performance massively.
        </Text>
      </Group>

      <Group
        align="center"
        direction="column"
        spacing="lg"
        sx={{
          color: "#F8F9FA",
        }}
        pt={75}
        mx={75}
      >
        <FaGithub className="iconSize" />
        <Title order={3} align="center">
          Completely Open Source
        </Title>
        <Text size="xl" align="center">
          Deltaline is also completely open source, and licensed under the
          GPL-3.0 license.
        </Text>
      </Group>

      <Group
        align="center"
        direction="column"
        spacing="lg"
        sx={{
          color: "#F8F9FA",
        }}
        pt={75}
        mx={75}
      >
        <FaQuestion className="iconSize" />
        <Title order={3} align="center">
          Completely Documented
        </Title>
        <Text size="xl" align="center">
          Have a question on how it&apos;s built? Or interested in the design
          process and other information? Well, the documentation is there for
          you to take a look.
        </Text>
        <Button
          variant="outline"
          style={{
            width: 150,
            color: "#FFFFFF",
          }}
          leftIcon={<SiReadthedocs />}
          component="a"
          href="https://deltaline-docs.readthedocs.io/en/latest/"
        >
          Docs
        </Button>
      </Group>
    </>
  );
}
