import React from "react";
import { Group, Title, Text, Stack, Image, Divider } from "@mantine/core";

export function Body1({}) {
  return (
    <>
      <Group
        align="center"
        position="center"
        direction="row"
        spacing="md"
        pt={50}
        mx={50}
      >
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/U4-JPN-Brochure-Pg-1.jpg"
          radius="md"
          alt="Front"
          caption="Page for where the city is, activies, and local foods
          "
        />
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/U4-JPN-Brochure-Pg-2.jpg"
          radius="md"
          alt="Letter to Saijo V2 Pg 2"
          caption="Backside for weather and seasons"
        />
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/U4-JPN-Brochure-Pg-3.jpg"
          radius="md"
          alt="Letter to Saijo V2 Pg 3"
          caption="Front Page"
        />
      </Group>

      <Stack
        align="center"
        justify="center"
        spacing="md"
        pt={25}
        sx={{
          color: "#FFFFFF",
        }}
        mx={50}
      >
        <Title order={3} align="center">
          日本りょこう　パンフレット{" "}
        </Title>
        <Title order={4} align="center">
          二月十八月
        </Title>
        <Text size="lg" align="center">
          The one above you see is one of my projects, the Japan Trip Brochure.
          The whole point of it is to design a brochure about your city (in my
          case, it was Tokyo) and introduce stuff like the weather, what you can
          do, and some local foods Honestly, this project was quite interesting.
          I actually didn&apos;t know much about the local foods, and one day if
          I actually get a chance to visit (probably in 4 months), I will try
          some of these out. It&apos;s really about how do we introduce these
          local stuff and put it in a brochure. Personally, this wasn&apos;t
          challenging, since it was mainly about drawing out the pictures and
          testing our skills now. I used a lot of forms from last year and some
          from this year to describe the foods, and other stuff that was on
          there. The most important thing that I learned is time management. I
          will admit that my time management isn&apos;t that good, so
          that&apos;s something that can be worked on. And learn to enjoy the
          culture. Even if you are not going, the most important thing to enjoy
          and learning new things. f you don&apos;t step outside your comfort
          zone, you won&apos;t learn new things or get to try new things. So
          always make sure to step outside your comfort zone if u want to learn.
          Personally, as stated before, time management got in the way.
          That&apos;s something that I really really need to work on, and next
          time, I should plan things out better. (and yes, i did use a little
          bit of kanji in this one)
        </Text>
      </Stack>

      <Divider size="xs" mt={35} mx={125} />
    </>
  );
}
