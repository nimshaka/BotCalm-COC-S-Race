import MarqueeCard from "@/components/MarqueeCard";
import Tree3 from "../../assets/images/Tree2.png";

import "swiper/css";
import {  CockCardSlider } from "@/components/CockCard";

export default function About() {
  return (
    <section id="about">
      <div className="bg-gradient-to-r from-[#1D2801] via-[#324503] to-[#1D2801] mx-auto  flex-col max-w-[1920px]   md:h-auto  ">
        <div className="flex flex-col items-center justify-center w-full mt-0 -translate-y-32 md:flex-row md:-translate-y-0 max-w-[1920px] md:px-4 2xl:px-0">
          {/* About */}
          <div className="2xl:w-[1198px] 2xl:h-[388px] xl:w-[800px] xl:h-[360px] lg:w-[730px] lg:h-[300px] md:w-[620px] md:h-[250px] bg-[#151D00] flex w-[358px] h-[468px] rounded-3xl text-center text-white font-CaesarDressingRegular ">
            <div className="2xl:w-[673px] 2xl:h-[309px] xl:w-[600px] xl:h-[320px] lg:w-[550px] lg:h-[260px] md:w-[500px] md:h-[240px] mx-auto text-center p-[37px] lg:p-[20px] md:p-[8px]">
              <h2 className="mb-4 2xl:text-[74px] xl:text-[60px] lg:text-[50px] md:text-[45px] text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000] text-[40px]  ">
                ABOUT{" "}
                <span className="text-lime-400 drop-shadow-[4px_4px_0px_#000000] animate-bounce inline-block">
                  COQ
                </span>
              </h2>
              <p className="mb-6 2xl:text-[16px] xl:text-[14px] lg:text-[13px] md:text-[12px] text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000]">
                COQ Coin finds itself at the center of a whirlwind of
                controversy. In a shocking turn of events, Floki, the charming
                and playful Viking-themed meme coin, is wrongfully accused of
                being behind a devastating bomb blast. The headlines scream of
                conspiracy, as authorities hastily point fingers, and Floki's
                reputation hangs by a thread.
              </p>
              <button className="text-[#FDF4DC] transition-colors bg-[#EB2D26] border-[#151D00] rounded-full h-[57px] w-[190px] xl:h-[62px] xl:w-[200px] lg:h-[60px] lg:w-[195px] md:h-[58px] md:w-[190px] font-CaesarDressingRegular text-[20px] border-4 2xl:h-[67px] 2xl:w-[207px] hover:scale-110">
                BUY
              </button>
            </div>
          </div>
          {/* About */}
          {/* Tree */}
          <div className="">
            <div className="flex items-center justify-center translate-x-32 -translate-y-32 2xl:-translate-x-32 2xl:translate-y-0 md:-translate-x-20 md:-translate-y-1 lg:-translate-x-24 lg:translate-y-0 xl:-translate-x-28 xl:-translate-y-1">
              <img
                src={Tree3}
                alt="Tree"
                className="2xl:w-[223px] 2xl:h-[427px] xl:w-[190px] xl:h-[370px] lg:w-[160px] lg:h-[320px] md:w-[140px] md:h-[260px] w-[114.36px] h-[207px]"
              />
            </div>
          </div>
          {/* Tree */}
        </div>
        <div className=" -translate-y-52 md:-translate-y-0">
          <MarqueeCard></MarqueeCard>
        </div>

        {/* Coc section */}
        <div className="flex flex-col -translate-y-40  md:-translate-y-0 md:mt-[100px] items-center md:items-start ">
          {/* Text */}
          <div className="flex   font-CaesarDressingRegular 2xl:ml-[100px] md:ml-[28px] xl:ml-[140px] lg:ml-[40px]">
            <h2
              className="text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000] 
               text-[40px] md:text-[45px] lg:text-[50px] xl:text-[60px] 2xl:text-[64px]"
            >
              Create your own{" "}
              <span className="text-[#B5FF07] drop-shadow-[4px_4px_0px_#000000] animate-bounce inline-block">
                COQ
              </span>
            </h2>
          </div>
          {/* Text */}

          {/* Coc section */}
          <div className="flex items-center justify-center w-full  2xl:mt-[50px] mt-[50px] ">
            {/* <CardSlider /> */}{" "}
            <div className="flex flex-row  2xl:gap-[32px] justify-center items-center w-full h-auto  ">
              <CockCardSlider />
            </div>
          </div>
          {/* Coc section */}
        </div>
        <div className="2xl:mt-[100px] md:mt-[100px]  -mt-28 ">
          <MarqueeCard />
        </div>
      </div>
    </section>
  );
}
