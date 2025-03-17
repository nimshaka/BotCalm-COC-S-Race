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
        <Hero />
        <RaceRegistration/>
        <About/>
        <Tokenomics/>
        <RoadMap/>
      </div>
    </MainLayout>
  );
};

export default Home;
