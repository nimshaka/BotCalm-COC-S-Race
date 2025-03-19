import React from "react";

type CardProps = {
  title: string;
  description: string;
};

const BuyCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    
    <div className=" flex items-center justify-center   shadow-2xl transition-shadow hover:drop-shadow-[0_0_20px_#B5FF07] md:pb-4 ">
      <div className="2xl:p-10 xl:p-4 text-center bg-[#151D00] rounded-3xl w-[368px] h-[206px] md:w-[150px] md:h-[200px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[196px] 2xl:w-[368px] 2xl:h-[196px]m lg:p-5 p-10 md:p-1 hover:scale-90">
        <h2 className="2l:text-[35px] text-lime-400 drop-shadow-[4px_4px_0px_#000000] font-CaesarDressingRegular 2xl:text-left md:text-[30px] md:text-center xl:text-left xl:text-[35px] text-left text-[35px]">{title}</h2>
        <p className="font-CaesarDressingRegular text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000] text-[14px] md:text-[12px] text-left md:text-center xl:text-left xl:text-[14px]">{description}</p>
      </div>
    </div>
    
  );
};

export default BuyCard;
