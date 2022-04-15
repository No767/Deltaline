import React, { useState } from "react";
import { Button } from "@mantine/core";
import {
  AppShell,
  Header,
  Text,
  Group,
  Navbar,
  MediaQuery,
  Burger,
} from "@mantine/core";
import { SiGithub } from "react-icons/si";
import { BsBook, BsFlower1, BsFlower2, BsInfoCircle } from "react-icons/bs";
import { Menu, Avatar } from "@mantine/core";

export function NavbarMain({}) {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell>
      <Header height={60} fixed={true}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>
        <Group spacing="xl" position="apart">
          <Avatar
            src="https://raw.githubusercontent.com/No767/Deltaline/dev/assets/Deltaline-Logo-V2.1.svg"
            size="lg"
            component="a"
            href="/"
          />
          <Group
            spacing="xl"
            position="right"
            sx={{
              paddingTop: 10,
              paddingBottom: 10,
              marginRight: 25,
            }}
          >
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
              <Menu.Item icon={<BsFlower1 />} component="a" href="/japanese-1">
                Japanese 1
              </Menu.Item>
              <Menu.Item icon={<BsFlower2 />} component="a" href="/japanese-2">
                Japanese 2
              </Menu.Item>
            </Menu>
          </Group>
        </Group>
      </Header>
      <Navbar hiddenBreakpoint="xl" hidden={!opened} height={250}>
        <Text>Application navbar</Text>
      </Navbar>
    </AppShell>
  );
}
