import React from "react";

import { Text, Stack, Title, Divider, Group } from "@mantine/core";

import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiTypescript,
  SiUbuntu,
  SiFedora,
  SiOpensuse,
} from "react-icons/si";

export function Body({}) {
  return (
    <>
      <Stack align="center" justify="center" spacing="lg">
        <Title
          order={3}
          sx={{
            color: "#FFFFFF",
          }}
          pt={25}
        >
          About
        </Title>
        <Text size="lg" color="white" align="center" mx={200} pb={25}>
          Hey there! I&apos;m Noelle, a Full Stack Web Developer and a Discord
          Bot Developer. I work with frameworks like React and Next.js, to
          backend frameworks like FastAPI. In fact, this whole entire website
          has been written using Next.js, TypeScript, and Mantine
        </Text>
      </Stack>
      <Stack align="center" justify="center">
        <Group
          spacing="lg"
          sx={{
            color: "#FFFFFF",
          }}
        >
          <SiPython />
          <SiJavascript />
          <SiTypescript />
          <SiReact />
          <SiNextdotjs />
          <SiFastapi />
          <SiUbuntu />
          <SiFedora />
          <SiOpensuse />
        </Group>
      </Stack>
      <Divider
        mx={650}
        mt={25}
        sx={{
          color: "#FFFFFF",
        }}
      />

      <Stack align="center" justify="center" spacing="xl" my={50}>
        <Title
          order={3}
          sx={{
            color: "#FFFFFF",
          }}
          pt={25}
        >
          Deltaline
        </Title>

        <Text size="lg" color="white" align="center" mx={200} pb={25}>
          Deltaline is the name given to this digital portfolio. As a student
          here at GWHS, some teachers require us to make a &quot;Digital
          Portfolio&quot;, so if our employer asks, we can use this on our
          resume. The Digital Portfolio also acts as an archive for all of the
          old schoolwork. Deltaline had been originally made on Google Sites,
          since this locks into Google&apos;s wide ecosystem targeted at the
          education sector. This is meant to house the World History (now
          deprecated, will not get any support) and Japanese section. This
          primarily focuses on the Japanese section, but by the end of the
          school year, I started to notice major problems within that page.
        </Text>
      </Stack>

      <Divider
        mx={650}
        mt={25}
        sx={{
          color: "#FFFFFF",
        }}
      />

      <Stack align="center" justify="center" spacing="xl" my={50}>
        <Title
          order={3}
          align="center"
          sx={{
            color: "#FFFFFF",
          }}
          pt={25}
        >
          Issues with Google Sites and the Birth of Deltaline
        </Title>

        <Text size="lg" color="white" align="center" mx={200}>
          By the end of the school year, the Japanese page had become too laggy,
          and started to affect performance. As an avid programmer, I started to
          wonder how could I try and fix this issue. So most of the summer
          (summer of 2021) was spent figuring out how to rewrite this into a
          more better version of itself. As a proof of concept, I originally
          tested out each HTMl iframes on a seperate HTML page. And the iFrames
          loaded faster on the HTML page compared to the Google Sites version.
          (not even hosted on a web server during testing)
        </Text>

        <Text size="lg" color="white" align="center" mx={200}>
          And thus, Deltaline was born. A faster, more progressive version of
          this digital portfolio.
        </Text>
        <Text size="lg" color="white" align="center" mx={200}>
          Google Sites contains so many issues that end up lagging lower end
          systems (like chromebooks). Deltaline will be powered by Next.js +
          SSR, which increases the load times by a lot. Deltaline will also be
          built on TypeScript, which will be my first project with TypeScript.
          The frontend ui lib will be Mantine.{" "}
        </Text>
      </Stack>

      <Divider
        mx={650}
        mt={25}
        sx={{
          color: "#FFFFFF",
        }}
      />

      <Stack align="center" justify="center" spacing="xl" mt={50}>
        <Title
          order={3}
          sx={{
            color: "#FFFFFF",
          }}
          pt={25}
        >
          The Inner Workings of Deltaline
        </Title>

        <Text size="lg" color="white" align="center" mx={200}>
          Deltaline is powered by Next.js + SSR. This means that the load times
          are insane and perform way way faster than Google Sites (and Angular
          as well). The bundle size for Deltaline is also really really small
        </Text>

        <Text size="lg" color="white" align="center" mx={200}>
          Deltaline is licensed under the GPL-3.0 License, open source, and can
          be found{" "}
          <Text
            variant="link"
            size="lg"
            component="a"
            href="https://github.com/No767/Deltaline"
          >
            here
          </Text>
          . Anyone is free to contribute, but the actual schoolwork itself is
          all rights reserved.{" "}
        </Text>
      </Stack>
    </>
  );
}
