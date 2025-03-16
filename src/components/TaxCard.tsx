import React from "react";

interface TaxCardProps {
  title: string;
  value: string;
  highlight?: boolean;
}

const TaxCard: React.FC<TaxCardProps> = ({ title, value, highlight }) => {
  return (
    <div className="relative flex items-center justify-center 
        w-[348px] md:w-[280px] lg:w-[280px] xl:w-[360px] 2xl:w-[512px]
        h-[171px]  md:h-[160px] lg:h-[160px] xl:h-[200px] 2xl:h-[254px] 
        bg-[#506D05] rounded-3xl shadow-lg text-center font-CaesarDressingRegular">
      
      <div className="flex flex-col items-center">
        <p className=" text-[22px] text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000]">
          {title.toUpperCase()}
        </p>
        <p className={`text-[66px] text-[#B5FF07] drop-shadow-[4px_4px_0px_#000000] ${highlight ? "font-extrabold" : ""}`}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default TaxCard;
