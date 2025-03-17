import React from "react";
import Marquee from "react-fast-marquee";
import Telegram from "../assets/images/telegram.png";
import Spacex from "../assets/images/spacex.png";
import Infinit from "../assets/images/infinit.png";
import Seeklogo from "../assets/images/seeklogo.png";

const FooterMarquee: React.FC = () => {
  return (
    <div className="relative py-6 overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 grid w-full h-full grid-cols-12 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-[#B5FF07] w-full h-full" />
        ))}
      </div>

      {/* Marquee Section */}
      <div className="relative">
        <Marquee speed={50} gradient={false} className="flex space-x-6">
          {[
            { icon: Telegram, text: "TELEGRAM" },
            { icon: Spacex, text: "TWITTER" },
            { icon: Seeklogo, text: "DEX TOOLS" },
            { icon: Infinit, text: "TELEGRAM" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F4FFDB] flex items-center justify-center space-x-3 rounded-2xl px-6 py-4 shadow-lg text-[#151D00] text-lg font-bold w-[250px] h-[80px] md:w-[300px] md:h-[90px] lg:w-[350px] lg:h-[100px] xl:w-[380px] xl:h-[110px]"
            >
              <img src={item.icon} alt={item.text} className="w-6 h-6 md:h-8 md:w-8" />
              <span>{item.text}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FooterMarquee;
