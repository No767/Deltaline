import { Body1 } from "../../lib/japanese-1-components/body1";
import { Body2 } from "../../lib/japanese-1-components/body2";
import { MainBody } from "../../lib/japanese-1-components/main-body";
import { NavbarMain } from "../../lib/index-components/navbar-main";
import { Jpn1HeroHeader } from "../../lib/japanese-1-components/hero-header";
import { Footer } from "../../lib/index-components/footer";
import type { NextPage } from "next";

const japanese1: NextPage = () => {
  return (
    <div>
      <NavbarMain />
      <Jpn1HeroHeader />
      <MainBody />
      <Body1 />
      <Body2 />
      <Footer />
    </div>
  );
};

export default japanese1;
