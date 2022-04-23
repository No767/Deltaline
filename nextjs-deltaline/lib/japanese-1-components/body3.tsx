import React from "react";

import { Group, Title, Text, Stack, Image } from "@mantine/core";

export function Body3({}) {
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
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/march-challenge-chart.png"
          radius="md"
          alt="March Challenge Chart"
        />
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/march-challenge-proof.png"
          radius="md"
          alt="March Challenge Proof"
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
        <Title order={3}>March Challenge</Title>
        <Title order={4}>2021/4/7</Title>
        <Text size="lg" align="center">
          Well, another month has passed. And that means another challenge, and
          in this case, it&apos;s the March Challenge. This one is a little bit
          different, and we had to choose between 3 sets. This one was mainly
          focused on learning about different fruits and vegetables. I choose
          set B, where we had to write and list the fruits that we wanted to
          learn about in katakana and write about whether we liked them or not.
          We had to write out which fruits our family members liked and
          disliked. And the rest was mainly practice. (on the left, you can see
          some of the stuff that I wrote and practiced with) Well, just like
          last time, I didn&apos;t have much time to commit to practicing this,
          but now I do have a lot more time. The rest of the time I have will be
          going to learning Japanese and putting my best effort into it. There
          was a massive growth if you look at the graph on the left. Compared to
          last month&apos;s monthly challenge, this is a big improvement. There
          were a few fruits that had some kanji in them, and that made it
          challenging to try and memorize. But a lot of them were the easy ones,
          that only had katakana on them. And that made it a memorable one since
          now I can tell someone what types of fruits I like in Japanese. This
          could be useful to introduce myself and to have some fun with my
          family. As I do more of these challenges, I start to realize the
          purpose of them: to challenge and get outside of your comfort zone.
          And this could be applied to a lot of things. Like life itself. You
          won&apos;t learn unless you put yourself outside your comfort zone. I
          will always remember this motto: Seek Discomfort. This comes from Yes
          Theory, and their videos have truly made me push myself outside my
          comfort zone. If it weren&apos;t for that moto, I would have chosen
          something easier. As I&apos;m still learning this language, the most
          important thing that I learned is to step outside your comfort zone
          and to practice. Just like learning how to code or how to play an
          instrument, you won&apos;t learn unless you put yourself outside your
          comfort zone. That is something to truly ponder on...
        </Text>
      </Stack>
    </>
  );
}
