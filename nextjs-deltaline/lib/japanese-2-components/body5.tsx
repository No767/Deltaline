import { FC } from 'react';

import { Group, Title, Text, Stack, Image, Divider } from "@mantine/core";


export const Body5: FC = () => {
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
          src="https://raw.githubusercontent.com/No767/Deltaline/dev/nextjs-deltaline/assets/jpn-trip-pic.png"
          radius="md"
          alt="Jpn-Trip-Pic"
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
          私の日本りょこうガイドをしょうかいします
        </Title>
        <Title order={4} align="center">
          {" "}
          五月十二三日
        </Title>
        <Text size="lg" align="center">
          Well, this is going to be my last entry within this portfolio. I have made the decision not to take any further Japanese courses, due to time constraints and a focus on the things that matter most. But this one was basically the last stand for me, and I literally tried everything and poured in over 18 hours of work for this one project. So this is the presentational video, where we are supposed to basically make a 5-day plan for a trip to Japan. But with some exceptions. You have to spend at least 1 day at Saijo and visit your world heritage cultural site. For mine, I chose 姫路城, which is now a place I kinda wanna visit someday. And we are supposed to plan out stuff like what we plan on doing that day, where are we going to stay, and other stuff. Personally, this time around, I feel like I did much much better than before. I had planned out this in weeks advance and spent hours in a cold dark room recording myself over and over again. I think instead of spending time rushing it, planning it out to the littlest details really helped this time around. And the fact that I planned it out reflected the length of the video, which was 30 mins long. It took me around 40 mins to render it, and this is running on a pretty good graphics card. This was really the turning point, and this is where things started to go right. I had a lot of anxiety when first starting out, and I knew I screwed up the first part of the video really really badly. And personally, that was one of the most challenging parts, is to speak more slowly. I had slurred a lot due to my anxiety, and that probably docked a lot of points down. And personally, I think I learned a lot, and the lesson is really just to take it slow. No one is rushing you, or forcing you to complete it in minutes. Really taking my time helped with this, and really really would have been helpful beforehand. And practice would have also helped. I didn&apos;t really look through a lot of the materials beforehand, so that would have been nicer. And personally what really got in the way was my anxiety. I have a tendency to speak really fast, and that&apos;s in both English and Japanese. And sadly there is kinda no way to quell that feeling. And that got in the way a lot. There were a lot of pauses in the video, and that was needed so I could actually attempt to calm myself down. And even deep breathing exercises won&apos;t even help as well. So maybe next time, I would go slowly, and start recording at the very least 2-3 weeks beforehand, and do the research as soon as the slightest bit of info came out.
        </Text>
      </Stack>
      <Divider size="xs" mt={35} mx={125} />

    </>

  );
}
