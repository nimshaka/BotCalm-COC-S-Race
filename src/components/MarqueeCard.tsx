import Marquee from "react-fast-marquee";
import Star from "../assets/images/Star.png";

export default function MarqueeCard() {
  return (
    <>
      <div className="bg-[#B5FF07] 2xl:h-[147px]  rounded-tl-[20px] rounded-br-[20px] w-auto flex justify-center items-center  overflow-hidden h-[117px]">
        {/* Rotated Marquee Wrapper */}
        <div className="bg-[#F4FFDB] h-[58px] w-auto md:transform rotate-[-3deg] flex justify-center  [transform:rotateX(-10deg)_rotateY(30deg)]">
          <Marquee speed={50} gradient={false}>
            {Array(50)
              .fill("COC'S RACE")
              .map((text, index) => (
                <div key={index} className="flex items-center ">
                  <h2 className="font-CaesarDressingRegular 2xl:text-[48px] text-[38px]">
                    {text}
                  </h2>
                  <img
                    src={Star}
                    alt="star"
                    className="h-[34px] w-[34px] mx-2"
                  />
                </div>
              ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}
