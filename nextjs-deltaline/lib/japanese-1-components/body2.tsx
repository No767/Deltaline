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
      >
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/Letter-To-Saijo-V1-1.png"
          radius="md"
          alt="Letter to Saijo V1 Pg 1"
        />
        <Image
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/Letter-To-Saijo-V1-2.png"
          radius="md"
          alt="Letter to Saijo V1 Pg 2"
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
        <Title order={3}>Letter to Saijo V1</Title>
        <Title order={4}>2021/4/7</Title>
        <Text size="lg" align="center">
          This one is quite special since this is a digital letter to the
          students in one of the high schools in Saijo. The idea was to write a
          letter (both in Japanese and in English), and to kinda explain things
          like some basic info, what we usually do in a day, and other stuff. We
          first do it on google drawings and convert it to a pdf file. From
          there, we just give it to the teacher, and by April 5th, the teacher
          will send them all to the other teachers in Saijo, and they will print
          it out. And they will give it to the students. As of writing this,
          it&apos;s already 2 days past the due date, so I hope they already
          have read the letter and checked on this digital portfolio. The QR
          code just goes to this digital portfolio. Now, this was a fun
          experience and project to work on, since I already have gotten to
          interact with some of the students from that high school in Saijo. And
          I know that they are going to see this digital portfolio once they
          scanned it. Originally, I had gotten a custom domain, and made a
          version on my other accounts to add in the DNS records the domain, but
          I switched it to this digital portfolio last minute. This one is
          mainly for teachers and students to see, the other one is meant for
          more for family members, and the public to see. This project
          wasn&apos;t that challenging to work on, but I had a hard time getting
          started on the Japanese part of it. Until I managed to get it done by
          2 am PST. The Japanese portion was the most difficult to work on, and
          I will admit there is a couple of mistake in there, but it just shows
          you that I&apos;m learning and I make mistakes a lot. And that part
          took the longest to work on. The rest was easy to work on since the
          English portion only took around an hour to finish. Now, you may be
          asking: why are there 2 pages? There&apos;s only supposed to be one.
          Well, we were allowed 2 pages, if our letters were very long, just
          like mine. I had planned it where you would need both letters side by
          side in order to fully understand it. I added some captions, and some
          other stuff just for fun, and mostly covered the info from the
          Japanese part. But I also added a lot more, so it looks like an essay
          now. This project was the most exciting and fun to work on since I
          knew that the students from Saijo would be reading this. If you are
          reading this, I hope you enjoyed looking at the letter and my digital
          portfolio. I spent a lot of time working on this project.
        </Text>
      </Stack>
      <Divider size="xs" mt={35} mx={125} />
    </>
  );
}
