import { Body } from "../../lib/about-components/body";
import { Profile } from "../../lib/about-components/profile";
import type { NextPage } from "next";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Navbar } from "../../lib/index-components/navbar";
import { Footer } from "../../lib/index-components/footer";

const About: NextPage = () => {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Quicksand",
        colorScheme: "dark",
        headings: { fontFamily: "Quicksand" },
      }}
      withGlobalStyles
    >
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Navbar />
        <Profile />

        <Body />
        <Footer />
      </div>
    </MantineProvider>
  );
};

export default About;
