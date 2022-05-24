import { Body1 } from "../../lib/japanese-2-components/body1";
import { Body2 } from "../../lib/japanese-2-components/body2";
import { Body3 } from "../../lib/japanese-2-components/body3";
import { Body4 } from "../../lib/japanese-2-components/body4";
import { Body5 } from "../../lib/japanese-2-components/body5";
import { MainBody } from "../../lib/japanese-2-components/main-body";
import { HeroHeader } from "../../lib/japanese-2-components/hero-header";
import { NavbarMain } from "../../lib/index-components/navbar-main";
import { Footer } from "../../lib/index-components/footer";
import type { NextPage } from "next";

const japanese2: NextPage = () => {
  return (
    <div>
      <NavbarMain />
      <HeroHeader />
      <MainBody />
      <Body5 />
      <Body1 />
      <Body2 />

      <Body3 />

      <Body4 />
      <Footer />
    </div>
  );
};

export default japanese2;
