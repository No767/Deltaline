import React from "react";
import { Group, Title, Text, Stack, Image } from "@mantine/core";

export function Body4({}) {
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
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/ltr-saijo-v3-haruto.png"
          radius="md"
          alt="LTR-Saijo-V3-1"
        />
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/ltr-saijo-v3-koyuki.png"
          radius="md"
          alt="LTR-Saijo-V4-2"
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
          Letter to Saijo V3
        </Title>
        <Title order={4} align="center">
          {" "}
          九月二十二日
        </Title>
        <Text size="lg" align="center">
          Well, this letter is different. It&apos;s all about our summer
          experiences. But we have to write it to our friends at Saijo. As of
          writing this, this is only the japanese part of it. The English part
          and the images have not been done yet. That&apos;s for next week. But
          it does demonstrate something about my skill now having more
          experience than last time. We had 1 hour to write this part out and
          had only our outline with us. No phones, no dictionaries. I used the
          stuff we learned and exploited it to the fullest potential and even
          included stuff that wasn&apos;t on the outline. With these timed
          assessments, it is not possible to able for me to fully use
          everything, and be able to think it through. The Letter to Saijo
          V2&apos;s Japanese part took at least 4-6 hours of thinking and
          looking at Jisho and Quizlet so many times that in the end, I was
          basically going insane. And honestly, this was a lot easier than the
          V2 and even the V1. Granted I did swap out the subjects and basically
          wrote the same thing to 2 different people, but I feel like I was able
          to fully exploit it to my advantage. The outline was done outside of
          class, and all I did was just copy and paste and maybe add more
          content as well. For this assignment, i didn&apos;t find it
          challenging at all. It was quite easy, but more than likely that we
          didn&apos;t learn much in Unit 1, and only covered past tense,
          opinion, and reason, which the concepts were stuck in my mind. But
          overall, I didn&apos;t feel like this was a challenge. Maybe i came
          prepared this time? I don&apos;t know. This is still the beginning for
          me, and i must not show my ego. I have a long way to go, but I feel
          like, with the number of resources that there are, it is fully
          possible to learn. I have been able to achieve something that
          I&apos;ve always wanted to. And that&apos;s to read, write, and speak
          Japanese. And having the chance to do the OPA may sound like dread,
          but it&apos;s only preparing us for what&apos;s really outside if we
          decided to fully utilize it. And the more time you spend on it, the
          better the result will be. Progress wasn&apos;t halted by anything,
          and in fact, I actually planned this out fairly well. I would say that
          if I was to do it next time, it&apos;s just to follow the exact same
          thing I did this time.
        </Text>
      </Stack>
    </>
  );
}
