import Telegram from "../assets/images/telegram.png";
import Spacex from "../assets/images/spacex.png";
import Infint from "../assets/images/infinit.png";
import Seeklogo from "../assets/images/seeklogo.png";

const SocialIcons = () => {
  const icons = [
    { src: Infint, width: "38%", height: "38%" },
    { src: Telegram, width: "36%", height: "36%" },
    { src: Spacex, width: "30%", height: "30%" },
    { src: Seeklogo, width: "45%", height: "45%" },
  ];

  return (
    <div className="flex  gap-[10px] 2xl:gap-[50px] md:gap-[15px] lg:gap-[20px] xl:gap-[25px]">
      {icons.map((icon, index) => (
        <a
          key={index}
          href="#"
          className="relative flex items-center justify-center w-[62px] h-[62px] bg-black rounded-full 2xl:w-[90px] 2xl:h-[90px] md:w-[64px] md:h-[64px] lg:h-[68px] lg:w-[68px] xl:w-[72px] xl:h-[72px]"
        >
          {/* Inner Green Border */}
          <div className="absolute w-[87%] h-[87%] rounded-full border-4 border-[#B5FF07]"></div>

          {/* Icon */}
          <img
            src={icon.src}
            alt="Social Icon"
            className="relative"
            style={{ width: icon.width, height: icon.height }}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
