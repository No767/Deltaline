import React from "react";

import { Group, Title, Text, Stack, Image, Divider } from "@mantine/core";

export function Body2({}) {
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
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/ema.jpg"
          radius="md"
          alt="Ema"
          caption="2022 Ema Card
          "
        />
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/nengajo.jpg"
          radius="md"
          alt="Letter to Saijo V2 Pg 2"
          caption="2022 Nengajo Card"
        />
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/omikuji.jpg"
          radius="md"
          alt="omikuji"
          caption="おみくじ (Fortune Card)
          "
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
        <Title order={3}>お正月 （年賀状、絵馬、御神籤) </Title>
        <Title order={4}>二月十二日</Title>
        <Title order={4} pt={25}>
          年賀状
        </Title>
        <Text size="lg" align="center">
          This year&apos;s Nengajo design was very similar to last year&apos;s,
          but it&apos;s kinda modified. Nengajo cards are basically New year
          cards, and you traditionally make them before each new year. In this
          case, it was a class assignment. I will admit that I&apos;m, not a
          good artist, but I am a good programmer. This Nengajo assignment is
          really based on whether you are good at art or not. I have never had
          an interest in art personally, and I&apos;m not good at it.
          Personally, that limitation for being good at art is the challenging
          part. It&apos;s what held me back from really being able to draw
          something really good. Next time, I have a plan in place. Instead of
          drawing it out, why not build a website to display it? I am a Full
          Stack Web Developer and have been working on React and Next.js
          (Deltaline will receive a full rewrite at one point, that uses Next.js
          to handle stuff) websites. So why not put it to good use? On top of
          that, I&apos;m much better at 3D modeling than drawing, so I can
          inject blender models into that website, so it is possible for me to
          build something like that.
        </Text>
        <Title order={4}>絵馬</Title>
        <Text size="lg" align="center">
          An えま (ema) is a wooden board, and you can write wishes and hang it
          up in the temples. We tried to do something like this, but without a
          temple of course. We mainly wrote these on paper shaped an ema and
          hung them in the classroom. As you can, that&apos;s my design for this
          year. I wrote on the back basically saying I want to get better at
          programming in Java. Personally, this was more of a reflection on the
          cultural experiences and ideals. This was really a part of a bigger
          picture into the traditional cultures that reflected the New Year unit
          (おしょうがつ). I think the most challenging parts for people in the
          design, but for me, that wasn&apos;t the case. The design is from my
          Nengajo design, so I was able to draw it quickly. I mainly had trouble
          with the sentences to be honest. Personally, this is more of a
          reflection on culture, and learning from it is that the culture is
          really important as well. Just like the language itself, the culture
          is kinda the backbone to what the language really means. Without it,
          it&apos;s just a blank shell. I&apos;ve learned to take in more
          cultural experiences over the years. Even if you don&apos;t like it,
          it&apos;s something that you would want to do. It teaches better than
          anything else. Next time, I really need to think about what am I going
          to put for the sentence/wish part.{" "}
        </Text>
        <Title order={4}>御神籤</Title>
        <Text size="lg" align="center">
          This one is basically a fortune card, and we got it by giving our
          respects and praying at a &quot;temple&quot;, and randomly drawing it
          out of a jar. They came in different forms, such as bad luck and some
          others. From what you can see here, I was pretty unfortunate about
          what I got. This was done along with other ones that are going to be
          shown below. This one really was about bringing that cultural
          experience from Japan, and having a more in-depth look into the
          traditions of the New Year. There was a lot with this one, and it was
          interesting to see how Japanese people celebrated New Year. Here in
          America, we may just recognize it, but most can agree that we
          don&apos;t really care as much. Maybe with other families, it is
          different, but typically in my family, we just have a major family
          dinner and maybe get some red envelope money, and just move on.
          Personally, this one was more like an activity, so it wasn&apos;t
          really challenging. It was honestly quite fun. To reflect on this
          more, learning a language isn&apos;t about just learning it, but also
          learning the lifestyle and culture as well. Each country has its own
          unique culture, like France or Germany. But others were more or less
          influenced by the allies (the US and Europe). A lot of the culture has
          been changed slightly (For example, Japan&apos;s legal and court
          system is fundamentally based on the US court and legal system). But
          it is interesting to learn about the culture. Personally, not much got
          in the way, and this was more of an activity than a project or
          assignment.{" "}
        </Text>
      </Stack>

      <Divider size="xs" mt={35} mx={125} />
    </>
  );
}
