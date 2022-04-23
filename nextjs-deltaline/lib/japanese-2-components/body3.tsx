import React from "react";
import { Group, Title, Text, Stack, Image, Divider } from "@mantine/core";

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
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/LTR-Saijo-V4-Haruto-1.png"
          radius="md"
          alt="LTR-Saijo-V4-1"
          caption="はるとさん"
        />
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/LTR-Saijo-V4-Haruto-2.png"
          radius="md"
          alt="LTR-Saijo-V4-2"
          caption="はるとさん"
        />
      </Group>
      <Group
        align="center"
        position="center"
        direction="row"
        spacing="md"
        pt={50}
        mx={50}
      >
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/LTR-Saijo-V4-Koyuki-1.png"
          radius="md"
          alt="LTR-Saijo-V4-1"
          caption="こゆきさん"
        />
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/LTR-Saijo-V4-Koyuki-2.png"
          radius="md"
          alt="LTR-Saijo-V4-2"
          caption="こゆきさん"
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
        <Title order={3}>Letter to Saijo V4</Title>
        <Title order={4}>十二月十日</Title>
        <Text size="lg" align="center">
          Well, it&apos;s been a while. And I have come with another version of
          the Saijo Letter. This time it is the v4 or the 4th version. This time
          we talked about stuff like winter plans, and basically our traditions
          (within the American lifestyle). I really talked about my programming
          so far, and working on Rin and Kumiko. But there is a key difference;
          both letters are not really the same. It shares the same basic
          framework, but a lot of the details were swapped out. For
          Haruto&apos;s Letter, I inserted a picture of me coding using PyCharm,
          which is one of my main IDEs. For Koyuki&apos;s letter, I used VS Code
          and was working on the MangaDex integration. And I swapped some of the
          details as well. Honestly, I found out that I usually perform better
          if I have more time to get the job done. If I am under pressureI
          usually perform worse, since I can&apos;t really take my time and
          think. I used a lot of different kanji, and haruto&apos;s version, I
          used even more than koyuki&apos;s version, and I was probably wasting
          time for that when I should have been studying for my AP Stats FRQ and
          MC for my midterms. (For context, this year I&apos;m taking AP Stats
          and APUSH) And I kinda feel a little bad for not inserting a picture
          of me, but nonetheless, they will get to see me once I get to go to
          Japan during 2022. I would say that the time pressure added to me not
          performing as well, and was something that really challenged me. And
          this really added a level that I kinda didn&apos;t need. Personally I
          learned that the more practice I have, the better I&apos;ll be.
          It&apos;s kinda like practicing for the ap exams, where more practice
          that you do for stuff like the FRQ (Free Response Questions) and the
          DBQs (Document Based Questions) really help out. And personally I
          learned that practice makes a massive difference compared to not
          practicing. I guess the same could be said for music or any other
          skill as well. Personally, I would have done things differently, where
          I make a ton of mock letters in order to better practice this. And
          next time, I&apos;ll come more prepared and maybe graph out my
          progress.
        </Text>
      </Stack>
      <Divider size="xs" mt={35} mx={125} />
    </>
  );
}
