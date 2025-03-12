import Placeholder from "../../assets/images/Placeholder.png";
import Award from "../../assets/images/award.png";
import Shield from "../../assets/images/shield-tick.png";
import Point from "../../assets/images/points.png";
import Map from "../../assets/images/map.png";
import Cock2 from "../../assets/images/Cock2.png";
import Map2 from "../../assets/images/map2.webp";
import Cock3 from "../../assets/images/Cock3.png";
import Tree2 from "../../assets/images/Tree2.png";
import Track from "../../assets/images/racing_track3.webp";
import Track2 from "../../assets/images/racing_track4.png";

export default function RaceRegistration() {
  return (
    <div className="bg-gradient-to-r from-[#1D2801] via-[#324503] to-[#1D2801] mx-auto max-w-[1920px] flex flex-col">
      <div className="flex flex-col w-full mt-[50px]  md:flex-row 2xl:mt-[220px] md:mt-[120px]">
        {/* Tree */}
        <div className="items-center justify-center hidden md:flex">
          <img
            src={Tree2}
            alt="Tree"
            className="2xl:w-[223px] 2xl:h-[427px] mt-16"
          />
        </div>
        {/* Tree */}

        {/* Text */}
        <div className="flex flex-col items-center 2xl:-translate-x-5 2xl:-translate-y-8">
          <div className="text-[38px] font-CaesarDressingRegular  2xl:text-[74px] text-nowrap md:text-[34px] lg:text-[38px]">
            <div className="flex justify-center ">
              <p className="text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000]">
                WANNA REGISTER WITH
              </p>
            </div>
            <div className="flex items-start space-x-5">
              <span className=" text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000] ">
                COC'S RACE ?
              </span>
              <span className=" text-lime-400 drop-shadow-[4px_4px_0px_#000000] ">
                LET'S JOIN
              </span>
            </div>
          </div>
          {/* Text */}

          {/* Placeholder */}
          <div>
            <div className="flex justify-center font-CaesarDressingRegular mt-[49px] 2xl:mt-[9px]">
              <div className="flex items-center rounded-full border border-[#FDF4DC] w-[358px] h-[76px]  md:justify-between 2xl:w-[655px] 2xl:h-[86px]">
                <img
                  src={Placeholder}
                  alt="place holder"
                  className="w-[64px] h-[58px] rounded-full bg-[#FDF4DC] md:hidden ml-2 "
                />
                <input
                  type="text"
                  placeholder="ENTER TOKEN ADDRESS"
                  className="flex px-4 text-[16px]  uppercase placeholder-[#FDF4DC]  bg-transparent outline-none text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000] md:text-[20px]"
                />
                <button className="text-[#FDF4DC] transition-colors bg-[#EB2D26] border-[#151D00] rounded-full w-[87px] h-[58px] mr-1 border-4 2xl:w-[207px] 2xl:h-[67px] text-[16px] md:text-[20px]">
                  BUY
                </button>
              </div>
            </div>
            {/* Placeholder */}

            {/* Icons */}

            <div className="flex flex-row justify-center space-x-2 text-nowrap text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000] text-[10px] 2xl:text-[16px] font-CaesarDressingRegular 2xl:gap-[50px] mt-[10px]  lg:-translate-x-0">
              <div className="flex items-center ">
                <img
                  src={Point}
                  alt="Ratings Icon"
                  className="w-[24px] h-[24px]"
                />
                <span className="">4.9/5 Average Ratings</span>
              </div>

              <div className="flex items-center ">
                <img
                  src={Award}
                  alt="Ratings Icon"
                  className="w-[24px] h-[24px]"
                />
                <span className="">25+ Winning Awards</span>
              </div>

              <div className="flex items-center ">
                <img
                  src={Shield}
                  alt="Ratings Icon"
                  className="w-[24px] h-[24px]"
                />
                <span className="">Certified Product Designer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image1 */}
        <div className="flex items-center justify-center ">
          <img
            src={Map}
            alt="map"
            className="w-[338px] h-[343px] md:hidden mt-[30px]"
          />
          <img
            src={Cock2}
            alt="Cock2"
            className="hidden md:block 2xl:w-[342px] 2xl:h-[507px]  z-20"
          />
        </div>
        {/* Image1 */}

        {/* Image2 */}
        <div className="flex items-center justify-center lg:items-start">
          <img
            src={Cock3}
            alt="Cock3"
            className="bottom-0 md:hidden w-[213px] h-[316px] -translate-y-12"
          />
          <img
            src={Map2}
            alt="Map2"
            className="hidden md:block 2xl:w-[670px] 2xl:h-[408px] lg:-translate-x-10 md:-translate-x-5 md:-mt-10"
          />
        </div>
        {/* Image2 */}
      </div>

      <div className="flex-col ">
        <div className="flex flex-col items-center justify-center w-full h-auto -translate-y-40 2xl:-translate-y-24 lg:-translate-y-16 md:-translate-y-10">
          {/* Racing Track */}
          <div className="w-full">
            <img src={Track} alt="Racing Track" className="hidden sm:flex" />

            <img
              src={Track2}
              alt="Racing Track"
              className="flex w-full sm:hidden"
            />
          </div>
          {/* Racing Track */}

          
        </div>
      </div>
    </div>
  );
}
