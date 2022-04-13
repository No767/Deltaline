import React from "react";
import { Button } from "@mantine/core";
import { AppShell, Header, Text, Group } from "@mantine/core";
import { SiGithub } from "react-icons/si";
import { BsBook, BsFlower1, BsFlower2, BsInfoCircle } from "react-icons/bs";
import { Menu } from "@mantine/core";

export function Navbar({ undefined }) {
  return (
    <AppShell
      header={
        <Header height={60} fixed={true}>
          <Group
            spacing="xl"
            position="center"
            sx={{
              paddingTop: 10,
              paddingBottom: 10,
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
        </Header>
      }
      children={undefined}
    ></AppShell>
  );
}
