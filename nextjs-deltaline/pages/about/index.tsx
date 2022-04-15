import { Body } from "../../lib/about-components/body";
import { Profile } from "../../lib/about-components/profile";
import { Navbar } from "../../lib/index-components/navbar";
import { Footer } from "../../lib/index-components/footer";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Profile />

      <Body />
      <Footer />
    </div>
  );
};

export default About;
