import MainLayout from "@/layouts/MainLayout";

import Hero from "@/section/mainSection/Hero";
import RaceRegistration from "@/section/mainSection/RaceRegistration";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <Hero />
        <RaceRegistration/>
      </div>
    </MainLayout>
  );
};

export default Home;
