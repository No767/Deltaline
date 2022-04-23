import { Body } from "../../lib/about-components/body";
import { Profile } from "../../lib/about-components/profile";
import { NavbarMain } from "../../lib/index-components/navbar-main";
import { Footer } from "../../lib/index-components/footer";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div>
      <NavbarMain />
      <Profile />

      <Body />
      <Footer />
    </div>
  );
};

export default About;
