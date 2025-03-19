import MainLayout from "@/layouts/MainLayout";
import About from "@/section/mainSection/About";

import Hero from "@/section/mainSection/Hero";
import RaceRegistration from "@/section/mainSection/RaceRegistration";
import RoadMap from "@/section/mainSection/RoadMap";
import Tokenomics from "@/section/mainSection/Tokenomics";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <section id="HOME"> <Hero /></section>
        <section id="HOWTOBUY"><RaceRegistration/></section>
        <section id="ABOUT"><About/></section>
        <section id="TOKENOMICS"><Tokenomics/></section>
        <section id="ROADMAP"><RoadMap/></section>
      </div>
    </MainLayout>
  );
};

export default Home;
