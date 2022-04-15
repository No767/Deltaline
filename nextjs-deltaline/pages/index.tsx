import { Body } from "./../lib/index-components/body";
import { Footer } from "./../lib/index-components/footer";
import { HeroHeader } from "./../lib/index-components/hero-header";
import { Navbar } from "./../lib/index-components/navbar";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <HeroHeader />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
