import FooterMarquee from "@/components/FooterMarquee";
import NavButton from "@/components/NavButton";
import React, { useState } from "react";
import Telegram from "../../assets/images/Telegram2.png";
import SpaceX from "../../assets/images/SpaceX2.png";
import DexTool from "../../assets/images/DexTools.png";
import Marquee from "react-fast-marquee";

export default function RoadMap() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");

  const navItems = [
    { label: "HOME", key: "HOME", href: "#home" },
    { label: "ABOUT US", key: "ABOUT", href: "#about" },
    { label: "TOKENOMICS", key: "TOKENOMICS", href: "#tokenomics" },
    { label: "HOW TO BUY", key: "HOWTOBUY", href: "#how-to-buy" },
    { label: "ROAD MAP", key: "ROADMAP", href: "#roadmap" },
  ];

  const handleTabClick = (key: string) => {
    setActiveTab(key);
    setMenuOpen(false);
  };

  const greenBlocks = Array(300).fill(null);

  // Social media items with proper icons
  const socialItems = [
    { name: "TELEGRAM", img: Telegram },
    { name: "TWITTER", img: SpaceX },
    { name: "DEX TOOLS", img: DexTool },
  ];

  return (
    <div className="bg-[#151D00] mx-auto max-w-[1920px] flex flex-col items-center mt-10">
      <div className="flex  font-CaesarDressingRegular 2xl:mt-[73px] mt-[45px]">
        <p className="text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000] 2xl:text-[74px] text-[40px]">
          get connected
        </p>
      </div>

      <div className="md:flex flex-wrap justify-center gap-2 mt-6 md:gap-2 lg:gap-4 xl:gap-5 2xl:mt-[50px] hidden">
        {navItems.map((item) => (
          <NavButton
            key={item.key}
            label={item.label}
            href={item.href}
            isActive={activeTab === item.key}
            onClick={() => handleTabClick(item.key)}
          />
        ))}
      </div>

      <div className="flex md:hidden mt-[20px]">
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <NavButton
              key={item.key}
              label={item.label}
              href={item.href}
              variant="mobile"
              isActive={activeTab === item.key}
              onClick={() => handleTabClick(item.key)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        {/* Top green blocks */}
        <div className="w-full">
          <Marquee gradient={false} speed={50} direction="right">
            <div className="flex gap-2 py-2">
              {greenBlocks.map((_, index) => (
                <div
                  key={`top-${index}`}
                  className="w-8 h-8 bg-[#B5FF07]"
                ></div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Social media cards */}
        <div className="py-4 border 2xl:w-[1443px] ">
          <Marquee gradient={false} speed={50} >
            <div className="flex space-x-10">
              {socialItems.map((item, index) => (
                <div
                  key={`social-${index}`}
                  className="flex items-center gap-8 px-12 py-12 shadow-md rounded-3xl bg-[#F4FFDB] w-[408px] h-[153px]"
                >
                  <img src={item.img} alt={item.name} className="" />
                  <span className="text-[40px]  text-[#151D00] font-CaesarDressingRegular md:text-4xl whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Bottom green blocks */}
        <div className="w-full">
          <Marquee gradient={false} speed={50} direction="right">
            <div className="flex gap-2 py-2">
              {greenBlocks.map((_, index) => (
                <div
                  key={`bottom-${index}`}
                  className="w-8 h-8 bg-[#B5FF07]"
                ></div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      <div className="text-[#FFFFFF]">
        <p className="font-TsukimiRoundedRegular text-[18px]">
          @2024 Coq's Race All Right Reserved
        </p>
      </div>
    </div>
  );
}
