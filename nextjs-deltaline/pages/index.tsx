import { Body } from "./../lib/index-components/body";
import { Footer } from "./../lib/index-components/footer";
import { HeroHeader } from "./../lib/index-components/hero-header";
import { NavbarMain } from "../lib/index-components/navbar-main";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <NavbarMain />
      <HeroHeader />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
