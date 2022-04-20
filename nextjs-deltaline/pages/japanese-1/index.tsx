import { Body } from "../../lib/japanese-1-components/body";
import { NavbarMain } from "../../lib/index-components/navbar-main";
import { Jpn1HeroHeader } from "../../lib/japanese-1-components/hero-header";
import { Footer } from "../../lib/index-components/footer";
import type { NextPage } from "next";

const japanese1: NextPage = () => {
  return (
    <div>
      <NavbarMain />
      <Jpn1HeroHeader />
      <Body />
      <Footer />
    </div>
  );
};

export default japanese1;
