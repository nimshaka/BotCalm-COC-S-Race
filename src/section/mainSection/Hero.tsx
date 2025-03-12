import React, { useEffect, useState } from "react";
import Cvector from "../../assets/images/C-Vector.png";
import Evector from "../../assets/images/E-Vector.png";
import Cloud1 from "../../assets/images/Cloud1.png";
import Cloud2 from "../../assets/images/Cloud2.png";
import SocialIcons from "@/components/SocialIcons";
import Cock from "../../assets/images/Cock.png";
import Tree from "../../assets/images/Tree.png";
import MarqueeCard from "@/components/MarqueeCard";
import Navbar from "@/components/Navbar";

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#1D2801] via-[#324503] to-[#1D2801] ">
      <div className="flex flex-col items-center justify-between mx-auto max-w-[1920px]">
        <div className="flex  w-full  h-[72px] mt-1">
          <div className="relative w-full h-14 md:h-32">
            <div className="absolute top-0 flex justify-center md:-left-9 -left-4">
              <img
                src={Cloud1}
                alt="cloud1"
                className="z-20 w-20 md:w-40 lg:w-48 xl:w-52 2xl:w-80"
              />
            </div>
            <div className="absolute top-0 flex justify-center left-12 md:left-20 lg:left-28 xl:left-32 2xl:left-56">
              <img
                src={Cloud2}
                alt="cloud2"
                className="z-10 w-16 md:w-36 lg:w-44 xl:w-48 2xl:w-64"
              />
            </div>
            <div className="absolute top-0 flex justify-center left-36">
              <img
                src={Cloud2}
                alt="cloud2"
                className="w-10 md:hidden lg:hidden xl:hidden 2xl:hidden"
              />
            </div>
            <div className="absolute top-0 flex justify-center right-6 md:right-16 lg:right-20 xl:right-24 2xl:right-28">
              <img
                src={Cloud1}
                alt="cloud1"
                className="z-20 w-20 md:w-40 lg:w-48 xl:w-52 2xl:w-80"
              />
            </div>
            <div className="absolute top-0 flex justify-center -right-4 xssm:-right-6 md:-right-14 ">
              <img
                src={Cloud2}
                alt="cloud2"
                className="z-10 w-16 md:w-36 lg:w-44 xl:w-48 2xl:w-64"
              />
            </div>
          </div>
        </div>

        <div className=" h-[50px] w-full flex items-center justify-center">
          {/* <Navbar></Navbar> */}
        </div>

        <div className="flex flex-row items-center justify-center w-full  2xl:mt-[118px]  gap-x-16 lg:mt-3 ">
          <div className="hidden md:block 2xl:">
            <img
              src={Tree}
              alt="Tree"
              className=" 2xl:w-[372px] 2xl:h-[535px]  "
            />
          </div>

          <div className="flex flex-col items-center 2xl:-mt-16 md:mt-10">
            <div className="flex items-center justify-center">
              <h1 className="flex font-CaesarDressingRegular text-[60px] relative 2xl:text-[160px] md:text-[80px] lg:text-[100px] xl:text-[120px]">
                <span className="inline-block text-lime-400 drop-shadow-[4px_4px_0px_#000000]">
                  COQ'S
                </span>
                <span className="inline-block ml-4 text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000]">
                  RACE
                </span>
                <div className="absolute top-9 -left-10 2xl:top-36 2xl:-left-20 md:top-16 md:-left-12 lg:top-20 lg:-left-14 xl:-left-20">
                  <img
                    src={Cvector}
                    alt="Cvector"
                    className="w-[30px] h-[32px] sm:w-[35px] sm:h-[37px] md:w-[41px] md:h-[43px] lg:w-[50px] lg:h-[52px] xl:w-[60px] xl:h-[62px] 2xl:w-[71px] 2xl:h-[74px]"
                  />
                </div>
                <div className="absolute top-9 -right-4 2xl:top-6 2xl:-right-7 md:top-3 lg:-right-5 lg:top-4 xl:top-3 xl:-right-6">
                  <img
                    src={Evector}
                    alt="Evector"
                    className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[22px] xl:h-[23px] 2xl:w-[27px] 2xl:h-[28px]"
                  />
                </div>
              </h1>
            </div>

            <div className="flex items-center justify-center w-full">
              <button className="text-[#FDF4DC] transition-colors bg-[#EB2D26] border-[#151D00] rounded-full h-[57px] w-[190px] font-CaesarDressingRegular text-[20px] border-4 2xl:h-[67px] 2xl:w-[207px]">
                START RACE
              </button>
            </div>
            <div className="flex items-center justify-center w-full mt-[22px] 2xl:mt-[68px]">
              <SocialIcons />
            </div>
          </div>

          <div className="hidden md:block 2xl:-mb-24">
            <img
              src={Cock}
              alt="Cock"
              className="  2xl:w-[374px] 2xl:h-[581px] "
            />
          </div>
        </div>

        <div className="flex flex-row  items-center justify-center w-full  mt-[2.5px] md:hidden">
          <div className="flex items-center justify-center -mt-4 -mr-2 ">
            <img src={Tree} alt="Cock" className=" w-[203px] h-[292px] " />
          </div>
          <div className="flex items-center justify-center ">
            <img src={Cock} alt="Tree" className=" w-[185px] h-[287px]" />
          </div>
        </div>

        <div className="w-full 2xl:mt-16">
          <MarqueeCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
