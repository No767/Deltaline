import React, { useState } from "react";
import { NextLink } from "@mantine/next";
import { Button } from "@mantine/core";
import { AppShell, Header, Text, Group, Drawer, Burger } from "@mantine/core";
import { SiGithub } from "react-icons/si";
import { BsBook, BsFlower1, BsFlower2, BsInfoCircle } from "react-icons/bs";
import { Menu, Avatar } from "@mantine/core";

export function NavbarMain({}) {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
      >
        <Group spacing="xl" position="center" direction="column">
          <Button
            variant="outline"
            style={{
              width: 150,
              color: "#FFFFFF",
            }}
            leftIcon={<BsInfoCircle />}
            component="a"
            href="/about"
          >
            About
          </Button>
          <Button
            variant="outline"
            style={{
              width: 150,
              color: "#FFFFFF",
            }}
            leftIcon={<SiGithub />}
            component="a"
            href="https://github.com/No767/Deltaline"
          >
            GitHub
          </Button>
          <Menu
            control={
              <Button
                variant="outline"
                style={{
                  width: 150,
                }}
                leftIcon={<BsBook />}
                sx={{
                  color: "#FFFFFF",
                }}
              >
                <Text size="sm">Portfolio</Text>
              </Button>
            }
            placement="center"
            size="md"
          >
            <Menu.Item
              icon={<BsFlower1 />}
              component={NextLink}
              href="/japanese-1"
              target="_self"
            >
              Japanese 1
            </Menu.Item>
            <Menu.Item
              icon={<BsFlower2 />}
              component={NextLink}
              href="/japanese-2"
              target="_self"
            >
              Japanese 2
            </Menu.Item>
          </Menu>
        </Group>
      </Drawer>
      <Header height={60} fixed={true}>
        <Group spacing="xl" position="apart" align="center">
          <Avatar
            src="https://raw.githubusercontent.com/No767/Deltaline/dev/assets/Deltaline-Logo-V2.1.svg"
            size="lg"
            component={NextLink}
            href="/"
          />
          <Burger
            opened={opened}
            onClick={() => setOpened(true)}
            mx={15}
            size="md"
          />
        </Group>
      </Header>
    </AppShell>
  );
}
