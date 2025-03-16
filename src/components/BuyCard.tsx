import React from "react";

interface BuyCardProps {
  title: string;
  value: string;
  highlight?: boolean;
}

const BuyCard: React.FC<BuyCardProps> = ({ title, value, highlight }) => {
  return (
    <div className="relative flex items-center justify-center 
        w-[348px] md:w-[280px] lg:w-[280px] xl:w-[360px] 2xl:w-[368px]
        h-[171px]  md:h-[160px] lg:h-[160px] xl:h-[200px] 2xl:h-[196px] 
        bg-[#151D00] rounded-3xl shadow-lg text-center font-CaesarDressingRegular">
      
      <div className="flex flex-col justify-center">
        <p className=" text-[35px]  text-[#B5FF07] drop-shadow-[4px_4px_0px_#000000] flex justify-start">
          {title.toUpperCase()}
        </p>
        <p className={`text-[14px] text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000] ${highlight ? "font-extrabold" : ""}`}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default BuyCard;
